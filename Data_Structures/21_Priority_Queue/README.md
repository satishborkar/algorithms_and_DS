## Priority Queue

A priority queue is a data structure that stores elements along with their associated priorities. Each element in the priority queue is assigned a priority value, and the elements are ordered based on their priority. The priority queue allows efficient access to the element with the highest (or lowest) priority.

Here are some important points about the priority queue data structure:

1. Ordering: Elements in a priority queue are ordered based on their priority. The priority can be defined using a comparison function or a key associated with each element.

2. Highest/Lowest Priority: Depending on the implementation, a priority queue can be implemented as either a max heap or a min heap. In a max heap, the element with the highest priority is always at the root, while in a min heap, the element with the lowest priority is at the root.

3. Operations: Priority queues typically support the following operations:

   - `insert(element, priority)`: Inserts an element into the priority queue with the specified priority.
   - `deleteMax()` or `deleteMin()`: Removes and returns the element with the highest or lowest priority from the priority queue.
   - `peekMax()` or `peekMin()`: Returns the element with the highest or lowest priority without removing it from the priority queue.
   - `isEmpty()`: Checks if the priority queue is empty.

4. Practical Usage:
   - Task Scheduling: Priority queues can be used for scheduling tasks or jobs based on their priorities. Higher priority tasks are executed first, ensuring important tasks are completed promptly.
   - Event Processing: In event-driven systems, priority queues can be used to process events or messages based on their priority, allowing high-priority events to be handled before lower-priority ones.
   - Dijkstra's Algorithm: The priority queue is a key component in Dijkstra's algorithm for finding the shortest path in a graph. It allows efficient selection of the next vertex with the smallest distance.
   - Huffman Coding: Priority queues are used in Huffman coding, a lossless data compression technique. The queue is used to construct a binary tree by repeatedly merging nodes with the lowest frequencies.
   - Resource Allocation: Priority queues can be used for managing and allocating resources based on their priorities, such as assigning resources to processes or scheduling network packets.

The priority queue data structure is widely used in various applications where elements need to be processed based on their priorities. Its efficient ordering and access to the highest (or lowest) priority element make it valuable for managing tasks, processing events, and optimizing algorithms.

In JavaScript, the built-in `Array` data structure can be used to implement a Priority Queue. Here's an example of implementing a Priority Queue using an array in JavaScript:

```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > item.priority) {
        this.queue.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(item);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift().element;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0].element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();

// Enqueue elements with priorities
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

// Dequeue elements based on priority
console.log(priorityQueue.dequeue()); // Output: "Task 2"
console.log(priorityQueue.dequeue()); // Output: "Task 3"
console.log(priorityQueue.dequeue()); // Output: "Task 1"

// Check the front element of the queue
console.log(priorityQueue.front()); // Output: null

// Check if the priority queue is empty
console.log(priorityQueue.isEmpty()); // Output: true

// Check the size of the priority queue
console.log(priorityQueue.size()); // Output: 0
```

In the example above, we create a `PriorityQueue` class using an array. The `enqueue()` method inserts elements into the priority queue based on their priority. Lower priority values indicate higher priority. The `dequeue()` method removes and returns the element with the highest priority from the queue. The `front()` method retrieves the element at the front of the queue without removing it. The `isEmpty()` method checks if the priority queue is empty, and the `size()` method returns the number of elements in the queue.

Note that this implementation assumes a lower numerical value represents a higher priority. If you need to prioritize elements differently or use custom priority criteria, you can modify the comparison logic in the `enqueue()` method.
