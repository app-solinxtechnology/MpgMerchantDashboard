import { sellDaily } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import CashOutDailyList from "./CashInDailyList";

const Layout = () => {
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const q = query.get("q")!;
  const date = query.get("date")!;
  const navigate = useNavigate();
  const location = useLocation();

  console.log("qq");

  const { runAsync , loading, data } = useRequest(sellDaily, {
    manual: true,
  });

  useMountOnce(() => {
    const daily = moment(new Date()).format("YYYY[-]MM[-]D");
    navigate(location.pathname + "?date=" + daily);

    runAsync({ date: daily ,limit : limit ? limit :"5" });
  });

  useSkip(() => {
    if (!!q) {
      runAsync({ q, limit: limit ? limit : "5", page, date });
    } else {
      if (!!limit && !!page && !!date && !q) {
        runAsync({ limit, page, date });
      } else if (!!limit && !!page && !!date && !!q) {
        runAsync({ limit, page, date, q });
      } else if (!!date && !!q) {
        runAsync({ date, q });
      } else if (!!q) {
        runAsync({ q });
      } else if (!!date) {
        // runAsync({ date, limit });
      }
    }
  }, [page, limit, q, date]);

  return (
    <div className="px-6 pt-6">
      <CashOutDailyList loading={loading} data={data} />
    </div>
  );
};

export default Layout;
