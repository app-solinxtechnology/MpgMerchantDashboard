import { useCallback, useMemo } from "react";
import Body from "./body";
import AdminListTable from "$List/admin";
import Create from "./Create";
import { useMemoryClick } from "$myhooks";
import { Delete } from "./Delete";
import Edit from "./edit";

const AdminList = () => {
  const [open, setOpen] = useMemoryClick(false);
  const [deleteOpen, setDeleteOpen] = useMemoryClick(false);
  const [editOpen, setEditOpen] = useMemoryClick(false);

  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);

  const handleDeleteOpen = useCallback(() => {
    setDeleteOpen((_prev: boolean) => !_prev);
  }, []);

  const handleEditOpen = useCallback(() => {
    setEditOpen((_prev: boolean) => !_prev);
  }, []);

  const editBox = useMemo(() => {
    const item = (
      <Edit
        editOpen={editOpen}
        handleEditOpen={handleEditOpen}
        handleEditClose={handleEditOpen}
      />
    );
    return item;
  }, [editOpen]);

  const deleteBox = useMemo(() => {
    const item = (
      <Delete deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
    );
    return item;
  }, [deleteOpen]);

  const body = useMemo(() => {
    const item = <Body handleOpen={handleOpen} />;
    return item;
  }, []);
  const list = useMemo(() => {
    const item = <AdminListTable editBox={handleEditOpen} deleteBox={handleDeleteOpen} />;
    return item;
  }, []);

  const create = useMemo(() => {
    const item = (
      <Create open={open} handleOpen={handleOpen} handleClose={handleOpen} />
    );
    return item;
  }, [open]);

  return (
    <div>
      {body}
      {list}
      {create}
      {deleteBox}
      {editBox}
    </div>
  );
};

export default AdminList;
