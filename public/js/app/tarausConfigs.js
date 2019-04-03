"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReporting = getReporting;
function getReporting() {
  var reporting = [];
  var rep1 = {};
  var rep2 = {};
  rep1["module"] = "console";
  rep2["module"] = "blazemeter";
  reporting.push(rep1);
  reporting.push(rep2);
  return reporting;
}