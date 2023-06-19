/*
 Finds the maximum sum of a subarray of size k within the given array.

    Args:
        arr (list): The input array of integers.
        k (int): The size of the subarray.

    Returns:
        int: The maximum sum of a subarray of size k.
*/

function maxSumSubarray(arr, k) {
  let start = 0;
  let end = k - 1;

  let currentSum = arr.slice(start, end + 1).reduce((sum, num) => sum + num, 0);
  let maxSum = currentSum;

  while (end < arr.length - 1) {
    start++;
    end++;

    currentSum = currentSum - arr[start - 1] + arr[end];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [2, 4, 1, 7, 8, 3];
const subarraySize = 3;

const result = maxSumSubarray(array, subarraySize);
console.log(result); // Output: 16

/*
    - What is sliding window (Fixed size & Dynamically growing)
    - Benefits of sliding window
    - How to spot sliding window problems
    - Example & implementation
*/

/* 
 THIS IS A MENTAL MODAL for SLIDING WINDOW
*/

/*
- Things which are iterable over sequently
- Contiguous sequence of element
- String, array, integer, characters, Linked List
- Min, Max, Longest, Shortest, Contains, Calculate etc.
*/

/*
There are two types of problems might encounter with sliding window 
- Fixed Length
- Dynamic Length
*/

// Q1. [Fixed Length] - Find max sum of subArray of size 3 in given array
const list = [4, 2, 7, 8, 1, 2, 8, 1, 0];
function findMaxSubArray(arr, size) {
  let maxValue = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (i >= size - 1) {
      maxValue = Math.max(maxValue, currentSum);
      currentSum = currentSum - arr[i - (size - 1)];
    }
  }
  return maxValue;
}

//  console.log({
//    findMaxSubArray: findMaxSubArray(list, 3),
//  });

//  Q2.smallest subArray with given sum of K

const list2 = [2, 4, 6, 7, 9, 8, 10, 11, 13];
const list3 = [2, 4, 6, 5, 12, 8, 10, 11, 13];
const list4 = [2, 4, 3, 1, 2, 2, 0, 2, 4];

function minSubSetOfArrayWithGivenSum(arr, sum) {
  let minWindowSize = +Infinity;
  let currentWindowSum = 0;
  let windowStart = 0;
  let subArray = [];

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];

    while (currentWindowSum >= sum) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum = currentWindowSum - arr[windowStart];
      windowStart++;
    }
  }

  return minWindowSize;
}

console.log({
  minSubSetOfArrayWithGivenSum: minSubSetOfArrayWithGivenSum(list4, 9),
});
