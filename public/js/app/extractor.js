'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var properties = require('./properties');
var actions = require('./actions');

var extractServices = function extractServices(thing, allRequestsArr) {
  var thingRequests = [];
  console.log("we are going to find proper service calls for the thing named:", thing.name);
  console.log("\n");
  // extracting properties
  for (var i in thing.properties) {
    allRequestsArr.push(properties.extractProperties(thing, i, thing.properties[i]));
  }
  // extracting actions
  for (var i in thing.actions) {
    allRequestsArr.push(actions.extractActions(thing, i, thing.actions[i]));
  }
  // extracting events ???

  return allRequestsArr;
};
exports.extractServices = extractServices;