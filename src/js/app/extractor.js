

var actionsRequest=[];
var PropertiesRequestsArr=[];

const properties = require('./properties');
const actions = require('./actions');

   const extractServices=(thing)=>{
    var thingRequests=[];
    console.log("we are going to find proper service calls for the thing named:", thing.name)
    console.log("\n")
    // extracting properties
    for(var i in thing.properties){
      PropertiesRequestsArr=properties.extractProperties(thing,i,thing.properties[i],PropertiesRequestsArr);
    }
    thingRequests.push(PropertiesRequestsArr);
    
    //console.log("\n\n\n ***PropertiesRequestsArr: ",PropertiesRequestsArr)
     // extracting actions
  //   for(var i in thing.actions){
    //  actions.extractActions(thing,i,thing.actions[i]);
    // }
    
     // extracting events ???
     return thingRequests
  };
  export {extractServices};
