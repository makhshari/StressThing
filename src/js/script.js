'use strict';
const extractor = require('./app/extractor');
const testingTools = require('./app/testingTools');
var allRequests=[];

  const system_input = (param1, param2) => {
    console.log("\nLet Read the input JSON file");
    console.log("\n^________________^\n")
    const fs = require('fs');
    let rawdata = fs.readFileSync('W3C_input.json');  
    let jsondata = JSON.parse(rawdata);  
    let things=jsondata.things;
    for(var i=0;i<things.length;i++){
      allRequests.push(extractor.extractServices(things[i]));
    }
    console.log(allRequests);
  };

(function main() {
  console.log("\nWelcome to StressThing *__*")
  system_input();
  //testingTools.toTarausJson
  //testingTools.runTaraus();
})();
