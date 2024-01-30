const NO_OF_BAYS = 6;
const NO_OF_PARKING_SLOTS = 30;
  var timerArray = Array.from({ length: NO_OF_BAYS }, (_, index) => ({
    usageTimer: 0,
    emptyTimer: 0,
    bayName: `bay${index + 1}`,
    details:null,
  }));

const parkingTimerArray = Array.from(
  { length: NO_OF_PARKING_SLOTS },
  (_, index) => ({
    usageTimer: null,
    emptyTimer: null,
    id: index + 1,
  })
);

let breakHours = [
  { hours: 7, minutes: 30, break: 20 * 60 * 1000 },
  { hours: 9, minutes: 50, break: 10 * 60 * 1000 },
  { hours: 12, minutes: 0, break: 30 * 60 * 1000 },
  { hours: 14, minutes: 45, break: 10 * 60 * 1000 },
  { hours: 17, minutes: 0, break: 10 * 60 * 1000 },
  { hours: 19, minutes: 40, break: 30 * 60 * 1000 },
  { hours: 22, minutes: 0, break: 10 * 60 * 1000 },
];

function getTimerArray() {
  return timerArray;
}

function updateTimerArray(newArray) {
 return timerArray = newArray;
}

module.exports = {
  timerArray,
  parkingTimerArray,
  getTimerArray,
  updateTimerArray
};
