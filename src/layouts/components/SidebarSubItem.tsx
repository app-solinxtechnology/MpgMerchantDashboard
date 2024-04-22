import { Link, useLocation } from "react-router-dom";
import SubNav from "./SubNav";
import Wave from "$Wave";
import React, { useEffect } from "react";
import { useTitle } from "$machine/useTitle";


interface Props {
  item: any;
  index: number;
  isDrawer: boolean;
}

const SidebarSubItem = React.memo(({ item, isDrawer }: Props) => {
  const location = useLocation();
  const {handleTitle} = useTitle()
  const  isActivate =  item.link === location.pathname
   
  useEffect(()=>{
      if(isActivate){
           handleTitle(item.title,item.icon)
      }
  },[])

  return (
    <div className="text-sm ">
      {!item.childrens ? (
        <>
          <div className="  cursor-pointer w-full">
            <Wave color="#ffffff70">
              <div className="w-full" onClick={()=>handleTitle(item.title,item.icon)}>
                <Link to={item.link}>
                  <div
                    className={` px-6 py-3 flex items-center hover:bg-[#EEE6E2] justify-between  ${
                      (location.pathname.includes('admin') && item.title === "Admin") || item.link === location.pathname 
                        ? "bg-[#E6F4FF] text-black  font-[500] delay-0"
                        : " delay-0 "
                    } w-full flex overflow-hidden  text-default   `}
                  >
                    <p className="flex items-center gap-3">
                      <span>{item.icon}</span>
                      <span
                        className={`  whitespace-nowrap overflow-hidden delay-0 transition-all duration-300 ease-in-out ${
                          isDrawer ? "opacity-0" : "opacity-100   "
                        }`}
                      >
                        {item.title}
                      </span>
                    </p>
                    <p
                      className={`h-[5px] w-[5px] rounded-full bg-black  ${
                        location.pathname === item.link
                          ? "opacity-1"
                          : "opacity-0"
                      } `}
                    ></p>
                  </div>
                </Link>
              </div>
            </Wave>
          </div>
        </>
      ) : (
        <>
          <SubNav
            item={item.childrens}
            icon={item.icon}
            link={item.link}
            title={item.title}
            isDrawer={isDrawer}
          />
        </>
      )}
    </div>
  );
});

export default SidebarSubItem;
