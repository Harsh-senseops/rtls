let IN_OUT_COUNT = `
subscription MyQuery($date: Datetime!) {
  allTagLiveLocationParkingareas(
    filter: {starttime: {greaterThanOrEqualTo: $date}}
  ) {
    nodes {
      id
      starttime
      endtime
    }
  }
}
`;

const REPAIR_BAY = `subscription MyQuery {
  allTagLiveLocationRepairareas {
    nodes {
      bay1
      bay2
      bay3
      bay4
      bay5
      bay6
      tagcarMappingTableByBay1 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
       tagcarMappingTableByBay2 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
       tagcarMappingTableByBay3 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
       tagcarMappingTableByBay4 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
       tagcarMappingTableByBay5 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
       tagcarMappingTableByBay6 {
        tagId
        vinId
        isexport
        ispriority
        isattatched
        datetime
      }
    }
  }
}
`;

const PRODUCTION_COUNT = `subscription MyQuery($todaysDate:Datetime,$tomorrowsDate:Datetime) {
  allTagcarMappingTables(
    filter: {attatchedTime: {greaterThanOrEqualTo: $todaysDate}, and: {attatchedTime: {lessThanOrEqualTo: $tomorrowsDate}}}
  ) {
    nodes {
      attatchedTime
      detachedTime
    }
  }
}`;

const TOTAL_DISPATCH_COUNT = `subscription MyQuery($todaysDate: Datetime, $tomorrowsDate: Datetime) {
  allTagcarMappingTables(
    filter: {
      detachedTime: { greaterThanOrEqualTo: $todaysDate, lessThanOrEqualTo: $tomorrowsDate },
      and: { detachedTime: { isNull: false } }
    }
  ) {
    nodes {
      datetime
      detachedTime
    }
  }
}
`;

const TOTAL_REWORK_COUNT = `subscription MyQuery($todaysDate: Datetime, $tomorrowsDate: Datetime) {
  allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $todaysDate}, and: {startTime: {lessThanOrEqualTo: $tomorrowsDate}}}
  ) {
    nodes {
      noOfHours
    }
  }
}`

const GET_LATEST_VIN_TAG_ID = `subscription MyQuery {
  allAttachDetachTemps {
    nodes {
      errorcode
      isexport
      tagId
      uniqueId
      vinData
      vinId
    }
  }
}
`;

const START_TIMER = `mutation MyMutation($bayId: Int!, $isEmpty: Boolean!) {
  startTimer(bayId: $bayId, isEmpty: $isEmpty)
}`;

const GET_ALL_TIMER = `query allTImers {
  getAllTimers {
    id
    emptyTimer
    usageTimer
  }
}`;

const GET_ALL_HISTORY = `query MyQuery($vinId: String!) {
  allTagcarMappingTables(
    filter: {vinId: {includes: $vinId}}
    orderBy: DATETIME_DESC
    first: 10
  ) {
    nodes {
      attatchedTime
      datetime
      detachedTime
      isattatched
      isexport
      ispriority
      tagId
      vinId
      rework: vehicleTrackingReworksByMapId {
        nodes {
          startTime
          endTime
        }
      }
      parking: tagLiveLocationParkingareasByMappid {
        nodes {
          starttime
          endtime
        }
      }
    }
  }
}
`;

const FUTURE_USE_QUERY = `subscription allTagLiveLocationParkingareas{
  allTagLiveLocationParkingareas(
    filter: {or: [{endtime: {isNull: true}, starttime: {isNull: false}}, {endtime: {isNull: false}, starttime: {isNull: true}}]}
  ) {
    nodes {
      starttime
      endtime
    }
  }
}
`

const ALL_PARKING_AREAS_INFO = `subscription MySubscription {
  allTagLiveLocationParkingareas(
    filter: {starttime: {isNull: false}, and: {endtime: {isNull: true}}}
  ) {
    nodes {
      starttime
      endtime
      tagcarMappingTableByMappid {
        vinId
        ispriority
        isexport
      }
    }
  }
}
`

const ALL_PARKING_TIMERS = `query MyQuery {
  getAllParkingTimers {
    emptyTimer
    id
    usageTimer
  }
}
`

const DAY_WISE_DETAILS_REPAIR_HOSPITAL = `query allTagCarMappingTableB(
  $shifAStartTime: Datetime!,
  $shifAtEndTime: Datetime!,
  $shifBStartTime: Datetime!,
  $shifBtEndTime: Datetime!
) {
  shiftATagcarMappingTables: allTagcarMappingTables(
    filter: {
      and: [
        { datetime: { greaterThanOrEqualTo: $shifAStartTime } },
        { datetime: { lessThanOrEqualTo: $shifAtEndTime } }
      ]
    }
  ) {
    nodes {
      isexport
    }
    totalCount
  }
  shiftAVehicleTrackingReworks: allVehicleTrackingReworks(
    filter: {
      and: [
        { startTime: { greaterThanOrEqualTo: $shifAStartTime } },
        { startTime: { lessThanOrEqualTo: $shifAtEndTime } }
      ]
    }
  ) {
    totalCount
  }
  shiftBTagcarMappingTables: allTagcarMappingTables(
    filter: {
      and: [
        { datetime: { greaterThanOrEqualTo: $shifBStartTime } },
        { datetime: { lessThanOrEqualTo: $shifBtEndTime } }
      ]
    }
  ) {
    nodes {
      isexport
    }
    totalCount
  }
  shiftBVehicleTrackingReworks: allVehicleTrackingReworks(
    filter: {
      and: [
        { startTime: { greaterThanOrEqualTo: $shifBStartTime } },
        { startTime: { lessThanOrEqualTo: $shifBtEndTime } }
      ]
    }
  ) {
    totalCount
  }
}
`

const BAY_USAGE_TIME = `
subscription MyQuery($dayStartTime: Datetime!, $dayEndTime: Datetime!) {
  allVehicleTrackingReworks(
    filter: {and: [
      {startTime: {greaterThanOrEqualTo: $dayStartTime}}, 
      {startTime: {lessThanOrEqualTo: $dayEndTime}},
      {bayNo: {isNull:false}}
    ]}
  ) {
    nodes {
      bayNo
      endTime
      startTime
    }
  }
}
`

const ALL_EXPORT_DOMESTIC_REWORKS = `subscription allReworks($dayStartTime:Datetime!,$dayEndTime:Datetime!) {
  allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $dayStartTime}}, {startTime: {lessThanOrEqualTo: $dayEndTime}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
      startTime
    }
  }
}`

let PARKING_DAY_WISE_DETAILS = `subscription parkingDayWiseDetails {
  allTagLiveLocationParkingareas(
    filter: {
      and: [
        { starttime: { isNull: false } },
        { endtime: { isNull: true } }
      ]
    }
  ) {
    nodes {
      starttime
      endtime
      tagcarMappingTableByMappid {
        vinId
      }
    }
  }
}
`
// { endTime: { isNull: false } }
let BAY_EFFICIENCY = `
subscription MyQuery($todaysDate: Datetime, $tomorrowsDate: Datetime) {
  allVehicleTrackingReworks(
    filter: {
      and: [
        { startTime: { greaterThanOrEqualTo: $todaysDate } },
        { startTime: { lessThanOrEqualTo: $tomorrowsDate } },
        {bayNo: {isNull:false}}
      ]
    }
  ) {
    nodes {
      startTime
      endTime
      bayNo
    }
  }
}
`

let IN_OUT_GRAPH_DATA = `query MyQuery(
  $firstStartDate:Datetime!,$firstEndDate:Datetime!,
  $secondStartDate:Datetime!,$secondEndDate:Datetime!,
  $thirdStartDate:Datetime!,$thirdEndDate:Datetime!,
  $fourthStartDate:Datetime!,$fourthEndDate:Datetime!,
  $fifthStartDate:Datetime!,$fifthEndDate:Datetime!
) {
  a1:allTagcarMappingTables(
    filter: {
      attatchedTime: {greaterThanOrEqualTo: $firstStartDate, lessThanOrEqualTo:$firstEndDate}, 
    }
  ) {
    nodes {
      attatchedTime
      detachedTime
      vinId
    }
  }
  a2:allTagcarMappingTables(filter:{
    attatchedTime:{greaterThanOrEqualTo: $secondStartDate, lessThanOrEqualTo:$secondEndDate},
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   a3:allTagcarMappingTables(filter:{
    attatchedTime:{greaterThanOrEqualTo: $thirdStartDate, lessThanOrEqualTo:$thirdEndDate},
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
  a4:allTagcarMappingTables(filter:{
    attatchedTime:{greaterThanOrEqualTo: $fourthStartDate, lessThanOrEqualTo:$fourthEndDate},
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
    a5:allTagcarMappingTables(filter:{
    attatchedTime:{greaterThanOrEqualTo: $fifthStartDate, lessThanOrEqualTo:$fifthEndDate},
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   d1:allTagcarMappingTables(filter:{
    detachedTime: {greaterThanOrEqualTo: $firstStartDate, lessThanOrEqualTo:$firstEndDate},
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   d2:allTagcarMappingTables(filter:{
    detachedTime:{greaterThanOrEqualTo: $secondStartDate, lessThanOrEqualTo:$secondEndDate}
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   d3:allTagcarMappingTables(filter:{
    detachedTime:{greaterThanOrEqualTo: $thirdStartDate, lessThanOrEqualTo:$thirdEndDate}
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   d4:allTagcarMappingTables(filter:{
    detachedTime:{greaterThanOrEqualTo: $fourthStartDate, lessThanOrEqualTo:$fourthEndDate}
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
   d5:allTagcarMappingTables(filter:{
     detachedTime:{greaterThanOrEqualTo: $fifthStartDate, lessThanOrEqualTo:$fifthEndDate}
  }) {
    nodes{
      attatchedTime
      detachedTime
      vinId
    }
  }
}`

let TOTAL_REWORK_GRAPH_DATE = `
query reworkTable($firstStartDate: Datetime!, $firstEndDate: Datetime!, $secondStartDate: Datetime!, $secondEndDate: Datetime!, $thirdStartDate: Datetime!, $thirdEndDate: Datetime!, $fourthStartDate: Datetime!, $fourthEndDate: Datetime!, $fifthStartDate: Datetime!, $fifthEndDate: Datetime!) {
  a1: allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $firstStartDate, lessThanOrEqualTo: $firstEndDate}}
  ) {
    totalCount
  }
  a2: allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $secondStartDate, lessThanOrEqualTo: $secondEndDate}}
  ) {
    totalCount
  }
  a3: allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $thirdStartDate, lessThanOrEqualTo: $thirdEndDate}}
  ) {
    totalCount
  }
  a4: allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $fourthStartDate, lessThanOrEqualTo: $fourthEndDate}}
  ) {
    totalCount
  }
  a5: allVehicleTrackingReworks(
    filter: {startTime: {greaterThanOrEqualTo: $fifthStartDate, lessThanOrEqualTo: $fifthEndDate}}
  ) {
    totalCount
  }
}
`

let ATTACH_DETACH_COUNT = `query MyQuery($todaysDate: Datetime, $tomorrowsDate: Datetime) {
  attatchCount: allTagcarMappingTables(
    filter: {attatchedTime: {greaterThanOrEqualTo: $todaysDate}, and: {attatchedTime: {lessThanOrEqualTo: $tomorrowsDate}}}
  ) {
    totalCount
  }
  dettachCount: allTagcarMappingTables(
    filter: {detachedTime: {greaterThanOrEqualTo: $todaysDate}, and: {detachedTime: {lessThanOrEqualTo: $tomorrowsDate}}}
  ) {
    totalCount
  }
}
`

let EXPORT_DOMESTIC_GRAPH_DATA = `query MyQuery($start1: Datetime!, $end1: Datetime!, $start2: Datetime!, $end2: Datetime!, $start3: Datetime!, $end3: Datetime!, $start4: Datetime!, $end4: Datetime!, $start5: Datetime!, $end5: Datetime!, $start6: Datetime!, $end6: Datetime!, $start7: Datetime!, $end7: Datetime!) {
  day1: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start1}}, {startTime: {lessThanOrEqualTo: $end1}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day2: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start2}}, {startTime: {lessThanOrEqualTo: $end2}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day3: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start3}}, {startTime: {lessThanOrEqualTo: $end3}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day4: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start4}}, {startTime: {lessThanOrEqualTo: $end4}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day5: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start5}}, {startTime: {lessThanOrEqualTo: $end5}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day6: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start6}}, {startTime: {lessThanOrEqualTo: $end6}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
  day7: allVehicleTrackingReworks(
    filter: {and: [{startTime: {greaterThanOrEqualTo: $start7}}, {startTime: {lessThanOrEqualTo: $end7}}]}
  ) {
    nodes {
      tagcarMappingTableByMapId {
        isexport
      }
    }
  }
}
`
let CONFIG_DETAILS = `subscription configDetails {
  allTagcarMappingTables(filter: {detachedTime: {isNull: true}}) {
    nodes {
      datetime
      vinId
      tagId
      isattatched
      attatchedTime
      detachedTime
      isexport
      ispriority
      mappid
    }
  }
}
`
const GET_BAY_EFFICIENCY_DATA = `query getBayEfficency {
  getBayEfficency {
    day_date
    spenthr
  }
}`;

const GET_ALL_TIMERS = `query getAllTimersDetails {
  getAllTimersDetails {
    usageTimer
    emptyTimer
    bayName
    details {
      datetime
      isattatched
      isexport
      ispriority
      tagId
      vinId
    }
  }
}`

const GET_VEHICLE_EFFICIENCY_DATA = `
query getVehcileEfficency {
  getVehcileEfficency {
    datetime
    vin_id
    tag_id
    isattatched
    attatched_time
    detached_time
    isexport
    ispriority
    vehicle_efficiency
    map_id
  }
}
`

export {
  IN_OUT_COUNT,
  REPAIR_BAY,
  PRODUCTION_COUNT,
  GET_LATEST_VIN_TAG_ID,
  TOTAL_DISPATCH_COUNT,
  TOTAL_REWORK_COUNT,
  START_TIMER,
  GET_ALL_TIMER,
  GET_ALL_HISTORY,
  ALL_PARKING_AREAS_INFO,
  ALL_PARKING_TIMERS,
  DAY_WISE_DETAILS_REPAIR_HOSPITAL,
  BAY_USAGE_TIME,
  ALL_EXPORT_DOMESTIC_REWORKS,
  PARKING_DAY_WISE_DETAILS,
  BAY_EFFICIENCY,
  IN_OUT_GRAPH_DATA,
  TOTAL_REWORK_GRAPH_DATE,
  EXPORT_DOMESTIC_GRAPH_DATA,
  CONFIG_DETAILS,
  GET_BAY_EFFICIENCY_DATA,
  GET_ALL_TIMERS,
  GET_VEHICLE_EFFICIENCY_DATA
};
