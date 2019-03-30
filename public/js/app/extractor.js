'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var RequestArr = [];
var PropertiesRequests = [];
var actionsRequest = [];

var properties = require('./properties');
var actions = require('./actions');

var extractServices = function extractServices(thing) {
  console.log("we are going to find proper service calls for the thing named:", thing.name);
  console.log("\n");
  // extracting properties
  for (var i in thing.properties) {
    properties.extractProperties(thing, i, thing.properties[i]);
  }
  console.log("properties requests: \n", PropertiesRequests);
  console.log("\n");
  // extracting actions
  //   for(var i in thing.actions){
  //  actions.extractActions(thing,i,thing.actions[i]);
  // }

  // extracting events ???
};
exports.extractServices = extractServices;