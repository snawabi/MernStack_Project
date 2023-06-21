let persons = [
  {id : 1, name : "John", tags : "javascript 1"},
  {id : 2, name : "Alice", tags : "javascript 2"},
  {id : 3, name : "Roger", tags : "java 1"},
  {id : 4, name : "Adam", tags : "javascript 3"},
  {id : 5, name : "Alex", tags : "java 2"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present

//1
let javascriptTag = persons.filter(tag=>tag.tags==="javascript");
//console.log(javascriptTag);

//2
let changeKey = persons.map(key=>{
  if (key.tags==="java"){
    return {"Developer" : key.name + " Programmer"}
  } else 
    return ""
}).filter(p=>p!="")

// console.log(changeKey)
// console.log(persons);

//3
let tagPython = persons.some(python => python.tags == "spiderman");
//console.log(tagPython)

//4
let uniqueTag = persons.reduce((prevalue, currValue)=>{
  // console.log("previousValue: ", prevalue[currValue.tags]);
  // console.log("currentValue: ", currValue.tags);
  prevalue[currValue.tags]= prevalue[currValue.tags] ? prevalue[currValue.tags] +1 : 1;
  // console.log("previousValue2: ", prevalue[currValue.tags]);
  // console.log("currentValue2: ", currValue.tags);
  return prevalue;
}, new Set())

console.log(uniqueTag);

