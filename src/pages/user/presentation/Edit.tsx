import InputField from "$components/form/InputFiled"
import { ModalBox } from "$components/modal/intex"
import { DialogBody, Button, } from "@material-tailwind/react"
import { useForm } from "react-hook-form"


export type ICreateProps ={
     editHandleOpen :  ()=>void
     editOpen:boolean
     editHandleClose : ()=> void
}

const Edit:React.FC<ICreateProps> = ({editHandleOpen,editOpen,editHandleClose}) => {

    const { control } = useForm({
        mode: "all",
        defaultValues: {
          username: "",
          email:"",
          confrimPassword:""
        },
      });

  return (

        <ModalBox handleOpen={editHandleOpen} open={editOpen} size="xs">
        <DialogBody placeholder={"dashboard-dialogbody"}>
          <p className="text-xl mb-3 text-black">Edit user</p>
          <p className="mb-3 text-black">
            Make Edit to user here. Click save when you're done.
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
                <Button onClick={editHandleClose} placeholder={"button"} className="bg-white text-black capitalize font-[500] mr-3">
                    Cancel
                </Button>
                <Button placeholder={"button"} className="bg-primary capitalize font-[500]">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </DialogBody>
      </ModalBox>
    
  )
}

export default Edit
