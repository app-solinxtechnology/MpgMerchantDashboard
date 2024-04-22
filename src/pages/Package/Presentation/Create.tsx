import { AddPackage } from "#Services";
import { errorMessageResolver } from "#Usage";
import lazyToast from "$components/alert";
import InputField from "$components/form/InputFiled";
import NumberField from "$components/form/Number";
import { ModalBox } from "$components/modal/intex";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogBody, Button } from "@material-tailwind/react";
import { useRequest } from "ahooks";
import { FieldValues, useForm } from "react-hook-form";

import z from "zod";

export type ICreateProps = {
  handleOpen: () => void;
  open: boolean;
  handleClose: () => void;
  refresh:()=>void;
};

const createPackage = z.object({
  packageType: z.string().min(1, { message: "package name is required" }),
  amount: z.string().min(1, { message: "amount is requird" }),
});

type createPackage = z.infer<typeof createPackage>;

const Create: React.FC<ICreateProps> = ({ handleOpen, open, handleClose ,refresh }) => {
  const { loading, runAsync: addPackageItem } = useRequest(AddPackage, {
    manual: true,
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createPackage>({
    resolver: zodResolver(createPackage),
    defaultValues: {
      amount: "",
      packageType: "",
    },
  });

  const FormHandler = (_data: FieldValues) => {
    lazyToast(
      addPackageItem({
        package_name: _data.packageType,
        amount: _data.amount,
      }),
      {
        loading: "verifying",
        error: (err) => errorMessageResolver(err),
        success: () => {
          setTimeout(()=>{
            refresh()
          },100)
          reset();
          handleClose()
          return "Package create success";
        },
      }
    );
  };

  return (
    <ModalBox handleOpen={handleOpen} open={open} size={"xs"}>
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Create Package</p>
      
        <form onSubmit={handleSubmit(FormHandler)}>
          <div className=" mt-5">
            <div className="">
              <InputField
                message={errors.packageType?.message}
                label="Package name"
                name="packageType"
                control={control}
              />
            </div>
            <NumberField
              label="Amount"
              message={errors.amount?.message}
              name="amount"
              control={control}
            />
          </div>
          <div className=" mt-7">
            <div className="w-full flex justify-center">
              <Button
                onClick={() => {
                  reset();
                  handleClose();
                }}
                placeholder={"button"}
                className="bg-white text-black capitalize font-[500] mr-3"
              >
                Cancel
              </Button>
              <Button
                loading={loading}
                disabled={loading}
                type="submit"
                placeholder={"button"}
                className="bg-primary capitalize font-[500]"
              >
                Create
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </ModalBox>
  );
};

export default Create;
