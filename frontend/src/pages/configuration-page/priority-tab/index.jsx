import * as React from "react";
import Table from "@mui/joy/Table";
import Checkbox from "@mui/joy/Checkbox";
import LogoutIcon from "../../../assets/icons/logout-icon";
import { CONFIG_DETAILS } from "../../../api/queries";
import { useMutation, useSubscription } from "urql";
import { MUTATE_IS_PRIORITY } from "../../../api/mutation";
import Loader from "../../../components/loader";
import CustomModal from "../../../components/custom-modal";

let tdStyle = {
    color:"white",
    textAlign:"center"
}

let thStyle = {
    textAlign:"center",
    fontSize:"1.4rem"
}

export default function PriorityTab() {
  const [configData,rexConfigData] = useSubscription({
    query:CONFIG_DETAILS,
  })

  const [resMutateIsPriority,mutateIsPriority] = useMutation(MUTATE_IS_PRIORITY);

  const [configDetails,setConfigDetails] = React.useState(null);

  const [isLoading,setIsLoading] = React.useState(false);

  React.useEffect(()=>{
    if(configData.data){
      setConfigDetails(configData.data.allTagcarMappingTables.nodes)
    }
  },[configData.data])

  const handlePriority = (event,index) => {
    setIsLoading(true)
    mutateIsPriority({
      priority:event.target.checked,
      mapId:configDetails[index].mappid
    }).then((res)=>{
      if(res.data){
        setIsLoading(false)
      }
      if(res.error){
        setIsLoading(false)
      }
    })
  }

  console.log(configDetails);
  return (
    <div>
      <Table aria-label="table sizes" className="bg-theme">
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Marry Time</th>
            <th style={thStyle}>Tag ID</th>
            <th style={thStyle}>Vehicle ID</th>
            <th style={thStyle}>Export</th>
            <th style={thStyle}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {configDetails && configDetails.map((row,index) => (
            <tr key={row.name}>
              <td style={tdStyle}>{index+1}</td>
              <td style={tdStyle}>
                {row.datetime.split("T")[0]}<hr color="#26272c"/>
                {" "}{row.datetime.split("T")[1].slice(0,8)}</td>
              <td style={tdStyle}>{row.tagId}</td>
              <td style={tdStyle}>{row.vinId}</td>
              <td style={tdStyle}>{row.isexport ? "Yes" : "No"}</td>
              <td style={tdStyle}><Checkbox checked={row.ispriority} onChange={(e)=>handlePriority(e,index)}/></td>
            </tr>
          ))}
          <CustomModal  open={isLoading}>
          <Loader/>
          </CustomModal>
        
        </tbody>
      </Table>
    </div>
  );
}
