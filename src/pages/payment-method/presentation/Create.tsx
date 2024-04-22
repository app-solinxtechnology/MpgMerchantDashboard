import InputField from "$components/form/InputFiled";
import { ModalBox } from "$components/modal/intex";
import { DialogBody, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export type ICreateProps = {
  handleOpen: () => void;
  open: boolean;
  handleClose: () => void;
};

const Create: React.FC<ICreateProps> = ({ handleOpen, open, handleClose }) => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      action: "",
      methodName: "",
    },
  });

  return (
    <ModalBox handleOpen={handleOpen} open={open} size="xs">
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Add New Merchant</p>
        <p className="mb-3 text-black">
          Make create to Merchant here. Click save when you're done.
        </p>
        <form>
          <div className="">
            <InputField
              label="Merchant Name"
              name="methodName"
              control={control}
            />
           <div className="mt-3">
             <p className="text-sm mb-1">OnOff Android:</p>
           <div className="bg-[#efefef] py-3 px-2 text-sm rounded-md">
              <select className="bg-transparent w-full h-full outline-none" name="action">
                <option value="on" selected>
                  on
                </option>
                <option value="">off</option>
              </select>
            </div>
           </div>
          </div>
          <div className=" mt-4">
            <div className="w-full flex justify-center">
              <Button
                onClick={handleClose}
                placeholder={"button"}
                className="bg-white text-black capitalize font-[500] mr-3"
              >
                Cancel
              </Button>
              <Button
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
