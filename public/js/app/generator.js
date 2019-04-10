"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateData = generateData;
exports.generateNumber = generateNumber;
exports.generateInteger = generateInteger;
exports.generateString = generateString;
exports.generateBoolean = generateBoolean;
function generateData(postDataProperty) {
  if (postDataProperty.type == "number") {
    var min = postDataProperty.minimum;
    var max = postDataProperty.maximum;
    return generateNumber(min, max);
  }
  if (postDataProperty.type == "integer") {
    var min = postDataProperty.minimum;
    var max = postDataProperty.maximum;
    return generateInteger(min, max);
  }
  if (postDataProperty.type == "boolean") {
    return generateBoolean();
  }
  if (postDataProperty.type == "string") {
    return generateString();
  }
  if (postDataProperty.type == "array") {
    var arr = [];
    for (var i = 0; i < postDataProperty.maxItems; i++) {
      arr.push(generateData(postDataProperty.items));
    }
    return arr;
  }
  if (postDataProperty.type == "object") {
    return this.generateData(postDataProperty.properties);
  }
}
function generateNumber(min, max) {
  if (min == null) min = Number.MIN_SAFE_INTEGER;
  if (max == null) max = Number.MAX_SAFE_INTEGER;
  return (Math.random() * (max - min) + min).toString();
}
function generateInteger(min, max) {
  if (min == null) min = Number.MIN_SAFE_INTEGER;
  if (max == null) max = Number.MAX_SAFE_INTEGER;
  return (Math.floor(Math.random() * (max - min)) + min).toString();
}
function generateString() {
  return Math.random().toString(36);
}
function generateBoolean() {
  return Math.floor(Math.random() + 0.5).toString();
}