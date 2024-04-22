import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ChevronDwon from "$Icons/chevron-dwon";
import Wave from "$Wave";
import { useClickOut } from "$myhooks";
import React from "react";
import { useTitle } from "$machine/useTitle";
import { useIgnore } from "$machine/useIgnore";

interface Props {
  title: string;
  item: any;
  icon?: any;
  link?: any;
  isDrawer?: any;
}

const SubNav = React.memo(({ item, title,  icon, isDrawer }: Props) => {
  const { mass } = useIgnore((store) => store);
  const [toggle, setToggle] = useState<boolean>(!!"");
  const location = useLocation();
  const { handleTitle, } = useTitle((store) => store);
  const {handleClearMass} = useIgnore((store)=> store);
  const closeDom: React.MutableRefObject<HTMLDivElement> = useRef(null!);

  useClickOut(() => {
    if (!location.pathname.includes("detail") && !mass) {
      setToggle((_prev) => (_prev = false));
    }
  }, [closeDom, document.getElementById("outlet")]);


  return (
    <div className="cursor-pointer">
      <div
        ref={closeDom}
        onClick={() => {
          setToggle(!toggle);
          handleClearMass()
          handleTitle(title, icon);
        }}
      >
  
          <div
            className={`flex items-center justify-between   overflow-hidden transition-all duration-150 ease-in-out hover:bg-[#EEE6E2]`}
          >
            <div className="  flex gap-3 items-center px-5 py-3   ">
              <div className="ml-1">{icon}</div>
              <p
                className={`whitespace-nowrap overflow-hidden transition-all ease-in-out duration-300 ${
                  isDrawer ? "opacity-0" : "opacity-100"
                } `}
              >
                {title}
              </p>
            </div>
            <span
              className={`mr-4 ${
                toggle ? "rotate-[-90deg]" : "rotate"
              } transition-all duration-300 ease-in-out  `}
            >
              <ChevronDwon />
            </span>
          </div>
      </div>
      {item.map((child: any, index: number) => {
        let count = index + 1;
        let delay = count / 10;
        return (
          <Child
            key={index}
            delay={delay}
            child={child}
            toggle={toggle}
            setToggle={setToggle}
          />
        );
      })}
    </div>
  );
});

const Child = React.memo(({ delay, child, toggle, setToggle }: any) => {
  const location = useLocation();
  const isActivate = location.pathname.includes(child.link);
  const { handleTitle } = useTitle((store) => store);

  useEffect(() => {
    if (isActivate) {
      setToggle(true);
      handleTitle(child.subTitle, child.icon);
    }
  }, []);

  return (
    <div
      style={{ transitionDelay: delay + "s" }}
      className={` text-[13px]   overflow-hidden   ${
        toggle
          ? " h-[38px] opacity-100 transitation-all duration-500  ease-in-out "
          : " opacity-0 h-0 transitation-all duration-500  ease-in-out  "
      }`}
    >
      <Wave color="#ffffff80">
        <div
          className="w-full"
          onClick={() => handleTitle(child.subTitle, child.icon)}
        >
          <Link to={child.link}>
            <div
              className={`  overflow-hidden pl-[1.6rem]  ${
                location.pathname.includes(child.link) 
                  ? " bg-[#E6F4FF] font-[500]  text-black "
                  : ""
              }   flex justify-between items-center   py-[0.6rem] `}
            >
              <p className={` flex gap-3  whitespace-nowrap overflow-hidden`}>
                <span>{child.icon}</span>
                <span>{child.title}</span>
              </p>

              <p
                className={`h-[5px] w-[5px] rounded-full bg-black mr-6 ${
                  location.pathname.includes(child.link)
                    ? "opacity-1"
                    : "opacity-0"
                } `}
              ></p>
            </div>
          </Link>
        </div>
      </Wave>
    </div>
  );
});

export default SubNav;
