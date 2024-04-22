
import { deletePackage } from "#Services";
import { errorMessageResolver } from "#Usage";
import lazyToast from "$components/alert";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { useRequest } from "ahooks";
  
  export function Delete({
    isDelete,
    deleteOpen,
    handleDeleteOpen,
    refresh,
  }: {
    isDelete:string | number
    deleteOpen: boolean;
    handleDeleteOpen: () => void;
    refresh:()=>void;
  }) {
  
  
    const { loading, runAsync } = useRequest(deletePackage, {
      manual: true,
    });
  
  
    return (
      <>
        <Dialog size="xs" open={deleteOpen} handler={handleDeleteOpen} placeholder={"dialog"}>
          <DialogHeader placeholder={"dialogHeader"}>
            Delete This Package
          </DialogHeader>
          <DialogBody placeholder={"dialogBody"} className="">
                  Are You sure want to delete this Package?
          </DialogBody>
          <DialogFooter placeholder={"dialogfooter"}>
            <Button
              placeholder={"button"}
              variant="text"
              color="red"
              onClick={handleDeleteOpen}
              className="font-[500] capitalize mr-1"
          
            >
              <span>Cancel</span>
            </Button>
            <Button
            placeholder={"button"}
            loading={loading}
            disabled={loading}
            color="red"
            className="font-[500] capitalize"
            onClick={() => {
              lazyToast(runAsync({ package_id: isDelete! }), {
                loading: "Verifying",
                error: (err) => errorMessageResolver(err),
                success: () => {
                  refresh()
                  handleDeleteOpen();
                  //@ts-ignore
                  return "Delete Successful";
                },
              });
            }}
          >
            <span>Delete</span>
          </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
  