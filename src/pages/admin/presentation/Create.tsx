import InputField from "$components/form/InputFiled"
import { ModalBox } from "$components/modal/intex"
import { DialogBody, Button, } from "@material-tailwind/react"
import { useForm } from "react-hook-form"


export type ICreateProps ={
     handleOpen :  ()=>void
     open:boolean
     handleClose : ()=> void
}

const Create:React.FC<ICreateProps> = ({handleOpen,open,handleClose}) => {

    const { control } = useForm({
        mode: "all",
        defaultValues: {
            role:"",
            name
        },
      });

  return (

        <ModalBox handleOpen={handleOpen} open={open} size={"xs"}>
        <DialogBody placeholder={"dashboard-dialogbody"} >
          <p className="text-xl mb-3 text-black">Create Admin</p>
          <p className="mb-3 text-black">
            Make create to Admin here. Click save when you're done.
          </p>
          <form >
            <div className="grid grid-cols-2 gap-3 mt-5">
            <InputField label="Name" name="name" control={control} />
            <InputField label="Role" name="role" control={control} />
            </div>
            <div className=" mt-7">
              <div className="w-full flex justify-center">
                <Button onClick={handleClose} placeholder={"button"} className="bg-white text-black capitalize font-[500] mr-3">
                    Cancel
                </Button>
                <Button placeholder={"button"} className="bg-primary capitalize font-[500]">
                  Create
                </Button>
              </div>
            </div>
          </form>
        </DialogBody>
      </ModalBox>
    
  )
}

export default Create
