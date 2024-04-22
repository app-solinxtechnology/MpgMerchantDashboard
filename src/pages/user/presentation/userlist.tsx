import UserListTable from "$List/userList";
import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useMemoryClick } from "$myhooks";
import { useCallback, useMemo } from "react";
import Create from "./Create";
import Edit from "./Edit";
import { DeleteBox } from "./DeleteBox";
import { BlockBox } from "./Block";

const UserList = () => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      user: "",
    },
  });
  const [open, setOpen] = useMemoryClick(false);
  const [editOpen, setEditOpen] = useMemoryClick(false);
  const [deleteOpen, setDeleteOpen] = useMemoryClick(false);
  const [blockOpen, setBlockOpen] = useMemoryClick(false);

  const editHandleOpen = useCallback(() => {
    setEditOpen((_prev: boolean) => !_prev);
  }, []);

  const editHandleClose = () => {
    setEditOpen(false);
  };

  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = useCallback(() => {
    setDeleteOpen((_prev: boolean) => !_prev);
  }, []);

  const handleBlockOpen = useCallback(() => {
    setBlockOpen((_prev: boolean) => !_prev);
  }, []);

  const blockBox = useMemo(() => {
    const item = (
      <BlockBox blockOpen={blockOpen} handleBlockOpen={handleBlockOpen} />
    );
    return item;
  }, [blockOpen]);

  const deleteBox = useMemo(() => {
    const item = (
      <DeleteBox deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
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
        editHandleClose={editHandleClose}
        editOpen={editOpen}
        editHandleOpen={editHandleClose}
      />
    );
    return item;
  }, [editOpen]);

  const userList = useMemo(() => {
    const item = (
      <UserListTable
        deleteBox={handleDeleteOpen}
        editBox={editHandleOpen}
        blockBox={handleBlockOpen}
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
            label="Search user"
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
      {deleteBox}
      {body}
      {userList}
      {blockBox}
    </div>
  );
};

export default UserList;
