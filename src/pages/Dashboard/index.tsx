import SmallLoader from "$Icons/smallLoader";
import { useRequest } from "ahooks";


import CountUp from "react-countup";
import { countTotalApi } from "#Services";
import ChevronDwon from "$Icons/chevron-dwon";
import DollarIcon from "$Icons/Dollar";


const Dashbaord = () => {

  const { loading, data } = useRequest(countTotalApi);
  const { data: initialItem } = { ...data };
  const { data: count } = { ...initialItem }

  return (
    <div className="px-6 pt-6">
      {loading ? (
        <div className="h-[calc(100vh-49px)] flex justify-center items-center">
          <SmallLoader width={22} height={22} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 content-center gap-4 md:grid-cols-2 grid-cols-1">

          <div className="w-full h-auto p-4 rounded-md bg-white drop-shadow-xl flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <p className="uppercase text-[gray] font-[700] text-base">Sell</p>
              <div className="flex items-center text-[#2cc79e]">
                <div className="rotate-[180deg]">
                  <ChevronDwon color="#2cc79e" />
                </div>
                <p className="">{count?.total_sell && count?.total_sell.toString().length > 6 ? "M" : "K"}</p>
              </div>
            </div>
            <p className="text-3xl"><CountUp start={0} end={count?.total_sell} delay={0}>
              {({ countUpRef }) => {


                return (
                  <div>
                    <span ref={countUpRef} />
                    <span> Ks</span>
                  </div>
                )
              }}
            </CountUp></p>
            <div className="flex items-center justify-between">
              <p className="underline text-xs">Total Sell Amount</p>
              <span className="p-1 bg-[#2cc79e50] rounded-md"><DollarIcon color="#2cc79e" width={19} height={19} /></span>
            </div>
          </div>
         
          <div className="w-full h-auto p-4 rounded-md bg-white drop-shadow-xl flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <p className="uppercase text-[gray] font-[700] text-base">Buy</p>
              <div className="flex items-center text-[#2cc79e]">
                <div className="rotate-[180deg]">
                  <ChevronDwon color="#D81B60" />
                </div>
                <p className="text-[#D81B60]">{count?.total_buy && count?.total_buy.toString().length > 6 ? "M" : "K"}</p>
              </div>
            </div>
            <p className="text-3xl"><CountUp start={0} end={count?.total_buy} delay={0}>
              {({ countUpRef }) => {

                return (
                  <div>
                    <span ref={countUpRef} />
                    <span> Ks</span>
                  </div>
                )
              }}
            </CountUp></p>
            <div className="flex items-center justify-between">
              <p className="underline text-xs">Total Buy Amount</p>
              <span className="p-1 bg-[#D81B6050] rounded-md"><DollarIcon color="#D81B60" width={19} height={19} /></span>
            </div>
          </div>


        </div>
      )}
    </div>
  );
};

export default Dashbaord;
