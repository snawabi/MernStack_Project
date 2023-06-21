//no overloading in js. all returns "three area"

console.log(Area()) //undefined

function Area(){
  return"no area"
}

console.log(Area(2))

function Area(a){
  return "one area"
}

console.log(Area(2,3))

function Area(b,c){
  return "two area"
}

console.log(Area(2,3,4))

function Area(a,b,c){
  return "three area"
}