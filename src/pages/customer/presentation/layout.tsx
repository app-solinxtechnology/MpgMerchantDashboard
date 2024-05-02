
import { merchantUserListApi } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import CustomerList from "./customerList"


const CustomerLayout = () => {
    const query = useQuery();
    const page = query.get("page")!;
    const limit = query.get("limit")!;
    const q = query.get("q")!;
  
    const { loading, data, refresh, runAsync } = useRequest(() =>
      !page && !limit
        ? merchantUserListApi({ page: "1", limit: "5",q })
        : page && limit && q
        ? merchantUserListApi({ limit, page,q })
        : !limit ? merchantUserListApi({limit,page}) :  merchantUserListApi({ limit, page, q }),{
          manual :true
        }
    );
     useMountOnce(()=>{
       runAsync()
     })
  
     useSkip(()=>{
       if(!!limit && !!page ){
        refresh()
       }else if(!!q){
            refresh()
       }
        
     },[page,limit,q])
  
  return (
    <div className="p-6">
        <CustomerList loading={loading} data={data}/>
    </div>
  )
}

export default CustomerLayout
