//call stack is LIFO - Last in first out ay of execution for javascript code 

function foo() {
  console.log("foo called")
  throw new Error("Foo is not a good function"); 
}

function bar(params) {
  foo()
}

function baz(params) {
  bar()
}

//baz();

//stack size is very limited - so this loop will break it.

// function breakStack(params) {
//   breakStack()
// }

// breakStack()