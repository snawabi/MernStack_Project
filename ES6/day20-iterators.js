//Filter, Map, Some and Reduce : Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
  {id : 1, name : "John", savedby : "CaptainAmerica"},
  {id : 2, name : "Alice", savedby : "IronMan"},
  {id : 3, name : "Roger", savedby : "CaptainAmerica"},
  {id : 4, name : "Adam", savedby : "IronMan"},
  {id : 5, name : "Alex", savedby : "SuperMan"},
  {id : 6, name : "Robin", savedby : "Thor"}
];

//1. Give me the list of persons saved by Captain America

let prsnSavedByCA = personsList.filter(prsnObj=>prsnObj.savedby==="CaptainAmerica")

console.log(prsnSavedByCA)
//console.log(personsList) //this will not change - so preserving the immutability

//2. Give me the list of names saved by IronMan

//let prsnSavedByIronM = personsList.map(prsnObj=>prsnObj.savedby==="IronMan" ? prsnObj.name : "").filter(p=>p!="")

let prsnSavedByIronM = personsList.map(prsnObj=>{
                          if(prsnObj.savedby==="IronMan")
                              return {"Saved Person" : prsnObj.name}
                              else
                               return ""}).filter(p=>p!="")
console.log(prsnSavedByIronM)

//3. If there is one person saved by SpiderMan/ SuperMan

let savdBySpiderMan = personsList.some(prsn => prsn.savedby == "SpiderMan")
let savdBySuperMan = personsList.some(prsn => prsn.savedby == "SuperMan")
// console.log(savdBySpiderMan)
// console.log(savdBySuperMan)

//4. Count the number of persons saved by each super hero

let persnCount = personsList.reduce((prevVal, currValue)=>{
                  
                  prevVal[currValue.savedby] = prevVal[currValue.savedby] ? prevVal[currValue.savedby]+1 : 1;
                  
                  return prevVal;
              }, new Set()) //initializing the pervious value [] {}

//console.log(persnCount);


//Question :
///////////////////////////

let persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "javascript"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present