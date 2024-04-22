import { useRequest } from "ahooks"
import FaqList from "./FaqList"
import { getFaqList } from "#Services"


const FaqLayout = () => {
    const {loading,data} = useRequest(getFaqList)
  return (
    <div className="p-6">
        <FaqList loading={loading} data={data}/>
    </div>
  )
}

export default FaqLayout
