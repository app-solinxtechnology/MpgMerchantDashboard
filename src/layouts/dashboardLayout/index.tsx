import { Outlet } from "react-router-dom";
import SidebarSubItem from "../components/SidebarSubItem";
import { navConfig } from "../config";
import logo from "../../images/mpg-logo.png";
import HaderComponent from "../components/hearder";
import { Button } from "@material-tailwind/react";
import ChevronDwon from "$Icons/chevron-dwon";
import { useCallback } from "react";
import { useMemoryClick } from "$myhooks";
import React from "react";


const DashboardLayout = React.memo(() => {
  const [isDrawer, setIsDrawer] = useMemoryClick(false);
  

  const HandleToggle = useCallback(() => {
    setIsDrawer((_prev:boolean) => !_prev);
  }, []);

  return (
    <>
      <main className="w-full h-screen flex bg-[rgb(249,249,249)]">
        <div
          className={` bg-[#fff] border-r transition-all duration-500 ease-in-out ${
            isDrawer ? "w-[6%]" : "w-[20%]"
          }    `}
        >
          <div className=" py-1  px-4 flex items-center gap-4 border-b">
            <img
              src={logo}
              alt="mpg-logo"
             
              className="rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
            />
            <p
              className={`font-[600] whitespace-nowrap transition-all duration-300 ease-in-out ${
                isDrawer ? "opacity-0 delay-0" : "opacity-100 delay-300"
              }`}
            >
              Merchant Admin
            </p>
          </div>
          <div className="relative">
            <div className="h-[calc(100vh-49px)] pb-12 overflow-y-scroll scrollbar-hide">
              {navConfig.map((item: any, index: number) => (
                <SidebarSubItem
                  key={index}
                  index={index}
                  item={item}
                  isDrawer={isDrawer}
                />
              ))}
            </div>
            <div className="w-full absolute bottom-0  ">
            <Button
                onClick={HandleToggle}
                placeholder={"mpg-button"}
                size="md"
                className="bg-white border rounded-none w-full !py-2"
              >
                <span
                  className={` inline-block transition-all duration-500 ease-in-out ${
                    isDrawer ? "rotate-[90deg]" : "rotate-[-90deg]"
                  }`}
                >
                  <ChevronDwon color="black"/>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div
          className={` transition-all duration-500 ease-in-out ${
            isDrawer ? "w-[94%]" : "w-[80%]"
          }`}
        >
          <HaderComponent />

          <div id="outlet" className=" w-full h-[calc(100vh-49px)] overflow-y-scroll ">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
});

export default DashboardLayout;
