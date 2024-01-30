import React, { useState } from "react";
import {
  ALL_PARKING_AREAS_INFO,
  ALL_PARKING_TIMERS,
} from "../../api/queries";
import { useDispatch, useSelector } from "react-redux";
import { useSubscription, useQuery, useMutation } from "urql";
import {
  setRepairHospitalData,
  setRepairHospitalTimers,
  setNoOfSlots,
  setHeaders,
  setParkingTimers,
} from "../../redux-slices/timers";
import {
  START_PARKING_TIMER,
} from "../../api/mutation";
import { getFormattedDate, } from "../../utils/utility";
import { GET_ALL_TIMERS } from "../../api/queries";

const NUMBER_OF_PARKING_SLOTS = 30;
export default function Timers() {
  let dispatch = useDispatch();
  const [allParkingAreasInfo, rexAllParkingInfo] = useSubscription({
    query: ALL_PARKING_AREAS_INFO,
  });
  const [allTimers, rexAllTimers] = useQuery({
    query: GET_ALL_TIMERS,
  });
  const [allParkingTimers, rexAllParkingTimers] = useQuery({
    query: ALL_PARKING_TIMERS,
  });
  const [resStartParkingTimer, startParkingTimer] =
    useMutation(START_PARKING_TIMER);
  
  React.useEffect(() => {
    if (allTimers.data) {
      let tempArry = [];
      let data = allTimers.data.getAllTimersDetails;
      data.map((val) => {
        if (val.details) {
          tempArry.push({
            bay: val.bayName,
            isEmpty: false,
            tagId: val.details.tagId,
            vinId: val.details.vinId,
            isexport: val.details.isexport,
            ispriority: val.details.ispriority,
            isattatched: val.details.isattatched,
            datetime: val.details.datetime,
          });
          return;
        }
        tempArry.push({
          bay: val.bayName,
          isEmpty: true,
          tagId: val?.details?.tagId,
          vinId: val?.details?.vinId,
          isexport: val?.details?.isexport,
          ispriority: val?.details?.ispriority,
          isattatched: val?.details?.isattatched,
          datetime: val?.details?.datetime,
        });
      });
      const updatedTimers = data.map((timer, i) => {
        const emptyHours = Math.floor(timer.emptyTimer / 3600);
        const emptyMinutes = Math.floor((timer.emptyTimer % 3600) / 60);
        const usageHours = Math.floor(timer.usageTimer / 3600);
        const usageMinutes = Math.floor((timer.usageTimer % 3600) / 60);

        // Use padStart to add leading zero if needed
        const formattedEmptyHours = emptyHours.toString().padStart(2, "0");
        const formattedEmptyMinutes = emptyMinutes.toString().padStart(2, "0");
        const formattedUsageHours = usageHours.toString().padStart(2, "0");
        const formattedUsageMinutes = usageMinutes.toString().padStart(2, "0");
        return {
          emptyTimer: `${formattedEmptyHours}:${formattedEmptyMinutes}`,
          usageTimer: `${formattedUsageHours}:${formattedUsageMinutes}`,
        };
      });
      dispatch(setRepairHospitalData(tempArry));
      dispatch(setRepairHospitalTimers(updatedTimers))
    }
  }, [allTimers.data]);
  React.useEffect(()=>{
    setInterval(()=>{
      rexAllTimers({"requestPolicy":"cache-and-network"})
    },1000)
  },[])
  //Parking Area functionality
  React.useEffect(() => {
    if (allParkingAreasInfo.data) {
      let prakingData =
        allParkingAreasInfo.data?.allTagLiveLocationParkingareas?.nodes;
      let parkingDataLength =
        allParkingAreasInfo.data?.allTagLiveLocationParkingareas?.nodes?.length;
      let tempArray = [];
      let occupiedList = 0;
      let freeList = 0;
      let domesticList = 0;
      let exportList = 0;
      for (let i = 0; i < NUMBER_OF_PARKING_SLOTS; i++) {
        if (i <= parkingDataLength - 1) {
          // const date1 = new Date(prakingData[i].starttime); // Assuming UTC time
          // const date2 = new Date(); // Current date and time

          // const timeDifference = date2 - date1;

          // // Convert milliseconds to days, hours, and minutes
          // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          // const hours = Math.floor(
          //   (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          // );
          // const minutes = Math.floor(
          //   (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          // );
          // const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
          // const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
          // const formattedDifference = `${days}d ${formattedHours}:${formattedMinutes}`;

          const timestampString = prakingData[i].starttime;
          const timestampInMilliseconds = Date.parse(timestampString);
          occupiedList++;
          prakingData[i]?.tagcarMappingTableByMappid?.isexport
            ? exportList++
            : domesticList++;
          tempArray.push({
            isOccupied: true,
            vin: prakingData[i]?.tagcarMappingTableByMappid?.vinId,
            time: getFormattedDate(timestampInMilliseconds),
            isPriority: prakingData[i]?.tagcarMappingTableByMappid?.ispriority,
          });
          startParkingTimer({
            date: timestampInMilliseconds,
            parkingSlotId: i + 1,
          }).then((res) => {
            rexAllParkingTimers({ requestPolicy: "cache-and-network" });
          });
        } else {
          freeList++;
          tempArray.push({
            isOccupied: false,
            vin: "Empty Slots",
            time: "",
          });
          startParkingTimer({
            date: 0,
            parkingSlotId: i + 1,
          }).then((res) => {
            rexAllParkingTimers({ requestPolicy: "cache-and-network" });
          });
        }
      }
      dispatch(setNoOfSlots(tempArray));
      dispatch(
        setHeaders({ occupiedList, freeList, exportList, domesticList })
      );
    }
  }, [allParkingAreasInfo.data]);
  //Parking Area functionality
  React.useEffect(() => {
    if (allParkingTimers.data) {
      allParkingTimers.data?.getAllParkingTimers?.map((val, i) => {
        if (val.usageTimer) {
          dispatch(setParkingTimers({ index: i, value: val.usageTimer }));
        }
        if (val.emptyTimer) {
          dispatch(setParkingTimers({ index: i, value: val.emptyTimer }));
        }
      });
      setInterval(() => {
        rexAllParkingTimers({ requestPolicy: "cache-and-network" });
      }, 60000);
    }
  }, [allParkingTimers.data]);
  return <></>;
}
