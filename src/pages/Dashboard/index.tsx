import SmallLoader from "$Icons/smallLoader";
import { useRequest, useSize } from "ahooks";
import { useRef } from "react";
// import TotalRevenue from "../../components/charts/TotalRevenue";
// import TotalUser from "../../components/charts/TotalUser";
// import admin from "../admin";
// import merchant from "../merchant";
// import Package from "../Package";
import Sell from "$Icons/Sell";
import PackageIcon from "$Icons/PackageIcon";
import CountUp from "react-countup";
import { countTotalApi } from "#Services";


const Dashbaord = () => {
  const ref = useRef(null!);
  const size = useSize(ref);
  const {loading,data}  = useRequest(countTotalApi);
  const {data:initialItem} = {...data};
  const {data:count} = {...initialItem}
  
  return (
    <div  className="px-6 pt-6">
     {loading ? (
        <div className="h-[calc(100vh-49px)] flex justify-center items-center">
          <SmallLoader width={22} height={22} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 content-center gap-4 md:grid-cols-2 grid-cols-1">
  
                <div
            style={size}
            className="bg-white  justify-self-center rounded flex shadow-sm justify-between items-center gap-5 py-5 px-10"
          >
            <div>
              <Sell  width={150} height={150} />
            </div>
            <div>
              <p className="text-4xl font-[700] mb-3 text-right "><CountUp duration={5} end={count?.total_sell}/></p>
              <p className="text-2xl ">Total Sell</p>
            </div>
          </div>
          <div
            ref={ref}
            className="bg-white rounded flex justify-between shadow-sm items-center gap-5 py-5 px-10"
          >
            <div>
              <PackageIcon  width={150} height={150} />
            </div>
            <div>
              <p className="text-4xl font-[700] mb-3 ">        <CountUp duration={5} end={count?.total_buy} /></p>
              <p className="text-2xl ">Total Buy</p>
            </div>
          </div>
     
   
        </div>
      )}
    </div>
  );
};

export default Dashbaord;
