import { useIgnore } from "$machine/useIgnore";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
//@ts-ignore
import DatePicker from "react-datepicker";
import YearlyIncomeListTable from "$List/income-Yearly";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const IncomeYearlyList = ({loading,data}:any) => {
  const [startDate, setStartDate] = useState(new Date());
  const { handleMass } = useIgnore((store) => store);
  const navigate = useNavigate();
  const { control,reset ,handleSubmit } = useForm({
 
    defaultValues: {
      year: "",
    },
  });

  const handleSubmitIng = (_data: FieldValues) => {
    //@ts-ignore
    const dail = _data.year
      ? moment(_data.year).format("YYYY")
      : moment(new Date()).format("YYYY");

    navigate(location.pathname + "?date=" + dail);

    // navigate(location.pathname + "?date=" + dail+"&q="+_data.user+"&page="+pageItem+"&limit=5");
  };

  
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <form onSubmit={handleSubmit(handleSubmitIng)} className=" flex items-center  gap-3">
  
          <div className=" ">
            <p className="text-sm mb-1">Yearly</p>
            <Controller
           name="year"
           control={control}
           render={({field:{onChange}})=>(
            <DatePicker
            maxDate={moment().toDate()}
            selected={startDate}
            onChange={(dates:any)=>{
              handleMass(dates);
              setStartDate(dates);
              onChange(dates);
            }}
            startDate={startDate}
            dateFormat={"yyyy"}
            showYearPicker
            className="rounded-md  bg-[#efefef] px-3 py-2 "
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
                    moment(new Date()).format("YYYY")
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
      <YearlyIncomeListTable loading={loading} data={data}/>
    </div>
  );
};

export default IncomeYearlyList;
