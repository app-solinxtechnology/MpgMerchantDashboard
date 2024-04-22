import { incomeDaily } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import IncomeDailyList from "./IncomeDailyList";

const IncomeDailyLayout = () => {
  const query = useQuery();

  const date = query.get("date")!;


  const { loading, data, runAsync } = useRequest(incomeDaily, {
    manual: true,
  });

  useMountOnce(() => {
    const daily = moment(new Date()).format("YYYY[-]MM[-]D");


    runAsync({ date: daily });
  });

  useSkip(() => {
    if (!!date) {
      runAsync({ date });
    }
  }, [date]);

  return (
    <div className="px-6 pt-6">
      <IncomeDailyList loading={loading} data={data} />
    </div>
  );
};

export default IncomeDailyLayout;
