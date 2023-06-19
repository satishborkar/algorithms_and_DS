## Divide and Conquer

- Binary Search
- Merge Sort
- Quick Sort
- Strassen's Matrix Multiplication
- Closest Pair of Points

Divide and conquer is a popular algorithmic paradigm that involves breaking down a problem into smaller subproblems, solving them recursively, and combining the results to obtain the final solution. This approach is often used to solve complex problems efficiently. Here's a general outline of how divide and conquer algorithms work:

1. Divide: Divide the problem into smaller subproblems. This step usually involves breaking the input data or problem instance into smaller chunks or subsets.

2. Conquer: Solve the subproblems recursively. If the subproblems are small enough to be solved directly, solve them and obtain the solutions. Otherwise, recursively apply the divide and conquer approach to solve each subproblem.

3. Combine: Combine the solutions of the subproblems to obtain the solution for the original problem. This step typically involves merging or integrating the results obtained from the subproblems to obtain a final solution.

The divide and conquer approach is commonly used in various algorithms, such as sorting algorithms (e.g., Merge Sort and Quick Sort), searching algorithms (e.g., Binary Search), and several optimization problems.

Here's a high-level example of a divide and conquer algorithm, specifically the Merge Sort algorithm for sorting an array:

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements
  merged.push(...left.slice(i));
  merged.push(...right.slice(j));

  return merged;
}

// Example usage:
const arr = [8, 3, 1, 5, 2, 10, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
```

In the Merge Sort algorithm, the array is divided into two halves recursively until the base case (when the array size is 1 or less) is reached. Then, the sorted halves are merged together using the `merge` function.

This is just one example of a divide and conquer algorithm. The specific implementation and details can vary depending on the problem being solved.
