import { createSlice,current } from "@reduxjs/toolkit";
import { getFormattedDate } from "../utils/utility";

const initialState = {
    parkingSlots:{
        noOfSlots:[],
        headerInfo:null,
    },
    repairHospital:{repairSlotData:null,timers:null,},
};

export const timers = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setRepairHospitalData:(state,payload)=>{
        state.repairHospital.repairSlotData = null;
        state.repairHospital.repairSlotData = payload.payload;
    },
    setRepairHospitalTimers:(state,payload)=>{
        state.repairHospital.timers = null;
        state.repairHospital.timers = payload.payload;
    },
    setNoOfSlots:(state,payload) => {
        state.parkingSlots.noOfSlots = null;
        state.parkingSlots.noOfSlots = payload.payload;
    },
    setHeaders:(state,payload) => {
        state.parkingSlots.headerInfo = null;
        state.parkingSlots.headerInfo = payload.payload;
    },
    setParkingTimers:(state,payload) => {
        if(state.parkingSlots.noOfSlots.length !== 0){
            state.parkingSlots.noOfSlots[payload.payload.index].time = getFormattedDate(payload.payload.value)

        }
    }
  },
});

export const { setRepairHospitalData,setRepairHospitalTimers,setNoOfSlots,setHeaders,setParkingTimers } =
timers.actions;

export default timers.reducer;
