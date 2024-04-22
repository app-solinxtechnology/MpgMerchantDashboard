import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useMemoryClick } from "$myhooks";
import { useCallback } from "react";
import Create from "./Create";
import DetailCashInDailyListTable from "$List/detail-cash-in-daily";
import { useNavigate } from "react-router-dom";


const DetailCashInDaily = () => {
  const navigate = useNavigate();
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="p-6">
      <Create handleOpen={handleOpen} handleClose={handleClose} open={open} />
      <div className="flex justify-between items-center mb-3">
        <div className=" flex items-center  gap-3">
          <InputField
            className="max-w-[250px] "
            label="Search "
            name="user"
            control={control}
          />
  
          <Button
            placeholder={"search"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="blue"
          >
            Search{" "}
          </Button>
        </div>
        <div>
        <Button
            onClick={()=>navigate(-1)}
            placeholder={"search"}
             variant="outlined"
            className="capitalize mt-6 shadow-none rounded-md"
            color="black"
          >
            Back
          </Button>
        </div>
      </div>
        <DetailCashInDailyListTable/>
    </div>
  );
};

export default DetailCashInDaily;
