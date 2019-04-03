'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractProperties = extractProperties;

var dataGenerator = require('./generator');

function extractProperties(thing, name, body) {

  var reqTuple = {};
  var reqbody = {};
  var httpMethod = "";
  if (body.forms[0]['http:methodName']) {
    var httpMethod = body.forms[0]['http:methodName'];
  } else {
    httpMethod = "GET";
  }
  reqTuple = {
    "label": "PROPERTY: " + name + "THING: " + thing.name,
    "url": body.forms[0].href,
    "Method": httpMethod
  };
  if (httpMethod == "POST") {
    if (body.properties) {
      for (var i in body.properties) {
        var key = i;
        var value = dataGenerator.generateData(body.properties[i]);
        reqbody[key] = value;
      }
    } else {
      var key = name;
      var value = "";
      if (body.type == "boolean") value = dataGenerator.generateBoolean();
      if (body.type == "integer") value = dataGenerator.generateInteger();
      if (body.type == "number") value = dataGenerator.generateNumber();
      if (body.type == "string") value = dataGenerator.generateString();
      reqbody[key] = value;
    }
    reqTuple["body"] = reqbody;
  }
  return reqTuple;
}