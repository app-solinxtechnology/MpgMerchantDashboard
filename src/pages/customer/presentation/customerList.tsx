import InputField from "$components/form/InputFiled"
import CustomerListTable from "$List/CustomerListTable";
import { useQuery } from "$myhooks";
import { Button } from "@material-tailwind/react"
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


const CustomerList = ({loading,data}:any) => {
    const { control ,handleSubmit ,reset } = useForm({
        mode: "all",
        defaultValues: {
          user: "",
        },
      });
      const navigate = useNavigate();
      const location = useLocation();
      const query = useQuery();
      const limit = query.get('limit')!
     const submitHandling = (_data: FieldValues) => {
        navigate(location.pathname + "?q=" + _data.user);
      };
  
  
  return (
    <div>
        <div className="flex justify-between items-center mb-3">
        <div className="flex justify-between items-center mb-3">
          <form
            onSubmit={handleSubmit(submitHandling)}
            className=" flex items-center  gap-3"
          >
            <InputField
              placeholder="name"
              className="max-w-[250px] "
              label="Search user"
              name="user"
              control={control}
            />
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
              reset();
              const limitItem = limit ? limit : "5"
              navigate(location.pathname+"?page=1&limit="+limitItem)
 
            }}
              placeholder={"search"}
              className="capitalize mt-6 shadow-none rounded-md"
              color="black"
            >
              Reset
            </Button>
          </form>
          {/* <Button
          onClick={handleOpen}
          placeholder={"create-button"}
          className="capitalize  rounded-md shadow-none mt-6"
          variant="outlined"
        >
          Create
        </Button> */}
        </div>
   
      </div>
      <CustomerListTable loading={loading} data={data}/>
    </div>
  )
}

export default CustomerList
