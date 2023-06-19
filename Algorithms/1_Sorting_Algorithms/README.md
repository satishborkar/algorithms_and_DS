There are various sorting algorithms available, each with its own characteristics, time complexity, and best-case/worst-case scenarios. Here are some commonly used sorting algorithms:

1. Bubble Sort:

   - Compares adjacent elements and swaps them if they are in the wrong order. Repeatedly iterates through the list until the entire list is sorted. It has a time complexity of O(n^2).

2. Selection Sort:

   - Selects the minimum element from the unsorted part of the array and swaps it with the first unsorted element. Continues this process until the entire array is sorted. It also has a time complexity of O(n^2).

3. Insertion Sort:

   - Builds a sorted portion of the array by iteratively inserting elements from the unsorted part into their correct positions within the sorted part. It has a time complexity of O(n^2), but performs well on small or nearly sorted arrays.

4. Merge Sort:

   - Divides the array into smaller subarrays, sorts them recursively, and then merges them back together to produce a sorted array. It has a time complexity of O(n log n) in all cases.

5. Quick Sort:

   - Selects a pivot element and partitions the array into two sub-arrays, one with elements smaller than the pivot and the other with elements larger. Recursively applies the same process to the sub-arrays. It has an average time complexity of O(n log n), but its worst-case time complexity is O(n^2).

6. Heap Sort:

   - Builds a max heap from the array and repeatedly extracts the maximum element (root) to place it in the sorted portion of the array. It has a time complexity of O(n log n) in all cases.

7. Radix Sort:

   - Sorts numbers by processing digits from the least significant to the most significant. It has a time complexity of O(d \* (n + k)), where d is the number of digits and k is the range of the input values.

8. Counting Sort:
   - Works well for non-negative integer values within a specific range. It counts the occurrences of each element and uses this information to place them in the correct order. It has a time complexity of O(n + k), where n is the number of elements and k is the range of the input values.

These are just a few examples of sorting algorithms. Each algorithm has its strengths and weaknesses, and the choice of which one to use depends on factors such as the size of the input, the nature of the data, and the desired time complexity for the specific problem at hand.
