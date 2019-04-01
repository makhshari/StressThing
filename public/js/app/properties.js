"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractProperties = extractProperties;

var PropertiesRequests = [];

function extractProperties(thing, name, body) {
  console.log("Property NAME:", name);
  console.log("\n");
  console.log("Property BODY of", name, ":", body);
  console.log("\n");
  console.log("@@@@:", body.forms[0].href);

  var reqData = [];
  var httpMethod = "";
  if (body.forms[0]['http:methodName']) {
    var httpMethod = body.forms[0]['http:methodName'];
  } else {
    httpMethod = "GET";
  }
  var reqTuple = {
    "thing": thing.name,
    "property": name,
    "href": body.forms[0].href,
    "Method": httpMethod,
    "dataType": body.type,
    "data": reqData
  };
  PropertiesRequests.push(reqTuple);
  console.log("^^^^^:", PropertiesRequests);
}