'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractActions = extractActions;

var dataGenerator = require('./generator');

function extractActions(thing, name, body) {

  var reqTuple = {};
  var reqbody = {};
  var httpMethod = "";
  if (body.forms[0]['http:methodName']) {
    var httpMethod = body.forms[0]['http:methodName'];
  } else {
    httpMethod = "POST";
  }
  reqTuple = {
    "label": "ACTION: " + name + " THING: " + thing.name,
    "url": body.forms[0].href,
    "method": httpMethod
  };
  if (httpMethod != "GET") {
    if (body.input) {
      for (var i in body.input.properties) {
        var key = i;
        var value = dataGenerator.generateData(body.input.properties[i]);
        reqbody[key] = value;
      }
      reqTuple["body"] = reqbody;
    } else {}
  }
  return reqTuple;
}