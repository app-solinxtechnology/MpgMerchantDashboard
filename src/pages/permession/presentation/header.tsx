import Setting from "$Icons/settings";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="py-2 px-3 flex items-center justify-between text-sm font-[600]">
      <div className="flex gap-2 items-center">
        <Setting width={20} height={23} />
        <span>Permission</span>
      </div>
      <div>
        <Button
          onClick={() => navigate("/dashboard/admin")}
          placeholder={"button"}
          size="sm"
          className="capitalize"
          variant="outlined"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Header;
