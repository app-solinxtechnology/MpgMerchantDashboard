import { buyDaily,  } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import CashInDailyList from "./CashInDailyList"
import moment from "moment";
import {  useLocation, useNavigate } from "react-router-dom";


const Layout = () => {
  
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const q = query.get("q")!;
  const date = query.get("date")!;
  const navigate = useNavigate();
  const location = useLocation();

  console.log("qq")

  const { loading, data, refresh, runAsync } = useRequest(buyDaily,{
        manual :true
      }
  )


   useMountOnce(()=>{
    const daily =  moment(new Date()).format('YYYY[-]MM[-]D');
      navigate(location.pathname+"?date="+daily)
    
          runAsync({date:daily,limit: limit ? limit :"5"})
      
   });

   useSkip(()=>{
    if(!!q){
      runAsync({ q, limit: limit ? limit : "5",page ,date  });
 }else{
   if(!!limit && !!page && !!date && !q){
      runAsync({limit,page,date})
    }else if(!!limit && !!page && !!date  && !!q){
        runAsync({limit,page,date,q})
    }else if(!!date && !!q){
      runAsync({date,q})
    }
    else if(!!q ){
         runAsync({q})
     }else if(!!date){
        //  runAsync({date,limit})
     }
 }
      
   },[page,limit,q ,date]);

  


  return (
    <div  className="px-6 pt-6">
            <CashInDailyList  loading={loading} data={data} refresh={refresh}/>
    </div>
  )
}

export default Layout
