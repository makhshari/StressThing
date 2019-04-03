'use strict';

var extractor = require('./app/extractor');
var testingTools = require('./app/testingTools');
var allRequestsArr = [];
var FinalJSON = {};

var executeInput = function executeInput(jsondata) {
  var things = jsondata.things;
  for (var i = 0; i < things.length; i++) {
    allRequestsArr = extractor.extractServices(things[i], allRequestsArr);
  }
  FinalJSON["requests"] = allRequestsArr;
  fileSaver(FinalJSON, "allRequests");
};

function fileSaver(myJSON, filename) {
  var filesaver1 = require('fs');
  filesaver1.writeFile(filename + ".json", JSON.stringify(myJSON, null, 2), 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}
var system_input = function system_input() {
  console.log("\nLet Read the input JSON file");
  console.log("\n^________________^\n");
  var fs = require('fs');
  var rawdata = fs.readFileSync('W3C_input.json');
  var jsondata = JSON.parse(rawdata);
  return jsondata;
};

(function main() {
  console.log("\nWelcome to StressThing *__*");
  var inputJson = system_input();
  executeInput(inputJson);
  //testingTools.toTarausJson
  //testingTools.runTaraus();
})();