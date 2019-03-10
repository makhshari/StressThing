'use strict';
  const system_input = (param1, param2) => {
    console.log("\nLet Read the input JSON file");
    console.log("\n^________________^\n")
    const fs = require('fs');
    let rawdata = fs.readFileSync('input.json');  
    let jsondata = JSON.parse(rawdata);  
    let things=jsondata.things;
    for(var i=0;i<things.length;i++){
      toAPI(things[i]);
      console.log("********************")
    }
  };
  const toAPI = (thing) => {
      console.log("we are going to find proper service calls of the thing named:", thing.name)
      
      var APIArr=[];
      var IP=thing.IP;
      var method=thing.method;
      var services=thing.services;

      for(var i in services){
        console.log(services[i].path)
      }
    

    };
  const another_func = (param1, param2) => {
        console.log("func3")
    };

  
(function main() {
  console.log("\nWelcome to StressThing *__*")
  system_input();

   
})();
