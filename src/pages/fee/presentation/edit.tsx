import InputField from "$components/form/InputFiled";
import { ModalBox } from "$components/modal/intex";
import { DialogBody, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export type IEditProps = {
  editHandleOpen: () => void;
  editOpen: boolean;
  editHandleClose: () => void;
};

const Edit: React.FC<IEditProps> = ({
  editHandleOpen,
  editOpen,
  editHandleClose,
}) => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      payment: "",
      amount: "",
      cashIn: "",
      cashOut: "",
    },
  });

  return (
    <ModalBox handleOpen={editHandleOpen} open={editOpen} size="xs">
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Edit Fee</p>
        <p className="mb-3 text-black">
          Make Edit to Fee here. Click save when you're done.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-2">
            <div className="mt-1">
              <p className="text-sm mb-1">Payment Type</p>
              <div className="bg-[#efefef] rounded-md py-2 px-1">
                <select
                  name="payment"
                  id=""
                  className=" text-sm w-full outline-none bg-transparent "
                >
                  <option value="" selected>
                    {" "}
                    select
                  </option>
                  <option value="kpay">K Pay</option>
                  <option value={"wave pay"}>Wave Pay</option>
                  <option value={"CB"}>CB</option>
                  <option value={"aya"}>AYA</option>
                </select>
              </div>
            </div>
            <InputField label="Amount" name="amount" control={control} />
            <InputField label="Cash In" name="cashIn" control={control} />
            <InputField label="Cash Out" name="cashOut" control={control} />
          </div>
          <div className=" mt-4">
            <div className="w-full flex justify-center">
              <Button
                onClick={editHandleClose}
                placeholder={"button"}
                className="bg-white text-black capitalize font-[500] mr-3"
              >
                Cancel
              </Button>
              <Button
                placeholder={"button"}
                className="bg-primary capitalize font-[500]"
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </ModalBox>
  );
};

export default Edit;
