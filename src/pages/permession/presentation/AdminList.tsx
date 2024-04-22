import ChevronDwon from "$Icons/chevron-dwon";
import Profile from "$Icons/profile";
import { SetStateAction, useMemo } from "react";
import { adminListUser } from "../../../utils";
import { useMemoryClick } from "$myhooks";

const AdminList = () => {
  const [select, setSelect] = useMemoryClick("");
  const list = useMemo(() => {
    const item = adminListUser.map((item, index) => (
      <AdminLists select={select} setSelect={setSelect} {...item} key={index} />
    ));
    return item;
  }, [select]);
  return (
    <div className="h-full cursor-pointer">
      <div className=" bg-[rgb(249,249,249)]  py-3 px-3">
        <input
          type="text"
          className=" bg-transparent outline-none"
          placeholder="search"
        />
      </div>
      <div className="">{list}</div>
    </div>
  );
};

const AdminLists = ({
  id,
  name,
  role,
  select,
  setSelect,
}: {
  id:string
  name: string;
  role: string;
  select: string;
  setSelect: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      onClick={() => setSelect(id)}
      className={` ${
        select === id ? "bg-[#E6F4FF]" : "bg-white"
      } transition-all ease-in-out duration-75 capitalize border-b py-4 px-3 flex justify-between items-center`}
    >
      <div className="text-sm flex gap-2">
        <Profile width={40} height={40} />
        <div>
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <div>
        <ChevronDwon width={22} height={22} className="rotate-[-90deg]" />
      </div>
    </div>
  );
};

export default AdminList;
