import {  sellMonthly } from "#Services";
import { useQuery, useMountOnce, useSkip } from "$myhooks";
import { useRequest } from "ahooks";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import CashOutMonthlyList from "./CashInMonthyList"




const Layout = () => {
  const query = useQuery();
  const page = query.get("page")!;
  const limit = query.get("limit")!;
  const q = query.get("q")!;
  const month = query.get("date")!;
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, data, runAsync } = useRequest(sellMonthly,{
        manual :true
      }
  )
   useMountOnce(()=>{
    const daily =  moment(new Date()).format('MM');
      navigate(location.pathname+"?date="+daily)
   
          runAsync({month:daily,limit:limit ? limit : "5"})
      
   });

   console.log("q",!!q)

   useSkip(()=>{
    if(!!q){
      
      if(!!q && !!month){
        runAsync({ q, limit: limit ? limit : "5",page ,month  });
      }
    
    }else{
      if(!!limit && !!page && !!month && !q){
         runAsync({limit,page,month})
       }else if(!!limit && !!page && !!month  && !!q){
           runAsync({limit,page,month,q})
       }else if(!!month && !!q){
         runAsync({month,q})
       }
       else if(!!q ){
            runAsync({q})
        }else if(!!month){
         
        }
    }
      
   },[page,limit,q ,month])


  return (
    <div  className="px-6 pt-6">
            <CashOutMonthlyList loading={loading} data={data}/>
    </div>
  )
}

export default Layout
