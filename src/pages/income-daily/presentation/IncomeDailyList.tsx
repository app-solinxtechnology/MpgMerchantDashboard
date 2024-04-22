// import InputField from "$components/form/InputFiled";
import { useIgnore } from "$machine/useIgnore";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
//@ts-ignore
import DatePicker from "react-datepicker";
import DailyIncomeListTable from "$List/income-daily";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";

const IncomeDailyList = ({ loading, data }: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const { handleMass } = useIgnore((store) => store);
  const navigate = useNavigate();


  const location = useLocation();

  const { control, handleSubmit, reset } = useForm({
    mode: "all",
    defaultValues: {
      daily: "",
    },
  });

  const handleSubmitIng = (_data: FieldValues) => {
    //@ts-ignore
    const dail = _data.daily
      ? moment(_data.daily).format("YYYY[-]MM[-]D")
      : moment(new Date()).format("YYYY[-]MM[-]D");

    navigate(location.pathname + "?date=" + dail);

    // navigate(location.pathname + "?date=" + dail+"&q="+_data.user+"&page="+pageItem+"&limit=5");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <form
          onSubmit={handleSubmit(handleSubmitIng)}
          className=" flex items-center  gap-3"
        >
          <div className=" ">
            <p className="text-sm mb-1">Daily</p>
            <Controller
              control={control}
              name="daily"
              render={({ field: { onChange } }) => (
                <DatePicker
                  // minDate={moment().toDate()}
                  maxDate={moment().toDate()}
                  selected={startDate}
                  onChange={(dates: any) => {
                    handleMass(dates);
                    setStartDate(dates);
                    onChange(dates);
                  }}
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
                    moment(new Date()).format("YYYY[-]MM[-]D")
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
      <DailyIncomeListTable loading={loading} data={data} />
    </div>
  );
};

export default IncomeDailyList;
