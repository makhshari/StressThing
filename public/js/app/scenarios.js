"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExecutions = getExecutions;
exports.getSampleExecution1 = getSampleExecution1;
exports.getSampleExecution2 = getSampleExecution2;
function getExecutions() {
  var executions = [];
  executions.push(getSampleExecution1());
  executions.push(getSampleExecution2());
  return executions;
}

function getSampleExecution1() {
  var scenario1 = {};
  scenario1["concurrency"] = "60";
  scenario1["ramp-up"] = "10";
  scenario1["hold-for"] = "60";
  scenario1["throughput"] = "20";
  scenario1["scenario"] = "scenario1";
  return scenario1;
}

function getSampleExecution2() {
  var scenario1 = {};
  scenario1["concurrency"] = "1";
  scenario1["ramp-up"] = "10";
  scenario1["hold-for"] = "60";
  scenario1["throughput"] = "100";
  scenario1["scenario"] = "scenario2";
  return scenario1;
}