import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useMemoryClick, useQuery } from "$myhooks";
import { useCallback } from "react";
import Create from "./Create";
import { useState } from "react";
//@ts-ignore
import DatePicker from "react-datepicker";
import { useIgnore } from "$machine/useIgnore";
import CashInMonthlyListTable from "$List/cashin-monthy-list";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const CashInMonthlyList = (props: { loading: boolean; data: any }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { handleMass } = useIgnore((store) => store);
  const navigate = useNavigate();
  const query = useQuery();

  const date = query.get("date")!;
  const limit = query.get("limit")!;

  const { control, handleSubmit, reset } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
      month: "",
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
    const dail = moment(_data.month).format("MM");

    const limitItem = limit ? limit : "5";
    
    if(date === moment(startDate).format("MM")){
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
        <form
          onSubmit={handleSubmit(submitHandler)}
          className=" flex items-center  gap-3"
        >
          <InputField
            className="max-w-[250px] "
            label="Search"
            name="user"
            placeholder="User or Merchant"
            control={control}
          />
          <div className="">
            <p className="text-sm mb-1">Monthly </p>
            <Controller
              name="month"
              control={control}
              render={({ field: { onChange } }) => (
                <DatePicker
                  // maxDate={moment().toDate()}
                  selected={startDate}
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
              const limitItem = limit ? limit : "5";
              setTimeout(() => {
                navigate(
                  location.pathname +
                    "?date=" +
                    moment(new Date()).format("MM") +
                    "&page=1" +
                    "&limit=" +
                    limitItem + "&q="
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
      <CashInMonthlyListTable loading={props.loading} data={props.data} />
    </div>
  );
};

export default CashInMonthlyList;
