'use strict';

var extractor = require('./app/extractor');
var testingTools = require('./app/testingTools');

var system_input = function system_input(param1, param2) {
  console.log("\nLet Read the input JSON file");
  console.log("\n^________________^\n");
  var fs = require('fs');
  var rawdata = fs.readFileSync('W3C_input.json');
  var jsondata = JSON.parse(rawdata);
  var things = jsondata.things;
  for (var i = 0; i < things.length; i++) {
    extractor.extractServices(things[i]);
  }
};

(function main() {
  console.log("\nWelcome to StressThing *__*");
  system_input();
  //testingTools.toTarausJson
  //testingTools.runTaraus();
})();