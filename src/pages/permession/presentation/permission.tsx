import { useMemo } from "react";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
import Header from "./header";
import PermissionItem from "./permissionItem";

const permission = [
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "permission",
  },
  {
    id: uuidv4(),
    name: "fuction",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "permission",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "permission",
  },

  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "permission",
  },

  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "function",
  },
  {
    id: uuidv4(),
    name: "permission",
  },

  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: " function",
  },
  {
    id: uuidv4(),
    name: "function",
  },
];

const PermissionList = () => {
  const header = useMemo(() => {
    const item = <Header />;
    return item;
  }, []);
  const list = useMemo(() => {
    const item = <PermissionItem item={permission} />;
    return item;
  }, []);
  return (
    <div>
      {header}
      {list}
    </div>
  );
};

export default PermissionList;
