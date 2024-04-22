import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useMemoryClick, useQuery } from "$myhooks";
import { useCallback } from "react";
import Create from "./Create";
import { useState } from "react";
//@ts-ignore
import DatePicker from "react-datepicker";
import CashOutDailyListTable from "$List/cashOut-daily-list";
import { useIgnore } from "$machine/useIgnore";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";

const CashOutDailyList = ({loading,data}:any) => {
  const [startDate, setStartDate] = useState(new Date());
  const {handleMass} = useIgnore()

  const navigate = useNavigate();
  const query =useQuery();

  const date = query.get('date')!;
  const limit = query.get('limit')!;
  const location = useLocation();

  const { control ,handleSubmit ,reset } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
      daily:""
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitIng = (_data: FieldValues) => {
    //@ts-ignore
    const dail = moment(_data.daily).format("YYYY[-]MM[-]D");
   
    const limitItem = limit ? limit : "5"
    if(date === moment(startDate).format("YYYY[-]MM[-]D")){
   
      navigate(location.pathname + "?date=" + date+"&q="+_data.user+"&page=1"+"&limit="+limitItem);
    }else{
        
      navigate(location.pathname + "?date=" + dail+"&q="+_data.user+"&page=1"+"&limit="+limitItem);
    }
    // navigate(location.pathname + "?date=" + dail+"&q="+_data.user+"&page="+pageItem+"&limit=5");
  }
  return (
    <div>
      <Create handleOpen={handleOpen} handleClose={handleClose} open={open} />
      <div className="flex justify-between items-center mb-3">
        <form  onSubmit={handleSubmit(handleSubmitIng)} className=" flex items-center  gap-3">
          <InputField
            className="max-w-[250px] "
            label="Search "
            name="user"
            control={control}
          />
          <div>
            <p className="mb-1 text-sm">Daily</p>
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
            onClick={()=>{
              reset()
              const limitItem = limit ? limit : "5"
              setTimeout(()=>{
                navigate(location.pathname+"?date="+moment(new Date()).format("YYYY[-]MM[-]D")+"&page=1"+"&limit="+limitItem)
              },100)
                setStartDate(new Date())
              
            }}
            
            placeholder={"Reset"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="black"
          >
            Reset
          </Button>
        </form>
      </div>
      <CashOutDailyListTable loading={loading} data={data}/>
    </div>
  );
};

export default CashOutDailyList;
