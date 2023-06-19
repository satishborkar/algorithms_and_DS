/*
 Given an array of integers and a number k, write a function that returns
    true if given array can be divided into pairs such that sum of every pair
    is divisible by k.

 Example 1
 Input : arr = [9, 5, 7, 3], k = 6  
      Output: True Explanation: {(9, 3),(5,7)} is a possible solution. 
      9 + 3 = 12 is divisible by 6 and 
      7 + 5 = 12 is also divisible by 6.

 Example 2
   Input : arr = [2, 4, 1, 3], k = 4 
   Output: False Explanation: There is no possible solution.

*/

function arrayPairSumDivisibilityProblem(arr, divideBy) {
  // return false if not dividable in equal two
  // arr must be even value
  if (arr.length % 2 === 1) return false;

  const middleIndex = Math.ceil(arr.length / 2);
  const firstHalf = arr.splice(0, middleIndex);
  const secondHalf = arr.splice(-middleIndex);

  let result = false;
  for (let i = 0; i < middleIndex; i++) {
    const currentResult =
      (firstHalf[i] + secondHalf[secondHalf.length - 1 - i]) % divideBy;

    // console.log({
    //   iteration: i,
    //   firstHalf: firstHalf[i],
    //   secondHalf: secondHalf[secondHalf.length - 1 - i],
    // });
    if (currentResult > 0) {
      return false;
      break;
    } else {
      result = true;
    }
  }

  return result;
}

const list = [9, 5, 7, 3];
console.log(arrayPairSumDivisibilityProblem(list, 6));
const arr = [2, 4, 1, 3];
console.log(arrayPairSumDivisibilityProblem(arr, 6));
const arr2 = [3, 3, 3, 4];
console.log(arrayPairSumDivisibilityProblem(arr2, 6));
const arr3 = [3, -3, 8, 9];
console.log(arrayPairSumDivisibilityProblem(arr3, 6));

const arr4 = [
  72, 2, 14, 8, 13, 10, 11, 7, 13, 14, 14, 6, 11, 9, 7, 6, 9, 7, 2, 6, 11, 3,
  11, 3, 11, 7, 13, 5, 1, 12, 10, 8, 7, 12, 5, 5, 3, 12, 1, 4, 10, 14, 10, 8, 8,
  6, 5, 14, 3, 7, 5, 13, 6, 3, 5, 13, 3, 14, 7, 1, 9, 1, 3, 1, 9, 12, 13, 11,
  12, 12, 11, 11, 14, 5,
];
console.log(arrayPairSumDivisibilityProblem(arr4, 6));
