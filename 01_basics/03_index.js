
// function definition
// function sayMyname() {
//     console.log("love piyush")
// }

// //function use - function call
// sayMyname();


// function printCounting() {
//     for(let i=1; i<=100; i++) {
//         console.log(i);
//     }
// }
// printCounting();

// function printNumber(num) {
//     console.log("printing Number:", num);

// }
//       printNumber(5);
//     //   (num: any): void

// function getAverage(num1,num2) {
//      let avg = (num1 + num2)/2;
//      console.log("average:", avg);
// }

// getAverage(3,7);

// return function

// function getSum(a,b,c){
//   let sum = a+b+c;
//   return sum;
// }
// let ans= getSum(1,2,3);
// console.log("Printing Sum:", ans);

// function getMyname(firstName, lastname) {
//   let fullName = firstName + " " + lastname; // Proper casing
//   return fullName; // Correct variable name
// }
// let fullName = getMyname("piyush", "sahu");
// console.log("full Name:", fullName);

// let getmultiplication = function (a,b){
//   return a*b;
// }

// let ans = getmultiplication(2,10);
// console.log(ans);
// let squareNumber = function(num) {
//   let ans = num**2;
//   return ans;   
// }

// let ans = squareNumber(5);
// console.log(ans);

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
} 
console.log(getExp(2,10));