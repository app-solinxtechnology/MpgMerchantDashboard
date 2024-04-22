import {  incomeYearly } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import IncomeYearlyList from "./IncomeYearlyList"



const IncomeYearlyLayout = () => {

  
  const query = useQuery();

  const date = query.get("date")!;


  const { loading, data, runAsync } = useRequest(incomeYearly, {
    manual: true,
  });

  useMountOnce(() => {
    const daily = moment(new Date()).format("YYYY");
    // navigate(location.pathname + "?date=" + daily);

    runAsync({ year: daily });
  });

  useSkip(() => {
    if (!!date) {
      runAsync({ year:date });
    }
  }, [date]);


  return (
    <div className="px-6 pt-6">   
            <IncomeYearlyList loading={loading} data={data}/>
    </div>
  )
}

export default IncomeYearlyLayout
