import { useRequest } from "ahooks"
import TutroialList from "./TutroialList"
import {listTutorial } from "#Services"


const TutroialLayout = () => {
  const {loading ,data}  = useRequest(listTutorial)
  return (
    <div className="p-6">
     <TutroialList loading={loading} data={data} />
    </div>
  )
}

export default TutroialLayout
