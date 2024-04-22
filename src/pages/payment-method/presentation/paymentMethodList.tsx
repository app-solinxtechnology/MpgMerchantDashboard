import PaymentListTable from "$List/PaymentList";
import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import Create from "./Create";
import { useMemoryClick } from "$myhooks";
import { Ban } from "./Ban";
import Edit from "./Edit";

const PaymentMethodList = () => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const [editOpen, setEditOpen] = useMemoryClick(false);
  const [banOpen, setBanOpen] = useMemoryClick(false);
  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleBanOpen = useCallback(() => {
    setBanOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const editHandleOpen = useCallback(() => {
    setEditOpen((_prev: boolean) => !_prev);
  }, []);



  const ban = useMemo(() => {
    const item = <Ban banOpen={banOpen} handleBanOpen={handleBanOpen} />;
    return item;
  }, [banOpen]);

  const edit = useMemo(() => {
    const item = (
      <Edit
        editOpen={editOpen}
        handleEditClose={editHandleOpen}
        handleEditOpen={editHandleOpen}
      />
    );
    return item
  }, [editOpen]);

  const create = useMemo(() => {
    const item = (
      <Create handleOpen={handleOpen} handleClose={handleClose} open={open} />
    );
    return item;
  }, [open]);
  const body = useMemo(() => {
    const item = (
      <div className="flex justify-between items-center mt-3 mb-3">
        <div className=" flex items-center  gap-3">
          <InputField
            className="max-w-[250px] "
            label="Search"
            name="user"
            control={control}
          />
          <Button
            placeholder={"search"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="blue"
          >
            Search
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
    return item;
  }, []);
  return (
    <div>
      {body}
      {create}
      {ban}
      {edit}
      <PaymentListTable
        banBox={handleBanOpen}
        editBox={editHandleOpen}
 
      />
    </div>
  );
};

export default PaymentMethodList;
