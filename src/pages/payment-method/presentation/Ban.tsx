
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  
  export function Ban({
    banOpen,
    handleBanOpen,
  }: {
    banOpen: boolean;
    handleBanOpen: () => void;
  }) {
  
  
  
  
    return (
      <>
        <Dialog size="xs" open={banOpen} handler={handleBanOpen} placeholder={"dialog"}>
          <DialogHeader placeholder={"dialogHeader"}>
            Close
          </DialogHeader>
          <DialogBody placeholder={"dialogBody"} className="">
                  Are You sure want to Close this payment?
          </DialogBody>
          <DialogFooter placeholder={"dialogfooter"}>
            <Button
              placeholder={"button"}
              color="gray"
              onClick={handleBanOpen}
              className="font-[500] capitalize mr-1"
          
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={"button"}
              color="blue"
              className="font-[500] capitalize"
              onClick={handleBanOpen}
            >
              <span>OK</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
  