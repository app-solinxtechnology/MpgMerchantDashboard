import { buyYearly } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import CashInYearList from "./CashInYearList";

const Layout = () => {
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const q = query.get("q")!;
  const year = query.get("date")!;
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, data, runAsync } = useRequest(buyYearly, {
    manual: true,
  });
  useMountOnce(() => {
    const daily = moment(new Date()).format("YYYY");
    navigate(location.pathname + "?date=" + daily);

    runAsync({ year: daily, limit: limit ? limit : "5" });
  });


  useSkip(() => {
    if (!!q) {
      runAsync({ q, limit: limit ? limit : "5",page , year  });
    } else {
      if (!!limit && !!page && !!year && !q) {
        runAsync({ limit, page, year });
      } else if (!!limit && !!page && !!year && !!q) {
        runAsync({ limit, page, year, q });
      } else if (!!year && !!q) {
        runAsync({ year, q });
      } else if (!!q) {
        runAsync({ q });
      } else if (!!year) {
        
      }
    }
  }, [page, limit, q, year]);

  return (
    <div className="px-6 pt-6">
      <CashInYearList data={data} loading={loading} />
    </div>
  );
};

export default Layout;
