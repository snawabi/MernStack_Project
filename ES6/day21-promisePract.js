
// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing

let student = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: "Learnt ES6"
    })
  }, 2000)

  setTimeout(() => {
    reject({
      status: "I am progessing"
    })
  }, 3000)
})

console.log(student);

student.then((data) => {
  console.log("data: ", data)
}).catch((err)=> {
  console.log("error: ", err)
})