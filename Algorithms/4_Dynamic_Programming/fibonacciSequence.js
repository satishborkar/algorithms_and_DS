/*
The Fibonacci sequence is a type series where each number is the sum of the two 
that precede it. It starts from 0 and 1 usually. 
The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on. 
*/

// Normal Fibonacci
// function fib(n){
//     console.log(n);
//     if(n <=2){
//         return 1;
//     }else{
//       return fib(n - 1) + fib(n - 2);
//     }
// };

// With Dynamic Programming and memorization
function fib(n, preValue = {}) {
  if (preValue[n]) {
    return preValue[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, preValue) + fib(n - 2, preValue);
  }

  preValue[n] = result;

  return result;
}

//console.log(fib(4));
console.log(fib(7));
//console.log(fib(40));
