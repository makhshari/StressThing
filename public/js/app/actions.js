"use strict";

var extractActions = function extractActions(thing, name, body) {
  console.log("ACTION NAME:", name);
  console.log("\n");
  console.log("ACTION BODY of", name, ":", body);
  console.log("\n");

  var reqTuple = {
    "thing": thing.name,
    "href": body.forms[0].href
  };
  actionsRequest.push(reqTuple);
};