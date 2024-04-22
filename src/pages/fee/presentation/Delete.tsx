
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  
  export function Delete({
    deleteOpen,
    handleDeleteOpen,
  }: {
    deleteOpen: boolean;
    handleDeleteOpen: () => void;
  }) {
  
  
  
  
    return (
      <>
        <Dialog size="xs" open={deleteOpen} handler={handleDeleteOpen} placeholder={"dialog"}>
          <DialogHeader placeholder={"dialogHeader"}>
            Delete This Fee
          </DialogHeader>
          <DialogBody placeholder={"dialogBody"} className="">
                  Are You sure want to delete this Fee?
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
              color="red"
              className="font-[500] capitalize"
              onClick={handleDeleteOpen}
            >
              <span>Delete</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
  