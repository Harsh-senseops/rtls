export function getTodaysDate() {
  const today = new Date();
  return `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()} 05:45:00`;
}
const endTime = new Date()
let year = endTime.getFullYear();
let month = endTime.getMonth()+1;
let day = endTime.getDate();

export function getTomorrowsDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  // Add one day to the current date
  tomorrow.setDate(today.getDate() + 1);
  return `${tomorrow.getFullYear()}-${
    tomorrow.getMonth() + 1
  }-${tomorrow.getDate()} 05:45:00`;
}

export function getPastWeekDates() {
  const currentDate = new Date();
  const pastWeekDates = [];

  for (let i = 0; i < 8; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);

    // Skip Sundays
    if (date.getDay() === 0) {
      continue;
    }

    const formattedDate = date.toISOString().split("T")[0];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      date.getDay()
    ];

    const start = `${formattedDate} 05:45:00`;
    const end = `${formattedDate} 23:45:00`;
    // end.setDate(date.getDate() + 1);
    // const formattedEndDate = end.toISOString().split("T")[0];
    // const endTime = `${formattedEndDate} 05:45:00`;
    
    pastWeekDates.push({ weeks, start, end });
  }
  if(pastWeekDates.length === 6){
    pastWeekDates.unshift({weeks:"sun",start:getTodaysDate(),end:getTomorrowsDate()})
  }
  return pastWeekDates.reverse();
}

export function extractWeekNames(weekData) {
  return weekData.map((day) => day.weeks);
}

export function calculateTimeDifference(startDateStr) {
  const startDate = new Date(startDateStr);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - startDate;

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Format the result
  let formattedTime = "";
  if (days > 0) {
    formattedTime += `${days}d, `;
  }

  formattedTime += `${hours}:${minutes.toString().padStart(2, "0")}`;

  return formattedTime;
}

export function getFormattedDate(timestamp) {
  const date1 = new Date(timestamp);
  const date2 = new Date();

  const diffInMilliseconds = date2.getTime() - date1.getTime();

  // Calculate the difference in days, hours, minutes, and seconds
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Add leading zeros to hours and minutes if they are single digits
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  // Format and return the difference
  return `${days}d ${formattedHours}:${formattedMinutes}`;
}

export function getShiftDate(shift) {
  const currentDate = new Date();
  // Get year, month, and day
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(currentDate.getDate()).padStart(2, "0");
  if (shift === "A") {
    return {
      startTime: `${year}-${month}-${day} 5:45:00`,
      endTime: `${year}-${month}-${day} 14:45:00`,
    };
  }
  if (shift === "B") {
    return {
      startTime: `${year}-${month}-${day} 14:45:00`,
      endTime: `${year}-${month}-${day} 23:45:00`,
    };
  }
}

export function identifyCapsAndGiveSpace(inputString) {
  // Capitalize the first letter
  inputString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

  // Add spaces before capital letters
  return inputString.replace(/([A-Z])/g, " $1").trim();
}

export function identifyShift() {
  const currentTime = new Date();
  const targetTime = new Date();
  targetTime.setHours(14, 45, 0, 0); // Set target time to 2:45 PM

  return currentTime > targetTime;
}

// export function getBayUsageTime(data) {
//   // Create a map to store total hours for each bay
//   const bayHoursMap = new Map();
//   // Iterate through the array and calculate total hours for each bay
//   data.forEach((entry) => {
//     const { bayNo, noOfHours } = entry;
//     const hoursInSeconds = noOfHours
//       .split(":")
//       .reduce(
//         (acc, val, index) =>
//           acc + parseInt(val) * (index === 0 ? 3600 : index === 1 ? 60 : 1),
//         0
//       );

//     if (bayHoursMap.has(bayNo)) {
//       bayHoursMap.set(bayNo, bayHoursMap.get(bayNo) + hoursInSeconds);
//     } else {
//       bayHoursMap.set(bayNo, hoursInSeconds);
//     }
//   });

//   // Convert total seconds back to HH:mm:ss format
//   return Array.from(bayHoursMap.entries()).map(([bayNo, totalSeconds]) => ({
//     bayNo,
//     noOfHours: new Date(totalSeconds * 1000).toISOString().substr(11, 8),
//   }));
// }
export function getBayUsageTime(data) {
  // Create a map to store total hours for each bay
  const bayHoursMap = new Map();

  // Iterate through the array and calculate total hours for each bay
  data.forEach((entry) => {
    const { bayNo, noOfHours } = entry;

    // Check if bayNo or noOfHours is null for the current entry
    if (bayNo === null || noOfHours === null) {
      return; // Skip the current entry
    }

    // const hoursInSeconds = noOfHours
    //   .split(":")
    //   .reduce(
    //     (acc, val, index) =>
    //       acc + parseInt(val) * (index === 0 ? 3600 : index === 1 ? 60 : 1),
    //     0
    //   );

    if (bayHoursMap.has(bayNo)) {
      bayHoursMap.set(bayNo, bayHoursMap.get(bayNo) + 0.5);
    } else {
      bayHoursMap.set(bayNo, 0.5);
    }
  });

  // Convert total seconds back to HH:mm:ss format
  return Array.from(bayHoursMap.entries()).map(([bayNo, totalSeconds]) => ({
    bayNo,
    noOfHours: 0.5,
  }));
}

export let breakHours = [
  { hours: 7, minutes: 30, break: 20 * 60 * 1000 },
  { hours: 9, minutes: 50, break: 10 * 60 * 1000 },
  { hours: 12, minutes: 0, break: 30 * 60 * 1000 },
  { hours: 14, minutes: 45, break: 10 * 60 * 1000 },
  { hours: 17, minutes: 0, break: 10 * 60 * 1000 },
  { hours: 19, minutes: 40, break: 30 * 60 * 1000 },
  { hours: 22, minutes: 0, break: 10 * 60 * 1000 },
];

export function executeBreakLogic() {
  function isInBreak(breakInfo) {
    const now = new Date();
    const currentMilliseconds =
      now.getHours() * 60 * 60 * 1000 +
      now.getMinutes() * 60 * 1000 +
      now.getSeconds() * 1000;

    const breakStartMilliseconds =
      breakInfo.hours * 60 * 60 * 1000 + breakInfo.minutes * 60 * 1000;
    const breakEndMilliseconds = breakStartMilliseconds + breakInfo.break;

    return (
      currentMilliseconds >= breakStartMilliseconds &&
      currentMilliseconds <= breakEndMilliseconds
    );
  }

  function isBeforeOneMinuteToBreak(breakInfo) {
    const now = new Date();
    const currentMilliseconds =
      now.getHours() * 60 * 60 * 1000 +
      now.getMinutes() * 60 * 1000 +
      now.getSeconds() * 1000;

    const breakStartMilliseconds =
      breakInfo.hours * 60 * 60 * 1000 + breakInfo.minutes * 60 * 1000;

    return (
      currentMilliseconds >= breakStartMilliseconds - 60 * 1000 &&
      currentMilliseconds < breakStartMilliseconds
    );
  }

  function isOneMinuteBeforeBreakEnd(breakInfo) {
    const now = new Date();
    const currentMilliseconds =
      now.getHours() * 60 * 60 * 1000 +
      now.getMinutes() * 60 * 1000 +
      now.getSeconds() * 1000;

    const breakEndMilliseconds =
      breakInfo.hours * 60 * 60 * 1000 +
      breakInfo.minutes * 60 * 1000 +
      breakInfo.break;

    return currentMilliseconds >= breakEndMilliseconds - 60 * 1000;
  }

  let breakHours = [
    { hours: 7, minutes: 30, break: 20 * 60 * 1000 },
    { hours: 9, minutes: 50, break: 10 * 60 * 1000 },
    { hours: 12, minutes: 0, break: 30 * 60 * 1000 },
    { hours: 14, minutes: 45, break: 10 * 60 * 1000 },
    { hours: 17, minutes: 0, break: 10 * 60 * 1000 },
    { hours: 18, minutes: 9, break: 30 * 60 * 1000 },
    { hours: 23, minutes: 10, break: 3 * 60 * 1000 },
  ];

  let isInAnyBreak = false;
  let isOneMinuteBeforeEnd = false;

  // Check if current time is within 1 minute before any break
  for (const breakInfo of breakHours) {
    if (isBeforeOneMinuteToBreak(breakInfo)) {
      // Execute your function before 1 minute to the break
      return `ONE MINUTE BEFORE BREAK`;
    }

    if (isInBreak(breakInfo)) {
      isInAnyBreak = true;

      // Execute your function for being in a break
      // ...

      // Check if it's one minute before the break ends
      if (isOneMinuteBeforeBreakEnd(breakInfo) && !isOneMinuteBeforeEnd) {
        // Execute another function one minute before the break ends
        isOneMinuteBeforeEnd = true;
        return `ONE MINUTE BEFORE BREAK ENDS`;
      } else {
        // Return appropriate message for being in a break
        return `IN BREAK`;
      }
    }
  }

  // Reset the one-minute-before-end flag if not in any break
  if (!isInAnyBreak) {
    isOneMinuteBeforeEnd = false;
    return "NO BREAK";
  }
}

export function fromShiftTimeDifference(){
  const startTime = !identifyShift() ? new Date(`${year}-${month}-${day} 05:45:00`) : new Date(`${year}-${month}-${day} 14:55:00`);
  
  const timeDiff = endTime - startTime;
  const customMinuteDiff = Math.floor(timeDiff/(1000 * 60))
  const hours = Math.floor(customMinuteDiff / 60)
  const minutes = Math.floor(customMinuteDiff % 60)
  return `${hours}:${minutes}`
}



export function addTimes(time1, time2,bayno) {
    // if (!time1) {
    //     return time2;
    // }

    // // Parse the time strings to get hours, minutes, and seconds
    // const [hours1, minutes1, seconds1] = time1.split(':').map(Number);
    // const [hours2, minutes2, seconds2] = time2.split(':').map(Number);

    // // Calculate total seconds
    // const totalSeconds = (hours1 * 3600 + minutes1 * 60 + seconds1) + (hours2 * 3600 + minutes2 * 60 + seconds2);
    // // Calculate new hours, minutes, and seconds
    // const newHours = Math.floor(totalSeconds / 3600);
    // const remainingSeconds = totalSeconds % 3600;
    // const newMinutes = Math.floor(remainingSeconds / 60);
    // const newSeconds = remainingSeconds % 60;

    // // Format the result as HH:mm:ss
    // const result = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${newSeconds}`;
    // return result;
    if (!time1) {
      return time2;
  }
  
  // Parse the time strings to get hours, minutes, and seconds
  const [hours1, minutes1, seconds1] = time1.split(':').map(Number);
  const [hours2, minutes2, seconds2] = time2.split(':').map(Number);
  
  // Calculate total seconds
  const totalSeconds = (hours1 * 3600 + minutes1 * 60 + seconds1) + (hours2 * 3600 + minutes2 * 60 + seconds2);
  
  // Calculate new hours, minutes, and seconds
  const newHours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const newMinutes = Math.floor(remainingSeconds / 60);
  const newSeconds = remainingSeconds % 60;
  
  // Format the result as HH:mm:ss
  const formattedHours = String(newHours).padStart(2, '0');
  console.log(formattedHours,"H")
  const formattedMinutes = String(newMinutes).padStart(2, '0');
  console.log(formattedMinutes,"M")
  const formattedSeconds = String(newSeconds).padStart(2, '0'); 
   console.log(formattedMinutes,"S")
  const result = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return result;
  
  
}

export function subtractTimes(time1, time2) {
  // Parse the time strings to get hours and minutes
  if(time2 === 0){
    return time1
  }
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  // Calculate total minutes
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  // Calculate the difference in minutes
  const differenceMinutes = totalMinutes1 - totalMinutes2;

  // Check if the result is negative
  if (differenceMinutes < 0) {
      return "Negative result"; // or handle it accordingly
  }

  // Calculate new hours and minutes
  const newHours = Math.floor(differenceMinutes / 60);
  const newMinutes = differenceMinutes % 60;

  // Format the result as HH:mm
  const result = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;

  return result;
}

