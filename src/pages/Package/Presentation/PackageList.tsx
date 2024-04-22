import PackageListTable from "$List/packageList";
import { useMemoryClick } from "$myhooks";
import { useCallback, useMemo } from "react";
import Edit from "./Edit";
import Create from "./Create";
import { Delete } from "./Delete";
import Body from "./body";

const PackageList = ({ data, loading, refresh }: any) => {
  const [open, setOpen] = useMemoryClick(false);
  const [deleteOpen, setDeleteOpen] = useMemoryClick(false);
  const [editOpen, setEditOpen] = useMemoryClick(false);
  const [isDelete, setIsDelete] = useMemoryClick("");

  const handleOpen = useCallback(() => {
    setOpen((_prev: boolean) => !_prev);
  }, []);
  const handleDeleteOpen = useCallback(
    (id?: string | number) => {
      setIsDelete((_prev?: number | string) => (_prev = id));
      setDeleteOpen((_prev: boolean) => !_prev);
    },
    [isDelete]
  );

  const handleEditOpen = useCallback(() => {
    setEditOpen((_prev: boolean) => !_prev);
  }, []);

  const editBox = useMemo(() => {
    const item = (
      <Edit
        refresh={refresh}
        editOpen={editOpen}
        handleEditOpen={handleEditOpen}
        handleEditClose={handleEditOpen}
      />
    );
    return item;
  }, [editOpen]);

  const deleteBox = useMemo(() => {
    const item = (
      <Delete refresh={refresh} isDelete={isDelete} deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
    );
    return item;
  }, [deleteOpen]);
  const create = useMemo(() => {
    const item = (
      <Create open={open} handleOpen={handleOpen} refresh={refresh} handleClose={handleOpen} />
    );
    return item;
  }, [open]);
  const body = useMemo(() => {
    const item = <Body handleOpen={handleOpen} />;
    return item;
  }, []);
  return (
    <div>
      {body}
      {create}
      {editBox}
      {deleteBox}
      <PackageListTable
        data={data}
        loading={loading}
        deleteBox={handleDeleteOpen}
        editBox={handleEditOpen}
      />
    </div>
  );
};

export default PackageList;
