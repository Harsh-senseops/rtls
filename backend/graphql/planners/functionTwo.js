const utils = require("./utils")

  function yearlyPlannerFuncTwo(testDuration, samples, previousTestDetails,includeHoliday) {
    let details = [];
    let oneMonth = 26
    if(includeHoliday){ 
      oneMonth = 30
    }else{
      oneMonth = 26
    }
    let flag = false;
    previousTestDetails.details.map((val,i)=>{
      
     let [month,day] = val.endMonth.split("-")
     if(Number(day)>oneMonth)return
     let startDate = Number(day);
    let endMonth = 0
  
    utils.months.map((val,k)=>{
      if(val.month === month ){
        for(let j=1;j<=testDuration;j++){
          
          if(startDate===oneMonth){
            startDate = 0
            endMonth++
          }
          startDate++
        }
        
        if(endMonth+k>=12){
          return
        }
        if(val.month === "December" || val.month === "January" || val.month === "February" || val.month === "March" ){
          flag = true
        }

        if(flag === true && val.month === "April"){
          return
         
        }
        // if(details.length <= samples){
          details.push({startDate:`${month}-${day}-2023`,val:val.id,
          endMonth:`${utils.months[endMonth+k]?.month}-${startDate === 0 ? 1: startDate}-2023`,samples,testDuration}) 
        // }
        
      }
     })
      
    })
      let totalTestedSamples = 0;
    details.map((val,i) => {
      totalTestedSamples += val.samples;
    });
    return { details, totalTestedSamples };
  }

  module.exports = {yearlyPlannerFuncTwo}