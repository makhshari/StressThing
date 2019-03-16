'use strict';
  const system_input = (param1, param2) => {
    console.log("\nLet Read the input JSON file");
    console.log("\n^________________^\n")
    const fs = require('fs');
    let rawdata = fs.readFileSync('W3C_input.json');  
    let jsondata = JSON.parse(rawdata);  
    let things=jsondata.things;
    for(var i=0;i<things.length;i++){
      toAPI(things[i]);
      console.log("********************")
    }
  };
  const toAPI = (thing) => {
      console.log("we are going to find proper service calls for the thing named:", thing.name)

      var APIArr=[];


      // extracting properties
      for(var i in thing.properties){
        console.log("Properties:",thing.properties[i].forms[0].href)
      }

       // extracting actions
       for(var i in thing.actions){
        console.log("actions",thing.actions[i].forms[0].href)
      }

       // extracting events
      
      
    };
  const toTarausJson = () => {
        var tarausJsonData={
          "execution": [
            {
              "concurrency": 100,
              "ramp-up": "30s",
              "hold-for": "60s",
              "scenario": "quick-test"
            }
          ],
          "scenarios": {
            "quick-test": {
              "requests": [
                "http://apple.com"
              ]
            }
          },
          "reporting":[
              {
                "module":"final-stats"
              },
              {
                "module":"blazemeter"
              }
            ]
        }
        const fs = require('fs'); 
        fs.writeFile("output.json", JSON.stringify(tarausJsonData), 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
          console.log("JSON file has been saved.");
      }); 
  }
  const runTaraus=()=>{
    var exec = require('child_process').exec;
    var child;
    child = exec("bzt output.json", function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    
    });
  }
(function main() {
  console.log("\nWelcome to StressThing *__*")
  //system_input();
  runTaraus();
   
})();
