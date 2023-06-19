# Queue

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It represents a collection of elements in which new elements are added at one end, known as the rear or tail, and existing elements are removed from the other end, known as the front or head.

The operations commonly associated with a queue are:

1. Enqueue: This operation adds an element to the rear of the queue. It takes the new element and places it at the end of the queue.

2. Dequeue: This operation removes the element from the front of the queue. It returns the element that has been in the queue the longest, and updates the front of the queue to the next element.

3. Peek or Front: This operation retrieves the element at the front of the queue without removing it. It allows you to examine the element that will be dequeued next.

4. IsEmpty: This operation checks if the queue is empty. It returns a Boolean value indicating whether the queue has any elements or not.

Queues are often visualized as a horizontal structure, where the front is on the left side and the rear is on the right side. Elements are enqueued at the rear and dequeued from the front, maintaining the FIFO order.

Here's an example of a queue:

```
Front [10, 20, 30, 40] Rear
```

In this example, 10 was the first element added (front), followed by 20, 30, and finally 40, which is the most recently added element (rear). The dequeue operation will remove 10 from the front, and subsequent dequeues will remove 20, 30, and 40 in that order.

Queues are commonly used in various applications, including process scheduling, breadth-first search algorithms, printer job spooling, and event-driven programming, among others. They provide an efficient way to manage elements based on their arrival time, ensuring that the first element added is the first to be processed or serviced.

In JavaScript, a queue data structure can be implemented using an array and a set of queue operations. Here's an example of implementing a queue in JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log(queue.size()); // Output: 1

queue.clear();

console.log(queue.isEmpty()); // Output: true
```

In the example above, we create a `Queue` class that represents a queue data structure. The queue is implemented using an array, where elements are added to the end of the array (enqueue) and removed from the beginning of the array (dequeue).

The `enqueue(element)` method is used to add an element to the queue by pushing it onto the array. The `dequeue()` method removes and returns the front element from the queue. The `front()` method returns the front element without removing it. The `isEmpty()` method checks if the queue is empty. The `size()` method returns the number of elements in the queue. The `clear()` method removes all elements from the queue.

In the example usage, we create a queue and enqueue elements 10, 20, and 30 into it. We then demonstrate using the `front()` method to see the front element, and the `dequeue()` method to remove and retrieve elements from the queue. We also show the usage of `size()` to get the number of elements in the queue, and `isEmpty()` to check if the queue is empty. Finally, we use the `clear()` method to empty the queue.

The queue data structure follows the First-In-First-Out (FIFO) principle, making it useful in scenarios where the order of insertion and removal is important, such as managing requests, implementing breadth-first search, task scheduling, and more.
