function masterPartListDetails() {
  for (let i = 0; i < newa.length; i++) {
    if (i === 0) continue;
    if (newa[i]["COUNT"]) {
      let isTheir = b.findIndex((obj) => obj.partName === newa[i]["Part Name"]);
      if (isTheir !== -1) {
        b[isTheir].partCode.push(newa[i]["Part Code"]);
      } else {
        b.push({
          partName: newa[i]["Part Name"],
          partCount: 1,
          partCode: [newa[i]["Part Code"]],
        });
      }
    } else {
      let isTheir = b.findIndex((obj) => obj.partName === newa[i]["Part Name"]);
      if (isTheir === -1) {
        if (newa[i]["COMMON"]) {
          b.push({
            partName: newa[i]["Part Name"],
            partCount: 1,
            partCode: [newa[i]["Part Code"]],
          });
        } else {
          b.push({
            partName: newa[i]["Part Name"],
            partCount: getPlantCount(newa[i]),
            partCode: [newa[i]["Part Code"]],
          });
        }
      } else {
        if (newa[i]["COMMON"]) {
          b[isTheir].partCount += 1;
          b[isTheir].partCode.push(newa[i]["Part Code"]);
        } else {
          b[isTheir].partCount += getPlantCount(newa[i]);
          b[isTheir].partCode.push(newa[i]["Part Code"]);
        }
      }
    }
  }
}
