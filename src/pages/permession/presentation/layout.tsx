import AdminList from "./AdminList";
import PermissionList from "./permission";

const PermissionLayout = () => {
  return (
    <div className="flex">
      <div className="w-[25%]  h-[calc(100vh-49px)] border-r overflow-y-scroll bg-white">
        <AdminList />
      </div>
      <div className="w-[75%]">
        <PermissionList />
      </div>
    </div>
  );
};

export default PermissionLayout;
