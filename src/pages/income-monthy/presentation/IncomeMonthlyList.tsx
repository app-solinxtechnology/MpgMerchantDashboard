import { useIgnore } from "$machine/useIgnore";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
//@ts-ignore
import DatePicker from "react-datepicker";
import MonthlyIncomeListTable from "$List/income-Monthly";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const IncomeMonthlyList = ({loading,data}:any) => {
  const [startDate, setStartDate] = useState(new Date());
  const { handleMass } = useIgnore((store) => store);
  const navigate = useNavigate()
  const { control ,reset, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      month: "",
    },
  });

  const handleSubmitIng = (_data: FieldValues) => {
    //@ts-ignore
    const dail = _data.month
      ? moment(_data.month).format("MM")
      : moment(new Date()).format("MM");

    navigate(location.pathname + "?date=" + dail);

    // navigate(location.pathname + "?date=" + dail+"&q="+_data.user+"&page="+pageItem+"&limit=5");
  };

  
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <form onSubmit={handleSubmit(handleSubmitIng)} className=" flex items-center  gap-3">
   
          <div className=" ">
            <p className="text-sm mb-1">Monthly</p>
            <Controller
              name="month"
              control={control}
              render={({ field: { onChange } }) => (
                <DatePicker
                  selected={startDate}
                  // maxDate={moment().toDate()}
                  onChange={(dates: any) => {
                    handleMass(dates);
                    setStartDate(dates);
                    onChange(dates);
                  }}
                  dateFormat={"MM"}
                  renderCustomHeader={(props:any) => (
                    <div {...props} className="hidden">
                      span
                    </div>
                  )}
                  showMonthYearPicker
                  className="rounded-md bg-[#efefef] px-3 py-2 "
                />
              )}
            />
          </div>
          <Button
            type="submit"
            placeholder={"search"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="blue"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              reset();

              setTimeout(() => {
                navigate(
                  location.pathname +
                    "?date=" +
                    moment(new Date()).format("MM")
                );
              }, 100);
              setStartDate(new Date());
            }}
            placeholder={"Reset"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="black"
          >
            Reset
          </Button>
        </form>
      </div>
      <MonthlyIncomeListTable loading={loading} data={data}/>
    </div>
  );
};

export default IncomeMonthlyList;
