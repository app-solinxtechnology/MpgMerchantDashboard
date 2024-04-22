import { useForm } from "react-hook-form";
import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import FeeListTable from "$List/FeeListTable";
import { useCallback, useMemo } from "react";
import { useMemoryClick } from "$myhooks";
import Create from "./create";
import Edit from "./edit";
import { Delete } from "./Delete";

const FeeList = () => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      description: "",
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

  const body = useMemo(() => {
    const item = (
      <div className="flex justify-between items-center mt-3 mb-3">
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
      <div className="flex items-center gap-3">
        <div className="grow">
          <p className="text-sm mb-1">Description</p>
          <div className="h-[100px] px-3 py-1 rounded-md bg-[#efefef] ">
            <textarea
              name="description"
              className="h-full outline-none bg-transparent w-full"
            ></textarea>
          </div>
        </div>

        <Button
          placeholder={"button"}
          color="black"
          className="capitalize self-end "
        >
          Create Description
        </Button>
      </div>
      {body}
      {deleteBox}
      {create}
      {edit}
      <div className="mt-5">
        <FeeListTable edit={editHandleOpen} deleteBox={handleDeleteOpen} />
      </div>
    </div>
  );
};

export default FeeList;
