import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Body = ({ handleOpen }: { handleOpen: () => void }) => {
  const navigate = useNavigate();
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
    },
  });
  return (
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
        <Button
          onClick={()=> navigate('/dashboard/admin/permission')}
          variant="outlined"
          color="black"
          className="capitalize mt-6 shadow-none rounded-md"
          placeholder={"Permission"}
        >
          view
        </Button>
      </div>
      <Button
        onClick={handleOpen}
        placeholder={"create-button"}
        className="capitalize  rounded-md shadow-none mt-6"
        variant="outlined"
      >
        Create
      </Button>
    </div>
  );
};

export default Body;
