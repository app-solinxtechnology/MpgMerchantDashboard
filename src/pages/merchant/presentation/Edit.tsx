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
      merchantName: "",
      email: "",
      queryUrl: "",
      password: "",
    },
  });

  return (
    <ModalBox handleOpen={editHandleOpen} open={editOpen} size="xs">
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Edit Merchant</p>
        <p className="mb-3 text-black">
          Make Edit to Merchant here. Click save when you're done.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-2">
            <InputField
              label="Merchant Name"
              name="merchantName"
              control={control}
            />
            <InputField label="Email" name="email" control={control} />
            <InputField label="Password" name="password" control={control} />
            <InputField label="Query Url" name="queryUrl" control={control} />
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
