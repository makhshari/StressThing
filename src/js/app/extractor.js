
var RequestArr=[];
var actionsRequest=[];

const properties = require('./properties');
const actions = require('./actions');

   const extractServices=(thing)=>{
    console.log("we are going to find proper service calls for the thing named:", thing.name)
    console.log("\n")
    // extracting properties
    for(var i in thing.properties){
      properties.extractProperties(thing,i,thing.properties[i]);
    }
     // extracting actions
  //   for(var i in thing.actions){
    //  actions.extractActions(thing,i,thing.actions[i]);
    // }
    
     // extracting events ???
  };
  export {extractServices};
