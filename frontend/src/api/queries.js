let IN_OUT_COUNT = `
subscription MyQuery($date:Datetime!)
  {
  allTagLiveLocationParkingareas(
    filter: {
      or: [
        { endtime: { isNull: true } },
        { endtime: { greaterThanOrEqualTo: $date} }
      ],
      starttime: { greaterThanOrEqualTo: $date }
    }
  ) {
    nodes {
      id
      starttime
      endtime
    }
  }
}
  `

  export{
    IN_OUT_COUNT
  }