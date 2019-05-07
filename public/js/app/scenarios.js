"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExecutions = getExecutions;
exports.getUserConfigs = getUserConfigs;
exports.getUserExecution = getUserExecution;
exports.getSampleExecution1 = getSampleExecution1;
exports.getSampleExecution2 = getSampleExecution2;
exports.getSampleExecution3 = getSampleExecution3;
exports.getSampleExecution4 = getSampleExecution4;
exports.getSampleExecution5 = getSampleExecution5;
exports.getSampleExecution6 = getSampleExecution6;


var mainScript = require('./../script');
var maxUser = "1500";
var maxThroughput = "100";
var midUser = "100";
var midThroughput = "50";
var time_vector = ["30", "15"];
var minTime_vector = ["5", "1"];
var maxTime_vector = ["10", "120"];

var executions = [];
var inputConfigsJson;

function getExecutions() {
  inputConfigsJson = mainScript.system_input("config_input", 1);
  getUserConfigs();
  getUserExecution();
  //executions.push(getSampleExecution4())
  //executions.push(getSampleExecution6())
  //executions.push(getSampleExecution3())
  //executions.push(getSampleExecution4())
  //executions.push(getSampleExecution5())
  //executions.push(getSampleExecution6())
  return executions;
}
function getUserConfigs() {
  var userConfigs = inputConfigsJson.scenarioConfigs;
  maxUser = userConfigs.maxUser.toString();
  midUser = Math.floor(maxUser / 2).toString();
  maxThroughput = userConfigs.maxThroughput.toString();
  midThroughput = Math.floor(midThroughput / 2).toString();
  time_vector[0] = userConfigs.rampUp.toString();
  time_vector[1] = userConfigs.holdFor.toString();
  return;
}

function getUserExecution() {
  var userScenarios = inputConfigsJson.scenarios;
  for (var obj in userScenarios) {
    executions.push(userScenarios[obj]);
  }
  return;
}

function getSampleExecution1() {
  var scenario1 = {};
  scenario1["concurrency"] = "1";
  scenario1["ramp-up"] = time_vector[0];
  scenario1["hold-for"] = time_vector[1];
  scenario1["throughput"] = "1";
  scenario1["scenario"] = "scenario1";
  return scenario1;
}

function getSampleExecution2() {
  var scenario1 = {};
  scenario1["concurrency"] = maxUser.toString();
  scenario1["ramp-up"] = time_vector[0];
  scenario1["hold-for"] = time_vector[1];
  scenario1["throughput"] = "1";
  scenario1["scenario"] = "scenario2";
  return scenario1;
}

function getSampleExecution3() {
  var scenario1 = {};
  scenario1["concurrency"] = "1";
  scenario1["ramp-up"] = time_vector[0];
  scenario1["hold-for"] = time_vector[1];
  scenario1["throughput"] = maxThroughput.toString();
  scenario1["scenario"] = "scenario3";
  return scenario1;
}

function getSampleExecution4() {
  var scenario1 = {};
  scenario1["concurrency"] = maxUser.toString();
  scenario1["ramp-up"] = time_vector[0];
  scenario1["hold-for"] = time_vector[1];
  scenario1["throughput"] = maxThroughput.toString();
  scenario1["scenario"] = "scenario4";
  return scenario1;
}

function getSampleExecution5() {
  var scenario1 = {};
  scenario1["concurrency"] = midUser;
  scenario1["ramp-up"] = minTime_vector[0];
  scenario1["hold-for"] = minTime_vector[1];
  scenario1["throughput"] = midThroughput;
  scenario1["scenario"] = "scenario5";
  return scenario1;
}
function getSampleExecution6() {
  var scenario1 = {};
  scenario1["concurrency"] = midUser;
  scenario1["ramp-up"] = maxTime_vector[0];
  scenario1["hold-for"] = maxTime_vector[1];
  scenario1["throughput"] = maxThroughput;
  scenario1["scenario"] = "scenario6";
  return scenario1;
}