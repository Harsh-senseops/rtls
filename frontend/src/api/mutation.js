let START_PARKING_TIMER = `mutation MyMutation($date:Float!,$parkingSlotId:Int!) {
  startParkingTimer(date: $date, parkingSlotId: $parkingSlotId)
}`

let STOP_TIMER = `mutation stopTimer {
  stopTimer
}
`
let RESET_TIMER = `mutation resetTimer {
  resetTimer
}
`
let MUTATE_IS_PRIORITY = `mutation mutateIsPriority($priority: Boolean!,$mapId:Int!) {
  updateTagcarMappingTableByMappid(
    input: {tagcarMappingTablePatch: {ispriority: $priority}, mappid: $mapId}
  ) {
    clientMutationId
  }
}
`

  export {
    START_PARKING_TIMER,
    STOP_TIMER,
    RESET_TIMER,
    MUTATE_IS_PRIORITY
  }