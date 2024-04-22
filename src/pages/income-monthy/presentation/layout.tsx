import { incomeMonthly } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import IncomeMonthlyList from "./IncomeMonthlyList"



const IncomeMonthlyLayout = () => {

  const query = useQuery();

  const date = query.get("date")!;


  const { loading, data, runAsync } = useRequest(incomeMonthly, {
    manual: true,
  });

  useMountOnce(() => {
    const daily = moment(new Date()).format("MM");
    // navigate(location.pathname + "?date=" + daily);

    runAsync({ month: daily });
  });

  useSkip(() => {
    if (!!date) {
      runAsync({ month:date });
    }
  }, [date]);

  return (
    <div className="px-6 pt-6">   
        <IncomeMonthlyList loading={loading} data={data}/>
    </div>
  )
}

export default IncomeMonthlyLayout
