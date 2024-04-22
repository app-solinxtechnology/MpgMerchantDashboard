import Check from "$Icons/check";
import UnCheck from "$Icons/unCheck";
import { useMemoryClick } from "$myhooks";
import { Button } from "@material-tailwind/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const PermissionItem = ({ item }: any) => {
  const [select, setSelect] = useMemoryClick([]);
  const navigate = useNavigate();
  const handleselect = (value: string) => {
    if (select.includes(value)) {
      const filterValue = select.filter((item: string) => item !== value);
      setSelect(filterValue);
    } else {
      setSelect([...select, value]);
    }
  };
  const list = useMemo(() => {
    const listItem = item.map((item: any) => (
      <div className="" key={item.id}>
        <div
          onClick={() => handleselect(item.id)}
          className="flex capitalize text-sm space-x-2 mb-7 cursor-pointer"
        >
          {select.includes(item.id) ? (
            <Check width={19} height={19} />
          ) : (
            <UnCheck width={19} height={19} />
          )}
          <div>{item.name}</div>
        </div>
      </div>
    ));
    return listItem;
  }, [select]);
  return (
    <div className="h-[calc(100vh-89px)] bg-white pt-5  px-3">
      <div className="flex flex-col h-[calc(100vh-180px)] flex-wrap">
        {list}
      </div>
      <div className="text-center">
        <Button
          onClick={() => navigate("/dashboard/admin")}
          placeholder="Save"
          color="white"
          className="capitalize mr-3"
        >
          Cancel
        </Button>
        <Button placeholder="Save" color="black" className="capitalize">
          Save
        </Button>
      </div>
    </div>
  );
};

export default PermissionItem;
