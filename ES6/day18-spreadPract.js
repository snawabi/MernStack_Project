//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

let vaccine = ["covid vaccine", "moderna", "pfizer", "vaccine"]
console.log(...vaccine);

//--------------------------------------------------------------------
let doctor = {
  degree: "Master Degree",
  fieldStudy: "Medical Docotr",
  experience: 5
}

function doctorObject(...rest){
  return rest;
}
console.log(doctorObject(doctor));
//------------------------------------------------------------------
let vaccineObject = {
  name: "moderna",
  noOfDoes: 3,
  price: "free",
  availableAtPharmacy: "Save Mart"
}

let doctorVaccineMerge = {...doctor, ...vaccineObject}
console.log(doctorVaccineMerge);