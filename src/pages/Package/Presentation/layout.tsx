import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import PackageList from "./PackageList"
import { listPackage } from "#Services";


const PackageLayout = () => {
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const q = query.get("q")!;

  const { loading, data, refresh, runAsync } = useRequest(
    () =>
      !page && !limit
        ? listPackage({ page: "1", limit: "5", q })
        : page && limit && q
        ? listPackage({ limit, page , q })
        : !limit
        ? listPackage({ limit, page })
        : listPackage({ limit, page, q }),
    {
      manual: true,
    }
  );
  useMountOnce(() => {
    runAsync();
  });

  useSkip(() => {
    if (!!limit && !!page) {
      refresh();
    } else if (!!q) {
      refresh();
    }
  }, [page, limit, q]);

  return (
    <div className="p-6">
        <PackageList loading={loading} data={data} refresh={refresh}/>
    </div>
  )
}

export default PackageLayout
