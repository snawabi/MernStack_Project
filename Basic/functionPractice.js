function DivideTwoNumbers(first_number, second_number) {
  return (first_number / second_number)
}
console.log(DivideTwoNumbers(5, 2));

//2. IIFE - Immediately Invocable function expression
(function IIFE_Example(sessionName, sessionID) {
  console.log("IIFE session name - "+ sessionName +" "+ sessionID)
})("MERNSTack", 5)