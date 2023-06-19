function reverseWord(value) {
  if (value === "") {
    return "";
  }
  return reverseWord(value.substring(1)) + value.charAt(0);
}

function reverseString(value) {
  // baseCase / exitCase
  if (value.length === 0) {
    return "";
  }
  // Smallest amount of work can be done with each iteration
  return reverseString(value.substring(1)) + value.charAt(0);
}

// recursiveFunctionDefinition{
//     baseCase oe exitCase
//     base case should be initial step from where functions will
//     start backward to calculate the result of whole function

//     Basic or smallest Step to do iteratively
// }

function isPalinDrome(input) {
  //Base case, stopping condition
  if (input.length === "" || input.length === 1) {
    return true;
  }
  if (input.charAt(0) === input.charAt(input.length - 1)) {
    return isPalinDrome(input.substring(1, input.length - 1));
  }
  return false;
}

// Binary numbers means the numbers divided by 2

// input - 233
//   233/2 = 116, reminder = 1
//   166/2 = 58, reminder = 0;
//   58/2 = 29 = reminder = 0;
//   29/2 = 14 = reminder = 1;
//   14/2 = 7 = reminder = 0;
//   7/2 = 3 = reminder = 1;
//   3/2 = 1 = reminder = 1;
//   2/2 = 0 = reminder = 0;
//   binary value of 233 is [10010110]

// CALL STACK re-presentation
// decimalToBinary(233/2, result = 1)
//   result = 1 + "";
//     decimalToBinary(116/2, result = 1)
//       result = 0+1 + "";
//         decimalToBinary(58/2, result = 01)
//           result = 0 + 0 + 1 + "";
//             decimalToBinary(29/2, result = 001)
//               result = 1 + 0 + 0 + 1 + "";
//                 decimalToBinary(29/2, result = 1001)
//                   result =  0 + 1 + 0 + 0 + 1 + "";
//                     decimalToBinary(14/2, result = 01001)
//                       result = 0 + 0 + 1 + 0 + 0+1 + "";
//                       decimalToBinary(7/2, result = 101001)
//                         result = 1+0 + 1 + 0 + 0+1 + "";
//                            decimalToBinary(2/2, result = 1101001)
//                                result = 1 + 1 + 0 + 1 + 0 + 0+1 + "";
//                                   decimalToBinary(0/2, result = 11101001)
//                                     result = 1 + 1 + 1 + 0 + 1 + 0 + 0+1 + "";

function decimalToBinary(decimal, result = "") {
  if (decimal === 0) {
    return result;
  }
  result = (decimal % 2) + result;
  console.log({ decimal: Math.floor(decimal / 2), result });
  return decimalToBinary(Math.floor(decimal / 2), result);
}

// SUM OF NATURAL NUMBERS
function naturalNumberSummation(number) {
  if (number <= 1) {
    return number;
  }

  return number + naturalNumberSummation(number - 1);
}

// FIbonacci with Dynamic Programming and memorization
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

/*
DIVIDE & CONQUER
  1 - divide problem into several smaller sub-problems
      normally, the sub-problems are similar to original
  1 - conquer the sub-problems by solving them recursively  
      Base case - solve small enough problems by brute force
  3 - Combine the solutions to a get solution to the sub-problems
      and finally a solution to the original problem
  +++++++++++++++++++++++++++++++++++++++++++++++++
  4 - DIVIDE & CONQUER algorithms are normally recursive
  +++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
  Custom function to sort array with recursively
*/

const numberList = [13, 14, 2, 9, 6, 15, 35, 19, 7, 2, 1, 33];

function sortArray(list) {
  let sortedList = [];
  function insertionSort(list) {
    if (list.length > 0) {
      let min = list[0];
      function extractMinAndRemoveFromOriginalArray(list) {
        for (let i = 0; i < list.length; i++) {
          if (min > list[i]) {
            min = list[i];
          }
        }
        sortedList.push(min);
        list.splice(list.indexOf(min), 1);
        return insertionSort(list);
      }
    } else {
      return sortedList;
    }
    return extractMinAndRemoveFromOriginalArray(list);
  }
  return insertionSort(list);
}

// Return the index of matched Numbers in given array.
function binarySearch(list, startIndex, endIndex, numberToFind) {
  // Base Condition
  if (startIndex > endIndex) {
    return -1;
  }
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  // Find the middle index
  if (numberToFind == list[middleIndex]) {
    return middleIndex;
  }
  // If element at mid is greater than x,
  // search in the left half of middleIndex
  if (numberToFind < list[middleIndex]) {
    return binarySearch(list, startIndex, middleIndex - 1, numberToFind);
  }
  // If element at mid is smaller than x,
  // search in the right half of middleIndex
  return binarySearch(list, middleIndex + 1, endIndex, numberToFind);
}

const numList = [-11, 0, 3, 5, 6, 7, 8, 9, 11, 12, 16, 18, 19, 21, 33];

console.log({
  "binarySearch result": binarySearch(numList, 0, numList.length - 1, 16),
  totalLength: numList.length,
  totalLength2: numList.length - 1,
});

// console.log({
//   isPalinDrome_racecar: isPalinDrome("racecar"),
//   isPalinDrome_ajax: isPalinDrome("ajax"),
//   reverseWord: reverseWord("amazon"),
//   reverseString: reverseString("john doe"),
//   decimalToBinary_233: decimalToBinary(233),
//   decimalToBinary_256: decimalToBinary(256),
//   naturalNumberSummation_10: naturalNumberSummation(10),
//   naturalNumberSummation_15: naturalNumberSummation(15),
//    insertionSort: sortArray(numberList);
// });
