import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useMemoryClick } from "$myhooks";
import { useCallback, useMemo } from "react";
import Create from "./Create";
import MerchantListTable from "$List/merchantList";
import Edit from "./Edit";
import { Delete } from "./Delete";

const MerchantList = () => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const [editOpen, setEditOpen] = useMemoryClick(false);
  const [deleteOpen, setDeleteOpen] = useMemoryClick(false);
  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const editHandleOpen = useCallback(() => {
    setEditOpen((_prev: boolean) => !_prev);
  }, []);

  const handleDeleteOpen = useCallback(() => {
    setDeleteOpen((_prev: boolean) => !_prev);
  }, []);

  const deleteBox = useMemo(() => {
    const item = (
      <Delete deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
    );
    return item;
  }, [deleteOpen]);

  const create = useMemo(() => {
    const item = (
      <Create handleOpen={handleOpen} handleClose={handleClose} open={open} />
    );
    return item;
  }, [open]);

  const edit = useMemo(() => {
    const item = (
      <Edit
        editOpen={editOpen}
        editHandleOpen={editHandleOpen}
        editHandleClose={editHandleOpen}
      />
    );
    return item;
  }, [editOpen]);

  const list = useMemo(() => {
    const item = (
      <MerchantListTable
        editBox={editHandleOpen}
        deleteBox={handleDeleteOpen}
      />
    );
    return item;
  }, []);

  const body = useMemo(() => {
    const item = (
      <div className="flex justify-between items-center mb-3">
        <div className=" flex items-center  gap-3">
          <InputField
            className="max-w-[250px] "
            label="Search "
            name="user"
            control={control}
          />
          <Button
            placeholder={"search"}
            className="capitalize mt-6 shadow-none rounded-md"
            color="blue"
          >
            Search{" "}
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
      {create}
      {edit}
      {body}
      {list}
      {deleteBox}
    </div>
  );
};

export default MerchantList;
