"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScenario1 = getScenario1;


var PropertiesRequests = [];

function getScenario1() {
  var scenario1 = {};
  scenario1["concurrency"] = "60";
  scenario1["ramp-up"] = "10";
  scenario1["hold-for"] = "60";
  scenario1["throughput"] = "20";
  scenario1["scenario"] = "scenario1";
  return scenario1;
}