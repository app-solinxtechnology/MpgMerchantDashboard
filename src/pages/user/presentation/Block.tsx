
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  
  export function BlockBox({
    blockOpen,
    handleBlockOpen,
  }: {
    blockOpen: boolean;
    handleBlockOpen: () => void;
  }) {
  
  
  
  
    return (
      <>
        <Dialog size="xs" open={blockOpen} handler={handleBlockOpen} placeholder={"dialog"}>
          <DialogHeader placeholder={"dialogHeader"}>
            Block This user 
          </DialogHeader>
          <DialogBody placeholder={"dialogBody"} className="">
                  Are You sure want to Block this User?
          </DialogBody>
          <DialogFooter placeholder={"dialogfooter"}>
            <Button
              placeholder={"button"}
              variant="text"
              color="red"
              onClick={handleBlockOpen}
              className="font-[500] capitalize mr-1"
          
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={"button"}
              color="black"
              className="font-[500] capitalize"
              onClick={handleBlockOpen}
            >
              <span>Block</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
  