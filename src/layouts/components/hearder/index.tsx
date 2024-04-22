import { useMemo, useRef, useState } from "react";

import { useRequest, useSize, } from "ahooks";

import React from "react";
import { useTitle } from "$machine/useTitle";
import { LoaderIcon } from "react-hot-toast";
import { merchantProfile } from "#Services";
import { useNavigate } from "react-router-dom";


const HaderComponent = React.memo(() => {
  const ref = useRef(null);
  const size = useSize(ref);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, icon } = useTitle((store) => store);

  const navigate = useNavigate();
  // console.log(data.getTotalCount.totalcount,userData.id,'message count')
  const titlePage = useMemo(() => {
    return title
  }
    , [title])
  const iconPage = useMemo(() => {
    return icon
  }
    , [icon])

  const { data, loading } = useRequest(merchantProfile);

  const { data: initial }: any = { ...data };
  const { data: item = {} }: any = { ...initial };

  console.log(item)

  return (
    <div className="px-6 py-1 border-b bg-white">
      <div className="flex  justify-between items-center">
        <p className=" font-[600] flex space-x-2 items-center  text-[14px]">
          <span>{iconPage}</span>
          <span>{titlePage ? titlePage : "Dashboard"}</span>
        </p>
        <div className="flex gap-2 items-center">
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            ref={ref}
            className="relative flex items-center gap-2 cursor-pointer hover:bg-[#eaeaea] px-2 py-1 rounded "
          >
            {loading ? (
              <LoaderIcon className="w-[30px] h-[30px]" />
            ) : (
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={item.merchant_logo}
                    className="w-[32px] h-[32px] rounded-md object-cover"
                    alt=""
                  />
                </div>
                <p className="text-sm font-bold">{item.merchant_name}</p>
              </div>
            )}
            <div
              style={{ width: size?.width }}
              className={`absolute overflow-hidden transition-all duration-500 ease-in-out rounded bg-white shadow bottom-[-37px] left-0 ${isOpen
                ? "opacity-100 translate-y-0 z-10 "
                : "opacity-0 translate-y-6 z-[-10]"
                }`}
            >
              {/* <Link to={"/dashboard/user-profile"}>
                <p className="px-2 py-2 border-b text-sm border-b-[#aeaeae] hover:bg-[#eaeaea] ">
                  Profile
                </p>
              </Link> */}
              <p
                onClick={() => {
                  localStorage.removeItem("merchantToken");
                  setTimeout(() => navigate("/login"), 50)
                }}
                className="px-2 py-2 border-b text-sm border-b-[#aeaeae] hover:bg-[#eaeaea] "
              >
                Logout
              </p>
            </div>
          </div>
          {/* <Link to={"/dashboard/chat"}>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
        
          </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
});

export default HaderComponent;
