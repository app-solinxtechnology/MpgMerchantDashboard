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
          username: "",
          email:"",
          confrimPassword:""
        },
      });

  return (

        <ModalBox handleOpen={handleOpen} open={open} size="xs">
        <DialogBody placeholder={"dashboard-dialogbody"}>
          <p className="text-xl mb-3 text-black">Create user</p>
          <p className="mb-3 text-black">
            Make create to user here. Click save when you're done.
          </p>
          <form >
            <div className="grid grid-cols-2 gap-2">
            <InputField label="Eamil" name="email" control={control} />
            <InputField label="Username" name="username" control={control} />
            <InputField
              label="Passowrd"
              password
              name="password"
              control={control}
            />
            <InputField
              label="Confrim Passowrd"
              password
              name="confrimPassword"
              control={control}
            />
            </div>
            <div className=" mt-4">
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
