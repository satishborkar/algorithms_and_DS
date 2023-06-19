# Heap Data Structure

A heap is a complete binary tree-based data structure that satisfies the heap property. In a heap, for every node 'i' other than the root, the value stored in 'i' is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the values stored in its children.

Here are some key points about heaps:

1. Complete Binary Tree: A heap is a specialized form of a binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.

2. Heap Property: The heap property ensures that for a max heap, the value in each node is greater than or equal to the values in its children, and for a min heap, the value in each node is less than or equal to the values in its children.

3. Heap Operations: The main operations supported by heaps include inserting an element, deleting the maximum or minimum element, and retrieving the maximum or minimum element without removing it. These operations maintain the heap property.

4. Binary Heap: The most commonly used implementation of a heap is the binary heap, which is represented as an array. In a binary heap, the parent-child relationship is determined by the indices of the elements in the array.

Practical usage of heaps in programming:

1. Priority Queues: Heaps are widely used to implement priority queues, where elements with higher priorities are dequeued before elements with lower priorities. Priority queues find applications in scheduling, resource allocation, graph algorithms (such as Dijkstra's algorithm), and more.

2. Heap Sort: Heap sort is an efficient sorting algorithm that utilizes the heap data structure. It involves building a max heap (for ascending order) or min heap (for descending order) from the input elements and repeatedly extracting the maximum or minimum element to obtain a sorted sequence.

3. Event-driven Programming: Heaps are used to manage events and event-driven systems. Events with higher priority (e.g., user interactions, important notifications) are processed before events with lower priority (e.g., background tasks).

4. Memory Management: Heaps are utilized in memory management systems, such as dynamic memory allocation and garbage collection. Heaps allow for efficient allocation and deallocation of memory blocks by maintaining a free block list in a heap structure.

5. Median Finding: Heaps can be employed to efficiently find the median of a set of numbers. By maintaining two heaps—one max heap for the smaller half of the numbers and one min heap for the larger half—finding the median can be done in logarithmic time.

Heaps provide efficient access to the maximum or minimum element and allow for efficient insertion and deletion operations while maintaining the heap property. They are particularly useful in scenarios where prioritization, sorting, or efficient access to extreme values is required.

In JavaScript, the heap data structure can be implemented using an array and a set of heap operations. Here's an example of implementing a min heap (a binary min-heap) in JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    const value = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return value;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

// Example usage:
const heap = new MinHeap();

heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(3);
heap.insert(8);

console.log(heap.peek()); // Output: 3

console.log(heap.remove()); // Output: 3
console.log(heap.remove()); // Output: 5

console.log(heap.peek()); // Output: 8
```

In the example above, we create a `MinHeap` class representing a min heap. The heap is implemented using an array where the parent-child relationships are maintained based on the indices. The class provides methods for accessing the indices of parent, left child, and right child nodes, as well as checking their existence. The `heapifyUp()` method ensures that the heap property is maintained by swapping elements upwards, while the `heapifyDown()` method ensures the heap property is maintained by swapping elements downwards. The `insert()` method inserts a value into the heap and performs the necessary heapification, and the `remove()` method removes the root element from
