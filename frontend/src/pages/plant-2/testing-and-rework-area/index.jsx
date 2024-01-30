import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "../../../components/nav-bar";
import TestingArea from "../../../components/testing-area";
import ReactApexChart from "react-apexcharts";
import { exportReworkConfig } from "../../../graph-configs/exportReworkConfig";
import LineGraphCard from "../../../components/line-graph-card";
import { lineGraphConfig } from "../../../graph-configs/lineGraphConfig";
import RepairHospital from "../../../components/repair-hospital";
import { vehicleEfficiencyConfigs } from "../../../graph-configs/vehicleEfficiencyConfigs";

let data = [{ Shifts: ["A", "B", "C"] }];
import {
  PRODUCTION_COUNT,
  TOTAL_DISPATCH_COUNT,
  EXPORT_DOMESTIC_GRAPH_DATA,
  GET_VEHICLE_EFFICIENCY_DATA
} from "../../../api/queries";
import { useQuery, useSubscription } from "urql";
import {
  getTodaysDate,
  getTomorrowsDate,
  getBayUsageTime,
  extractWeekNames,
  getPastWeekDates,
  getShiftDate,
  identifyShift,
  addTimes
} from "../../../utils/utility";
import { setNavbarDropDownChildIndex } from "../../../redux-slices/navbar";
import { useDispatch } from "react-redux";
import {
  DAY_WISE_DETAILS_REPAIR_HOSPITAL,
  TOTAL_REWORK_COUNT,
  BAY_EFFICIENCY
} from "../../../api/queries";

let pastweekDate = getPastWeekDates();

function calculateTimeDifference(starttime, endtime) {
  const endTime = endtime ? new Date(endtime) : new Date();
  const startTime = new Date(starttime);
  const timeDiff = endTime - startTime;
  const customMinuteDiff = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(customMinuteDiff / 60);
  const minutes = Math.floor(customMinuteDiff % 60);
  const combinedTime = hours + minutes / 100;
  let finalResult = combinedTime.toFixed(2);

  return Number(finalResult);
}

let weeks = extractWeekNames(pastweekDate);
export default function TestingAndReworkArea() {
  const dispatch = useDispatch();
  let [pCount, setPCount] = useState(0);
  let [DCount, setDCount] = useState(0);
  let [rCount, setRCount] = useState(0);
  let [dayWiseDetails, setDayWiseDetails] = useState(null);
  let [bayUsageConfigs, setBayUsageConfigs] = useState(null);
  let [productionCount, rexProductionCount] = useSubscription({
    query: PRODUCTION_COUNT,
    variables: {
      todaysDate: getTodaysDate(),
      tomorrowsDate: getTomorrowsDate(),
    },
  });

  let [dayWiseDetailsq, rexDayWiseDetails] = useQuery({
    query: DAY_WISE_DETAILS_REPAIR_HOSPITAL,
    variables: {
      shifAStartTime: getShiftDate("A").startTime,
      shifAtEndTime: getShiftDate("A").endTime,
      shifBStartTime: getShiftDate("B").startTime,
      shifBtEndTime: getShiftDate("B").endTime,
    },
  });

  let [dispatchCount, rexDispatchCount] = useSubscription({
    query: TOTAL_DISPATCH_COUNT,
    variables: {
      todaysDate: getTodaysDate(),
      tomorrowsDate: getTomorrowsDate(),
    },
  });

  let [reworkCount, rexReworkCount] = useSubscription({
    query: TOTAL_REWORK_COUNT,
    variables: {
      todaysDate: getTodaysDate(),
      tomorrowsDate: getTomorrowsDate(),
    },
  });

  let [bayEfficiencyy, setBayEfficiency] = useSubscription({
    query: BAY_EFFICIENCY,
    variables: {
      todaysDate: !identifyShift() ? getShiftDate("A").startTime : getShiftDate("B").startTime,
      tomorrowsDate: !identifyShift() ? getShiftDate("A").endTime : getShiftDate("B").endTime,
    },
  });

  let [exportDomesticRework, rexExportDomesticRework] = useQuery({
    query: EXPORT_DOMESTIC_GRAPH_DATA,
    variables: {
      start1: pastweekDate[0].start,
      end1: pastweekDate[0].end,
      start2: pastweekDate[1].start,
      end2: pastweekDate[1].end,
      start3: pastweekDate[2].start,
      end3: pastweekDate[2].end,
      start4: pastweekDate[3].start,
      end4: pastweekDate[3].end,
      start5: pastweekDate[4].start,
      end5: pastweekDate[4].end,
      start6: pastweekDate[5].start,
      end6: pastweekDate[5].end,
      start7: pastweekDate[6]?.start,
      end7: pastweekDate[6]?.end,
    },
  });

  let [vehicleEfficiencyData,rexVehicleEfficiencyData] = useQuery({
    query:GET_VEHICLE_EFFICIENCY_DATA
  })

  let [vehicleEfficiencyConfigData,setVehicleEfficiencyConfigData] = useState([[],[]])

  let [exportDomesticReworkk, setExportDomesticRework] = useState({
    day: weeks,
    export: [],
    domestic: [],
  });

  //functionality for export Rework
  useEffect(() => {
    if (exportDomesticRework.data) {
      let exportDomesticReworkData = exportDomesticRework.data;
      let data = { day: weeks, export: [], domestic: [] };
      for (let key in exportDomesticReworkData) {
        let exportData = exportDomesticReworkData[key].nodes.filter(
          (data) => data?.tagcarMappingTableByMapId?.isexport
        ).length;
        let domesticData = exportDomesticReworkData[key].nodes.filter(
          (data) => !data?.tagcarMappingTableByMapId?.isexport
        ).length;
        data.export.push(exportData);
        data.domestic.push(domesticData);
      }
      setExportDomesticRework(data);
    }
  }, [exportDomesticRework.data]);

  useEffect(() => {
    if (reworkCount.data) {
      setRCount(reworkCount.data.allVehicleTrackingReworks.nodes.length);
      rexDayWiseDetails({ requestPolicy: "cache-and-network" });
      rexExportDomesticRework({ requestPolicy: "cache-and-network" });
      rexVehicleEfficiencyData({requestPolicy:"cache-and-network"})
    }
  }, [reworkCount.data]);


  useEffect(() => {
    if (productionCount.data) {
      setPCount(productionCount.data?.allTagcarMappingTables?.nodes.length);
      rexDayWiseDetails({ requestPolicy: "cache-and-network" });
    }
    if (dispatchCount.data) {
      setDCount(dispatchCount.data?.allTagcarMappingTables?.nodes.length);
      rexDayWiseDetails({ requestPolicy: "cache-and-network" });
    }
  }, [productionCount.data, dispatchCount.data]);

  //Functionality for daywise data table.
  useEffect(() => {
    if (dayWiseDetailsq.data) {
      let shiftATotalCheckIn =
        dayWiseDetailsq.data.shiftATagcarMappingTables.totalCount;
      let shiftATotalExport =
        dayWiseDetailsq.data.shiftATagcarMappingTables.nodes.filter(
          (val) => val.isexport
        ).length;
      let shiftBTotalCheckIn =
        dayWiseDetailsq.data.shiftBTagcarMappingTables.totalCount;
      let shiftBTotalExport =
        dayWiseDetailsq.data.shiftBTagcarMappingTables.nodes.filter(
          (val) => val.isexport
        ).length;
      let totalReworkA =
        dayWiseDetailsq.data.shiftAVehicleTrackingReworks.totalCount;
      let totalReworkB =
        dayWiseDetailsq.data.shiftBVehicleTrackingReworks.totalCount;
      setDayWiseDetails({
        shiftATotalCheckIn,
        shiftATotalExport,
        shiftBTotalCheckIn,
        shiftBTotalExport,
        totalReworkA,
        totalReworkB,
      });
    }
  }, [dayWiseDetailsq.data]);

  //Functionality for Rework Allocation graph.
  useEffect(()=>{
    if(bayEfficiencyy.data){
      
      let tempObj = {
        time: Array(6).fill(0),
        bay: ["Bay 1","Bay 2","Bay 3","Bay 4","Bay 5","Bay 6"],
      };
      let sorted = bayEfficiencyy.data.allVehicleTrackingReworks.nodes.sort((a,b)=>a.bayNo - b.bayNo)
      
      sorted.forEach((val) => {
        const endTime = val.endTime ? new Date(val.endTime) : new Date();
        const startTime = new Date(val.startTime);
        const timeDiff = endTime - startTime;
        const customMinuteDiff = Math.floor(timeDiff / (1000 * 60));
        const hours = Math.floor(customMinuteDiff / 60);
        const minutes = Math.floor(customMinuteDiff % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60)
       tempObj.time[val.bayNo - 1] =  addTimes(tempObj.time[val.bayNo - 1],`${hours}:${minutes}:${seconds}`,val.bayNo - 1)
      });
      function formatTimeElement(timeElement) {
        // Parse the time string to get hours, minutes, and seconds
        const [hours, minutes, seconds] = timeElement.split(':').map(Number);
    
        // Format the time components as HH:mm:ss
        const formattedTimeElement = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        return formattedTimeElement;
    }
    
    for(let i = 0; i<tempObj.time.length; i++){
        if(tempObj.time[i] === 0){
            continue
        }
        tempObj.time[i] = formatTimeElement(tempObj.time[i])
    }
    
      setBayUsageConfigs({time:tempObj.time.map((val)=>{
        // console.log(val)
        if (typeof val === "string") {
          
          if (val.length > 3) {
            if(val.length === 6){
              let newVal = val.replace(":", ".").slice(0, 3);
             if(newVal.includes(":")){
              console.log(newVal,"fafsad")
             return Number(convertTimeFormat(val))
             }
              return Number(newVal)
            }
            if(val.length === 8 || val.length === 7){
              let newVal =  val.replace(":", ".").slice(0,5);
              return Number(newVal);
            }
            if(val.length === 5) {
              let newVal = val.replace(":", ".0").slice(0, 4);
              return Number(newVal);
            }
          }

          return Number(val.replace(":", "."));
        }
        return 0;
      }),bay:tempObj.bay})
    }
  },[bayEfficiencyy.data])

  useEffect(() => {
    dispatch(setNavbarDropDownChildIndex(1));
    localStorage.setItem("c", parseInt(1));
  }, []);

  useEffect(()=>{
    if(vehicleEfficiencyData.data){
      let tempArray = [[],[]]
      vehicleEfficiencyData?.data?.getVehcileEfficency?.map((val)=>{
        tempArray[0].push(val.vehicle_efficiency.toFixed(2))
        tempArray[1].push(val.vin_id.slice(-5))

      })
      setVehicleEfficiencyConfigData(tempArray)
    }
  },[vehicleEfficiencyData.data])

  return (
    <>
      <NavBar />
      <main>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="dw-detail-holder tp">
            <span style={{ fontSize: "4rem" }}>Production {pCount}</span>
          </div>
          <div className="dw-detail-holder rw">
            <span style={{ fontSize: "4rem" }}>Rework {rCount}</span>
          </div>
          <div className="dw-detail-holder dsp">
            <span style={{ fontSize: "4rem" }}>Dispatch {DCount}</span>
          </div>
        </div>
        <br />
        <div
          style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "100%", height: "60vh" }}>
            <RepairHospital />
          </div>
        </div>

        <div
          style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            marginTop: "1em",
            justifyContent: "space-around",
          }}
        >
          <div className="bg-theme" style={{ width: "49%" }}>
            <div className="dwd-text">
              <span>Export Rework</span>
            </div>
            {exportDomesticReworkk && (
              <ReactApexChart
                options={
                  exportReworkConfig(
                    "Export",
                    exportDomesticReworkk.export,
                    exportDomesticReworkk.day
                  ).options
                }
                series={
                  exportReworkConfig(
                    "Export",
                    exportDomesticReworkk.export,
                    exportDomesticReworkk.day
                  ).series
                }
                type="bar"
                height={350}
              />
            )}
          </div>
          <div className="bg-theme" style={{ width: "49%" }}>
            <div className="dwd-text">
              <span>Domestic Rework</span>
            </div>
            {exportDomesticReworkk && (
              <ReactApexChart
                options={
                  exportReworkConfig(
                    "Domestic",
                    exportDomesticReworkk.domestic,
                    exportDomesticReworkk.day
                  ).options
                }
                series={
                  exportReworkConfig(
                    "Domestic",
                    exportDomesticReworkk.domestic,
                    exportDomesticReworkk.day
                  ).series
                }
                type="bar"
                height={350}
              />
            )}
          </div>
        </div>
        <div
          style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            marginTop: "1em",
            justifyContent: "space-around",
          }}
        >
          <div className="bg-theme dwd-container" style={{ width: "49%" }}>
            <div className="dwd-text">
              <span>Day-Wise Details</span>
            </div>
            <div className="dwd-info">
              <div className="dwd-info-child">
                <span style={{ fontSize: "1.8rem" }}>Shifts</span>
                <span style={{ fontSize: "1.8rem" }}>A</span>
                <span style={{ fontSize: "1.8rem" }}>B</span>
                {/* <span style={{ fontSize: "1.8rem" }}>C</span> */}
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Total check-in</span>
                <span>
                  {dayWiseDetails && dayWiseDetails.shiftATotalCheckIn}
                </span>
                <span>
                  {dayWiseDetails && dayWiseDetails.shiftBTotalCheckIn}
                </span>
                {/* <span>75</span> */}
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Export check-in</span>
                <span>
                  {dayWiseDetails && dayWiseDetails.shiftATotalExport}
                </span>
                <span>
                  {dayWiseDetails && dayWiseDetails.shiftBTotalExport}
                </span>
                {/* <span>75</span> */}
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Total Rework</span>
                <span>{dayWiseDetails && dayWiseDetails.totalReworkA}</span>
                <span>{dayWiseDetails && dayWiseDetails.totalReworkB}</span>
                {/* <span>75</span> */}
              </div>
              <hr />
            </div>
          </div>
          <div
            className="bg-theme"
            style={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // padding:"0.4em"
            }}
          >
            <div className="dwd-text">
              <span>Rework Allocation</span>
            </div>
            {bayUsageConfigs ? (
              <LineGraphCard
                config={lineGraphConfig(
                  bayUsageConfigs.time,
                  bayUsageConfigs.bay
                )}
              />
            ) : (
              <h1>No data to show.</h1>
            )}
          </div>
        </div>
        <div style={{width:"99%",display:"flex",justifyContent:"space-around",marginTop:"1em"}}>
          <div className="bg-theme" style={{width:"49%"}}>
          <div className="dwd-text">
              <span>Vehicle Efficiency</span>
            </div>
          <ReactApexChart
                options={
                  vehicleEfficiencyConfigs(
                    "Vehicle Efficiency",
                    vehicleEfficiencyConfigData[0],
                    vehicleEfficiencyConfigData[1]
                  ).options
                }
                series={
                  vehicleEfficiencyConfigs(
                    "Vehicle Efficiency",
                    vehicleEfficiencyConfigData[0],
                    vehicleEfficiencyConfigData[1]
                  ).series
                }
                type="bar"
                height={350}
              />
          </div>
          <div className="" style={{width:"49%"}}>
          {/* <div className="dwd-text">
              <span>Vehicle Efficiency</span>
            </div>
          <ReactApexChart
                options={
                  vehicleEfficiencyConfigs(
                    "Vehicle Efficiency",
                    vehicleEfficiencyConfigData[0],
                    vehicleEfficiencyConfigData[1]
                  ).options
                }
                series={
                  vehicleEfficiencyConfigs(
                    "Vehicle Efficiency",
                    vehicleEfficiencyConfigData[0],
                    vehicleEfficiencyConfigData[1]
                  ).series
                }
                type="bar"
                height={350}
              /> */}
          </div>
        </div>
       
      </main>
    </>
  );
}
