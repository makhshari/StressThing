'use strict';
  const system_input = (param1, param2) => {
    console.log("\nLet Read the input JSON file");
    console.log("\n^________________^\n")
    const fs = require('fs');
    let rawdata = fs.readFileSync('input.json');  
    let jsondata = JSON.parse(rawdata);  

    let things=jsondata.things;
    for(var i=0;i<things.length;i++){
      console.log(things[i].services);
    }
  
    console.log("********************")
  
    };
  const scenarios = (param1, param2) => {
      console.log("scenarios")
    };
  const another_func = (param1, param2) => {
        console.log("func3")
    };

  
(function main() {
  console.log("\nWelcome to StressThing *__*")
  system_input();

   
})();
