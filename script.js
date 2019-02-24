'use strict';
  const system_input = (param1, param2) => {
    console.log("input function")
    const fs = require('fs');
    let rawdata = fs.readFileSync('input.json');  
    let student = JSON.parse(rawdata);  
    console.log(student);  
    };
  const scenarios = (param1, param2) => {
      console.log("scenarios")
    };
  const another_func = (param1, param2) => {
        console.log("func3")
    };

  
(function main() {
  console.log("Welcome to WoT Tester")
  system_input();

   
})();
