



export function generateData(postDataProperty){
if(postDataProperty.type=="number"){
var min=postDataProperty.minimum;
var max=postDataProperty.maximum;
return generateNumber(min,max);
}
if(postDataProperty.type=="integer"){
  var min=postDataProperty.minimum;
  var max=postDataProperty.maximum;
  return generateInteger(min,max);
}
if(postDataProperty.type=="boolean"){
  return generateBoolean(); 
}
if(postDataProperty.type=="string"){
  return generateString()
}
if(postDataProperty.type=="array"){
  var arr=[]
  for(var i=0; i<postDataProperty.maxItems;i++){
    arr.push(generateData(postDataProperty.items))
  } 
  return arr;
}
if(postDataProperty.type=="object"){
return this.generateData(postDataProperty.properties)
}

}
export function generateNumber(min,max){
  if(min==null)
    min=0
  if(max==null)
    max=10000
  return ((Math.random() * (max - min) ) + min).toString();
}
export function generateInteger(min,max){
  if(min==null)
    min=0
  if(max==null)
    max=10000
  return (Math.floor(Math.random() * (max - min) ) + min).toString();
}
export function generateString(){
  return Math.random().toString(36)
}
export function generateBoolean(){
  return (Math.floor(Math.random()+0.5)).toString(); 
}
