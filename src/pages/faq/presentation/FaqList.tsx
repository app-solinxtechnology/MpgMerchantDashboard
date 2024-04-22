import InputField from "$components/form/InputFiled";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useMemoryClick } from "$myhooks";
import { useCallback, useMemo } from "react";
import Create from "./Create";
import Edit from "./Edit";
import FaqEnListTable from "$List/faqen";
import { useIgnore } from "$machine/useIgnore";
import { Delete } from "./Delete";

const FaqList = ({ loading, data }: any) => {
  const {handleMass} = useIgnore(store => store)
  console.log("akk", data);
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
    handleMass("value")
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
      <FaqEnListTable
        loading={loading}
        data={data}
        editBox={editHandleOpen}
        deleteBox={handleDeleteOpen}
      />
    );
    return item;
  }, [loading, data]);

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
            Search
          </Button>
        </div>
        <div>
          <Button
            onClick={handleOpen}
            placeholder={"create-button"}
            className="capitalize mx-2  rounded-md shadow-none mt-6"
            variant="outlined"
          >
            Create
          </Button>
        </div>
      </div>
    );
    return item;
  }, []);
  return (
    <div>
      {body}
      {list}
      {create}
      {edit}
      {deleteBox}
    </div>
  );
};

export default FaqList;
