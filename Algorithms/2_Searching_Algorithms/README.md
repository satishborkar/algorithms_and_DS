## Searching Algorithms

There are several searching algorithms available, each with its own characteristics and best-case/worst-case scenarios. Here are some commonly used searching algorithms:

1. Linear Search:

   - Iterates through the array or list sequentially, comparing each element with the target value until a match is found or the end of the list is reached. It has a time complexity of O(n), where n is the number of elements in the array.

2. Binary Search:

   - Requires a sorted array or list. It repeatedly divides the search space in half by comparing the middle element with the target value and discarding the half that cannot contain the target. It has a time complexity of O(log n), where n is the number of elements in the array. Binary search can be implemented recursively or iteratively.

3. Interpolation Search:

   - Works best on uniformly distributed sorted arrays. It calculates an estimate of the target position based on the distribution of values in the array and performs a binary search-like operation. It has an average time complexity of O(log log n), but its worst-case time complexity can be O(n).

4. Hashing:

   - Utilizes a hash function to map keys or values to indexes in a hash table or associative array. It provides constant-time (O(1)) average-case complexity for retrieval. However, collisions and hash function quality can affect its performance.

5. Jump Search:

   - Requires a sorted array. It jumps or steps ahead by a fixed interval to find a range where the target value may exist and then performs a linear search within that range. It has a time complexity of O(√n), where n is the number of elements in the array.

6. Exponential Search:

   - Requires a sorted array. It starts with a small range, exponentially increases the range size, and then performs a binary search within the expanded range. It has a time complexity of O(log k), where k is the index of the first element greater than the target.

7. Ternary Search:
   - Requires a sorted array. It divides the search space into three parts and determines whether the target value is in the lower third, middle third, or upper third of the array. It has a time complexity of O(log3 n), where n is the number of elements in the array.

These are some of the commonly used searching algorithms. The choice of which algorithm to use depends on factors such as the size of the input, whether the data is sorted or not, and the desired time complexity for the specific problem at hand.
