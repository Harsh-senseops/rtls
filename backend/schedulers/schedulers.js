let cron = require("node-cron");
const { Client, fetchExchange } = require("@urql/core");
let breakStartTimes = require("./utils").breakStartTimes;
let breakEndTimes = require("./utils").breakEndTimes;
// let timerArray = require("../graphql/utils").timerArray;
let updateTImer = require("../graphql/utils").updateTimerArray;
const fetch = require("isomorphic-unfetch");

const client = new Client({
  url: "http://localhost:5052/graphql",
  exchanges: [fetchExchange],
  fetch,
});

let timerArray = Array.from({ length: 6 }, (_, index) => ({
  usageTimer: 0,
  emptyTimer: 0,
  bayName: `bay${index + 1}`,
  details:null,
}));

const QUERY = `
query MyQuery {
    allTagLiveLocationRepairareas {
      nodes {
        bay1
        bay2
        bay3
        bay4
        bay5
        bay6
        bay01:tagcarMappingTableByBay1 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
         bay02:tagcarMappingTableByBay2 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
         bay03:tagcarMappingTableByBay3 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
         bay04:tagcarMappingTableByBay4 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
         bay05:tagcarMappingTableByBay5 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
         bay06:tagcarMappingTableByBay6 {
          tagId
          vinId
          isexport
          ispriority
          isattatched
          datetime
        }
      }
    }
  }
`;

function some() {
  let task = cron.schedule("* * * * * *", () => {
    client
      .query(QUERY)
      .toPromise()
      .then((result) => {
        let details = result.data.allTagLiveLocationRepairareas.nodes[0];
        for (let i = 0; i < timerArray.length; i++) {
          let bayName = timerArray[i].bayName;
          let stringToInsert = "0";
          let indexToInsertAt = 3;
          let newString =
            bayName.substring(0, indexToInsertAt) +
            stringToInsert +
            bayName.substring(indexToInsertAt);
          if (details[bayName]) {
            timerArray[i].usageTimer++;
            timerArray[i].details = details[newString];
          } else {
            timerArray[i].emptyTimer++;
            timerArray[i].usageTimer = 0;
            timerArray[i].details = null;
          }
        }
        
      });
      updateTImer(timerArray)
  });

  breakStartTimes.map((val) => {
    cron.schedule(val, () => {
      task.stop();
    });
  });

  cron.schedule("5 45 23 * * *",()=>{
    timerReseter();
    timerArray = Array.from({ length: 6 }, (_, index) => ({
      usageTimer: 0,
      emptyTimer: 0,
      bayName: `bay${index + 1}`,
      details:null,
    }));
    task.stop();
  })

  cron.schedule("5 45 14 * * *",()=>{
    timerReseter();
    timerArray = Array.from({ length: 6 }, (_, index) => ({
      usageTimer: 0,
      emptyTimer: 0,
      bayName: `bay${index + 1}`,
      details:null,
    }));
    task.stop();
  })

  breakEndTimes.map((val) => {
    cron.schedule(val, () => {
      task.start();
    });
  });
} 

function timerReseter() {
console.log(timerArray)
updateTImer( Array.from({ length: 6 }, (_, index) => ({
  usageTimer: 0,
  emptyTimer: 0,
  bayName: `bay${index + 1}`,
  details:null,
})))
console.log(timerArray)
}

module.exports = { some };
