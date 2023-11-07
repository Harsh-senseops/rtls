function convertToNearestWholeNumber(number) {
  // Check if the number is a decimal
  if (Number.isInteger(number) || (number < 1 && number > 0)) {
    return Math.ceil(number); // Return the number itself if it's already a whole number
  } else {
    // Convert the decimal to the nearest whole number
    return Math.round(number);
  }
}

function makeArrayOfData(array) {
  let tempArray = [];
  // console.log(array)
  array.map((val) => {
    let componentName = val.part_name;
    let dustErt = "";
    let ovenErt = "";
    let repeatedOperationErt = "";
    let thermalShockErt = "";
    let showerErt = "";
    let vibrationErt = "";
    let thermalCycleErt = "";
    if (val.dust_ert?.days) {
      dustErt = {
        testing_duration: convertToNearestWholeNumber(val.dust_ert?.days),
        samples: val.dust_ert?.sample_qty,
        includeHoliday:val.dust_ert["7daysrunning"],
        partId:val.part_id
      };
    }
    if (val.oven_ert?.days) {
      ovenErt = {
        testing_duration: convertToNearestWholeNumber(val.oven_ert?.days),
        samples: val.oven_ert?.sample_qty,
        includeHoliday:val.oven_ert["7daysrunning"],
        partId:val.part_id
      };
    }
    if (val.repeated_operation_ert?.days) {
      repeatedOperationErt = {
        testing_duration: convertToNearestWholeNumber(
          val.repeated_operation_ert?.days,
        ),
        samples: val.repeated_operation_ert?.sample_qty,
        includeHoliday:val.repeated_operation_ert["7daysrunning"],
        partId:val.part_id
      };
    }
    if (val.thermal_shock_ert?.days) {
      thermalShockErt = {
        testing_duration: convertToNearestWholeNumber(
          val.thermal_shock_ert?.days
        ),
        samples: val.thermal_shock_ert?.sample_qty,
        includeHoliday:val.thermal_shock_ert["7daysrunning"],
        partId:val.part_id
      };
    }

    if (val.shower_ert?.days) {
      showerErt = {
        testing_duration: convertToNearestWholeNumber(val.shower_ert?.days),
        samples: val.shower_ert?.sample_qty,
        includeHoliday:val.shower_ert["7daysrunning"],
        partId:val.part_id
      };
    }
    if (val.vibration_ert?.days) {
      vibrationErt = {
        testing_duration: convertToNearestWholeNumber(val.vibration_ert?.days),
        samples: val.vibration_ert?.sample_qty,
        includeHoliday:val.vibration_ert["7daysrunning"],
        partId:val.part_id
      };
    }
    if (val.thermal_cycle_ert?.days) {
      thermalCycleErt = {
        testing_duration: convertToNearestWholeNumber(
          val.thermal_cycle_ert?.days
        ),
        samples: val.thermal_cycle_ert?.sample_qty,
        includeHoliday:val.thermal_cycle_ert["7daysrunning"],
        partId:val.part_id
      };
    }

    tempArray.push({
      componentName,
      dustErt,
      ovenErt,
      repeatedOperationErt,
      showerErt,
      thermalShockErt,
      vibrationErt,
      thermalCycleErt
    });
  });
  return tempArray;
}

function toFindMinimumParts(data) {
  let smallestSamples = Infinity;
  let smallestErt = "";

  for (let key in data) {
    if (
      key.endsWith("Ert") &&
      data[key].samples !== null &&
      data[key].samples !== 0 &&
      data[key].samples < smallestSamples
    ) {
      smallestSamples = data[key].samples;
      smallestErt = key;
    }
  }

  let result = 0;
  if (smallestSamples === Infinity) {
    // Perform calculations based on the smallest non-zero samples
    smallestSamples = 0;
  }
  return smallestSamples;
}

// function setSamplesAndTimeDuration(obj) {
//   let arr = [];
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//       if (value.testing_duration !== 0) {
//         arr.push({ [key]: value });
//       }
//     }
//   }
//   return arr;
// }

// function scheduleTests(testDetails) {
//   let tests = [
//     "repeatedOperationErt",
//     "thermalShockErt",
//     "thermalCycleErt",
//     "showerErt",
//     "vibrationErt",
//     "dustErt",
//     "ovenErt",
//   ];
//   const keysArray = testDetails.map((obj) => Object.keys(obj)).flat();
//   let obj = {};
//   tests.map((val, i) => {
//     if (i > keysArray.length + 1) return;
//     const index = keysArray.indexOf(val);
//     if (index !== -1) {
//       obj[val] = testDetails[index][val];
//     }
//   });
//   return obj;
// }

let oneMonth = 26; //Total number of days in month except sundays
let year = 2023;
let months = [
  { month: "April", id: 4 },
  { month: "May", id: 5 },
  { month: "June", id: 6 },
  { month: "July", id: 7 },
  { month: "August", id: 8 },
  { month: "September", id: 9 },
  { month: "October", id: 10 },
  { month: "November", id: 11 },
  { month: "December", id: 12 },
  { month: "January", id: 1 },
  { month: "February", id: 2 },
  { month: "March", id: 3 },
  { month: "April", id: 13 },
];

function setSamplesAndTimeDuration(obj) {
  let newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value.testing_duration !== 0) {
        newObj[key] = value;
      }
    }
  }
  if (Object.keys(newObj).length === 1) {
    return (newObj = {});
  }
  return newObj;
}

function scheduleTests(testDetails) {
  let tests = [
    "repeatedOperationErt",
    "thermalShockErt",
    "thermalCycleErt",
    "showerErt",
    "vibrationErt",
    "dustErt",
    "ovenErt",
  ];

  const keysArray = testDetails.map((obj) => Object.keys(obj)).flat();
  let obj = {};
  tests.map((val, i) => {
    if (i > keysArray.length + 1) return;
    const index = keysArray.indexOf(val);
    if (index !== -1) {
      obj[val] = testDetails[index][val];
    }
  });
  return obj;
}

let testSequence = [
  "repeatedOperationErt",
  "thermalShockErt",
  "thermalCycleErt",
  "showerErt",
  "vibrationErt",
  "dustErt",
  "ovenErt",
];

function arrangeObj(obj) {
  let arr = Array(testSequence).fill("");
  for (let key in obj) {
    if (key === "componentName") {
      continue;
    }
    if(obj[key] === "") continue
    let index = testSequence.indexOf(key);
    arr[index] = { [key]: obj[key] };
  }
  return arr.filter(Boolean);
}

function searchForMachineName(machineId,obj){
  for(let key in obj){
  if(machineId == key){
    return true
  }
}
  return false
}

module.exports = {
  convertToNearestWholeNumber,
  makeArrayOfData,
  toFindMinimumParts,
  oneMonth,
  year,
  months,
  setSamplesAndTimeDuration,
  scheduleTests,
  arrangeObj,
  searchForMachineName
};
