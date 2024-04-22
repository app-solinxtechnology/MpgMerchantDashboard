import { updatePackage } from "#Services"
import { errorMessageResolver } from "#Usage"
import lazyToast from "$components/alert"
import InputField from "$components/form/InputFiled"
import NumberField from "$components/form/Number"
import { ModalBox } from "$components/modal/intex"
import { useGetField } from "$machine/useGetField"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogBody, Button, } from "@material-tailwind/react"
import { useRequest } from "ahooks"
import { useEffect } from "react"
import { FieldValues, useForm } from "react-hook-form"
import z from 'zod';


export type IEditProps = {
  handleEditOpen: () => void
  editOpen: boolean
  handleEditClose: () => void
  refresh: () => void
}

const createPackage = z.object({
  packageType: z.string().min(1, { message: "package name is required" }),
  amount: z.string().min(1, { message: "amount is requird" }),
});

type createPackage = z.infer<typeof createPackage>;

const Edit: React.FC<IEditProps> = ({ handleEditOpen, editOpen, handleEditClose, refresh }) => {

  const { Field }: any = useGetField((store) => store)

  const { loading, runAsync: addPackageItem } = useRequest(updatePackage, {
    manual: true,
  });
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<createPackage>({
    resolver: zodResolver(createPackage),
    defaultValues: {
      amount: "" + Field.amount,
      packageType: Field.name,
    },
  });
  useEffect(() => {
    setValue("packageType", Field.name);
    setValue("amount", "" + Field.amount);
  }, [Field])
  const FormHandler = (_data: FieldValues) => {
    lazyToast(
      addPackageItem({
        package_id: Field.id,
        package_name: _data.packageType,
        amount: _data.amount,
      }),
      {
        loading: "verifying",
        error: (err) => errorMessageResolver(err),
        success: () => {
          setTimeout(() => {
            refresh()
          }, 100)
          reset();
          handleEditClose()
          return "Package update success";
        },
      }
    );
  };


  return (

    <ModalBox handleOpen={handleEditOpen} open={editOpen} size={"xs"}>
      <DialogBody placeholder={"dashboard-dialogbody"} >
        <p className="text-xl mb-3 text-black">Edit Package</p>

        <form onSubmit={handleSubmit(FormHandler)} >
          <div className=" mt-5">
            <InputField message={errors.packageType?.message} label="Package name" name="packageType" control={control} />
            <NumberField message={errors.amount?.message} label="Amount" name="amount" control={control} />
          </div>
          <div className=" mt-7">
            <div className="w-full flex justify-center">
              <Button onClick={() => {
                clearErrors()
                setTimeout(() => {
                  handleEditClose()
                }, 200)
              }} placeholder={"button"} className="bg-white text-black capitalize font-[500] mr-3">
                Cancel
              </Button>
              <Button type="submit" loading={loading} disabled={loading} placeholder={"button"} className="bg-primary capitalize font-[500]">
                update
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </ModalBox>

  )
}

export default Edit
