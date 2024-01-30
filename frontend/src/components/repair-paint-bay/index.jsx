import React from "react";
import "./index.css"
import { useSubscription } from "urql";
const REPAIR_BAY = `subscription allTagLiveLocationNewzones {
    allTagLiveLocationRepairareas {
      nodes {
        bay1
        bay2
        bay3
        bay4
        bay5
        bay6
        id
      }
    }
  }
  `;
export default function RepairPaintBay(){
    const [repairBayQuery,rexRepairBayQuery] = useSubscription({
        query:REPAIR_BAY
    })
    return(
        <>
        <h1>Repair Bay</h1>
        </>
    )
}   