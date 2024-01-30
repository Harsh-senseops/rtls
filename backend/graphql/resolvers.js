var utils = require("./utils");
let parkingTimerArray = utils.parkingTimerArray;

const Mutation = {
  // startTimer: async (_, args, { pgClient }) => {
  //   let bayId = args.bayId - 1;
  //   let isEmpty = args.isEmpty;
  //   if (!timerArray[bayId]) {
  //     timerArray[bayId] = {
  //       emptyTimer: 0,
  //       emptyInterval: null,
  //       usageTimer: 0,
  //       usageInterval: null,
  //     };
  //   }

  //   if (isEmpty) {
  //     if (timerArray[bayId].emptyInterval !== null) {
  //       // Timer is already running
  //       return "Timer is already running";
  //     }

  //     // Clear the usageInterval if it exists
  //     if (timerArray[bayId].usageInterval !== null) {
  //       clearInterval(timerArray[bayId].usageInterval);
  //       timerArray[bayId].usageInterval = null;
  //       timerArray[bayId].usageTimer = 0;
  //     }

  //     // Start the emptyInterval
  //     timerArray[bayId].emptyInterval = setInterval(() => {
  //       timerArray[bayId].emptyTimer++;
  //     }, 1000);

  //     return "Timer Started";
  //   }

  //   if (timerArray[bayId].usageInterval !== null) {
  //     // Timer is already running
  //     return "Timer is already running";
  //   }

  //   // Clear the emptyInterval if it exists
  //   if (timerArray[bayId].emptyInterval !== null) {
  //     clearInterval(timerArray[bayId].emptyInterval);
  //     timerArray[bayId].emptyInterval = null;
  //     // timerArray[bayId].emptyTimer = 0;
  //   }

  //   // Start the usageInterval
  //   timerArray[bayId].usageInterval = setInterval(() => {
  //     timerArray[bayId].usageTimer++;
  //   }, 1000);

  //   return "Timer Started";
  // },

  // stopTimer: async (parent, args, { pgClient }, info) => {
  //   for (let i = 0; i < timerArray.length; i++) {
  //     if (timerArray[i].isBreak) {
  //       return "Break Time";
  //     }
  //     if (timerArray[i].emptyTimer) {
  //       clearInterval(timerArray[i].emptyInterval);
  //       timerArray[i].emptyInterval = null;
  //     }
  //     if (timerArray[i].usageTimer) {
  //       clearInterval(timerArray[i].usageInterval);
  //       timerArray[i].usageInterval = null;
  //     }
  //   }
  //   return "Stopped";
  // },

  // resumeTimer: async (parent, args, { pgClient }, info) => {
  //   for (let i = 0; i < timerArray.length; i++) {
  //     if (
  //       timerArray[i].emptyTimer !== 0 &&
  //       timerArray[i].emptyInterval === null
  //     ) {
  //       timerArray[i].emptyInterval = setInterval(() => {
  //         timerArray[i].emptyTimer++;
  //       }, 1000);
  //     }
  //     if (
  //       timerArray[i].usageTimer !== 0 &&
  //       timerArray[i].usageInterval === null
  //     ) {
  //       timerArray[i].usageInterval = setInterval(() => {
  //         timerArray[i].usageTimer++;
  //       }, 1000);
  //     }
  //   }
  //   console.log(timerArray);
  //   return "Resumed";
  // },

  startParkingTimer: async (parent, args, { pgClient }, info) => {
    let date = args.date;
    let parkingSlotId = args.parkingSlotId - 1;
    // Case 1: Start empty timer
    if (date === 0) {
      if (parkingTimerArray[parkingSlotId].emptyTimer !== null) {
        return "Empty Timestamp already sent.";
      }

      if (parkingTimerArray[parkingSlotId].usageTimer !== null) {
        parkingTimerArray[parkingSlotId].usageTimer = null;
      }
      parkingTimerArray[parkingSlotId].emptyTimer = Date.now();

      return "Empty Timestamp sent";
    }

    // if (parkingTimerArray[parkingSlotId].usageTimer !== null) {
    //   return "Usage Timestamp already sent";
    // }
    if (parkingTimerArray[parkingSlotId].emptyTimer !== null) {
      parkingTimerArray[parkingSlotId].emptyTimer = null;
    }
    parkingTimerArray[parkingSlotId].usageTimer = date;

    return "Usage Timestamp sent";
  },

  // resetTimer: async (parent, args, { pgClient }, info) => {
  //   for (let i = 0; i < timerArray.length; i++) {
  //     timerArray[i].usageTimer = 0;
  //     timerArray[i].emptyTimer = 0;
  //     clearInterval(timerArray[i].emptyInterval);
  //     clearInterval(timerArray[i].usageInterval);
  //     timerArray[i].emptyInterval = null;
  //     timerArray[i].usageInterval = null;
  //   }
  //   return "No production.";
  // },
};

const Query = {
  // getMaxAnchorValues: async (parent, args, { pgClient }, info) => {
  //   const query = `SELECT
  //   GREATEST(
  //     (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 1'),
  //     (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 2'),
  //     (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 3'),
  //     (SELECT MAX(x_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 4')
  //   ) AS max_x_axis,
  //   GREATEST(
  //     (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 1'),
  //     (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 2'),
  //     (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 3'),
  //     (SELECT MAX(y_axis) FROM anchor_config_newzone WHERE anchor_node_id = 'Anchor 4')
  //   ) AS max_y_axis;`;
  //   let res = await pgClient.query(query).then((result) => {
  //     if (result.rows.length === 0) {
  //       throw new Error("No new location");
  //     }
  //     return result;
  //   });
  //   return JSON.stringify(res.rows);
  // },
  // getAllTimers: async (parent, args, { pgClient }, info) => {
  //   return timerArray;
  // },
  // showTimer: async (parent, args, { pgClient }, info) => {
  //   if (!utils.searchForMachineName(args.id, timerArray)) {
  //     return -1;
  //   }
  //   return timerArray[args.id].timer;
  //   // return 0;
  // },
  getAllParkingTimers: async (parent, args, { pgClient }, info) => {
    return parkingTimerArray;
  },
  getBayEfficency: async (paren, args, { pgClient }, info) => {
    let query = `select * from calculate_ratio();`;
    let res = await pgClient.query(query).then((result) => {
      console.log(result);
      if (result.rows.length === 0) {
        throw new Error("No new location");
      }
      return result.rows;
    });
    return res;
  },
  getAllTimersDetails: async(parent,args,{pgClient},info) => {
    return utils.getTimerArray()
  },
  getEfficency: async (paren, args, { pgClient }, info) => {
    let query = `select * from calculate_ratio();`;
    let res = await pgClient.query(query).then((result) => {
      console.log(result);
      if (result.rows.length === 0) {
        throw new Error("No new location");
      }
      return result.rows;
    });
    return res;
    // console.log(res)
  },
  getVehcileEfficency: async(parent,args,{pgClient},info)=>{
    let query = `SELECT * 
    FROM tagcar_mapping_table tmt 
    INNER JOIN calculate_vehicle_efficiency() cve  ON cast(cve.map_id AS INTEGER) = tmt.mappid;`;
    let res = await pgClient.query(query).then((result) => {
      console.log(result);
      if (result.rows.length === 0) {
        throw new Error("No new location");
      }
      return result.rows;
    });
    return res
  }
};

const Subscription = {};

module.exports = { Mutation, Query, Subscription };
