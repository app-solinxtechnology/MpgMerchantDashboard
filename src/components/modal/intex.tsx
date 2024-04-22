import React from "react";
import { Dialog } from "@material-tailwind/react";

export function ModalBox({
  children,
  open,
  size,
  handleOpen,
  className
}: {
  children: React.ReactNode;
  open: boolean;
  size?: any;
  handleOpen: () => void;
  className?:string
}) {
  return (
    <>
      <Dialog
        className={className}
        open={open}
        handler={handleOpen}
        size={size}
        children={children}
        placeholder={"dashboard-modal"}
      />
    </>
  );
}
