const utils = require("./utils")
function yearlyPlannerFuncOne(testDuration, samples, includeHoliday) {
  let oneMonth = 26
  if(includeHoliday){ 
    oneMonth = 30
  }else{
    oneMonth = 26
  }
    let details = []; //End data will be stored in this array and returned from this function.
    let totalTestedDays = 0; //Tracks how many days tested.
    let numberOfDaysLeft = oneMonth; //Tracks number of days left in a month
    let startMonth = "April"; // Tracks Test started month.
    let startDay = 1; //tracks test started day
  
   utils.months.map((val, i) => {
      //if total number of tested days is smaller then test duration it enters if.
      if (totalTestedDays < testDuration) {
        totalTestedDays += oneMonth;
        //If totalTestedDays is grater then actual testDuration then it enters while loop and decreses totalTestedDays.
        while (totalTestedDays >= testDuration) {
          totalTestedDays -= 1;
          numberOfDaysLeft -= 1;
          //if totalTestedDays is equal to testDuration then it enters if and pushes data to the array and resets each value.
          if (totalTestedDays === testDuration) {
            if(val.id === 13 && numberOfDaysLeft < 5){
              // if(details.length <= samples){
                details.push({
                  startDate: `${startMonth}-${startDay}-${utils.year}`,
                  endMonth: `${val.month}-${numberOfDaysLeft === 0 ? 1 : numberOfDaysLeft}-${utils.year}`,
                  samples,
                  testDuration
                });
              return
              // }
               
            }
            if(val.id === 13)return
            // if(details.length <= samples){
              details.push({
                startDate: `${startMonth}-${startDay}-${utils.year}`,
                endMonth: `${val.month}-${numberOfDaysLeft === 0 ? 1 : numberOfDaysLeft }-${utils.year}`,
                samples,
                testDuration
              });
            // }
         
            startDay = numberOfDaysLeft + 1;
            totalTestedDays = oneMonth - numberOfDaysLeft;
            numberOfDaysLeft = oneMonth;
            startMonth = val.month;
          }
        }
      }
    });

    let totalTestedSamples = 0;
    details.map((val, i) => {
      totalTestedSamples += val.samples;
    });
    return { details, totalTestedSamples };
  }

module.exports = {
    yearlyPlannerFuncOne
}