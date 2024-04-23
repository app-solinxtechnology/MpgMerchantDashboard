import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useMemoryClick, useQuery } from "$myhooks";
import { useCallback } from "react";
import Create from "./Create";
import { useState } from "react";
//@ts-ignore
import DatePicker from "react-datepicker";
import CashInYearListTable from "$List/cashin-year-list";
import { useIgnore } from "$machine/useIgnore";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const CashInYearList = ({data,loading}:any) => {
  const [startDate, setStartDate] = useState(new Date());
  const {handleMass} = useIgnore(store=>store);
  const query = useQuery();

  const limit = query.get('limit')!;
  const date = query.get('date')!;
  const navigate = useNavigate();
  const { control , handleSubmit ,reset } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
      year:""
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (_data: FieldValues) => {
    const dail = moment(_data.year).format("YYYY");
    const limitItem = limit ? limit : "5";
  
   
    if(date === moment(startDate).format("YYYY")){
      navigate(
        location.pathname +
          "?date=" +
          date +
          "&q=" +
          _data.user +
          "&page=1" +
          "&limit=" +
          limitItem
      );
    }else{
      navigate(
        location.pathname +
          "?date=" +
          dail +
          "&q=" +
          _data.user +
          "&page=1" +
          "&limit=" +
          limitItem
      );
    }
    
  };

  
  return (
    <div>
      <Create handleOpen={handleOpen} handleClose={handleClose} open={open} />
      <div className="flex justify-between items-center mb-3">
        <form onSubmit={handleSubmit(submitHandler)} className=" flex items-center  gap-3">
          <InputField
            placeholder="User or Merchant"
            className="max-w-[250px] "
            label="Search"
            name="user"
            control={control}
          />
          <div>
            <p className=" text-sm mb-1">Yearly</p>
          <Controller
           name="year"
           control={control}
           render={({field:{onChange}})=>(
            <DatePicker
            // maxDate={moment().toDate()}
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
              const limitItem = limit ? limit : "5";
              setTimeout(() => {
                navigate(
                  location.pathname +
                    "?date=" +
                    moment(new Date()).format("YYYY") +
                    "&page=1" +
                    "&limit=" +
                    limitItem
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
        <CashInYearListTable data={data} loading={loading}/>
    </div>
  );
};

export default CashInYearList;
