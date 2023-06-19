# Linked List

A linked list is a linear data structure in which elements are stored in separate objects called nodes. Each node contains a value and a reference or link to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, allowing for dynamic memory management.

Here are some key points about linked lists:

1. Node: Each node in a linked list consists of two parts: the data or value being stored and a reference (or link) to the next node in the sequence.

2. Head: The head is the first node in the linked list. It serves as the starting point for traversing or accessing the elements.

3. Tail: The tail is the last node in the linked list. Its reference points to null, indicating the end of the list.

4. Singly Linked List: In a singly linked list, each node contains a reference to the next node. Traversal is only possible in one direction, from the head to the tail.

5. Doubly Linked List: In a doubly linked list, each node contains references to both the next node and the previous node. Traversal can be done in both forward and backward directions.

Linked lists offer several practical use cases and advantages:

1. Dynamic Size: Linked lists have a dynamic size, meaning they can grow or shrink dynamically as elements are added or removed. This makes them suitable for scenarios where the size of the data is unknown or constantly changing.

2. Insertion and Deletion: Linked lists excel at efficient insertion and deletion operations. Since memory allocation is dynamic, adding or removing elements from a linked list involves updating a few references, without requiring large-scale data shifting as in arrays.

3. Implementation of Other Data Structures: Linked lists serve as the foundation for other data structures such as stacks and queues. Stacks are commonly implemented using a singly linked list, while doubly linked lists are used for implementing dequeues.

4. Memory Efficiency: Linked lists can be memory-efficient compared to arrays when the size of the data is not known in advance or varies over time. They avoid the need for allocating a fixed-size block of memory.

5. Data Structures with Changing Order: Linked lists are suitable for scenarios where the order of elements changes frequently. Inserting or moving an element in a linked list involves updating a few references, making it more efficient than shifting elements in an array.

However, linked lists also have some limitations:

1. Random Access: Unlike arrays, linked lists do not provide constant-time random access to elements. To access a specific element, traversing the list from the head or tail may be required, resulting in linear time complexity.

2. Additional Memory Overhead: Linked lists require extra memory to store the references or links between nodes, which can increase memory usage compared to arrays.

Linked lists are used in various applications such as representing sparse matrices, implementing hash tables, managing memory allocation in dynamic data structures, and as building blocks for more complex data structures and algorithms.

In JavaScript, a linked list data structure can be implemented using objects and references. Here's an example of implementing a singly linked list in JavaScript:

```javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAfter(targetValue, value) {
    const newNode = new ListNode(value);
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== targetValue) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    if (currentNode === this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return;
    }

    if (currentNode.next === this.tail) {
      this.tail = currentNode;
    }

    currentNode.next = currentNode.next.next;
  }

  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAfter(10, 15);
linkedList.delete(20);

console.log(linkedList.toArray()); // Output: [5, 10, 15]
```

In the example above, we define a `ListNode` class representing a node in the linked list. Each `ListNode` object has a `value` property to store the value of the node and a `next` property to reference the next node in the list.

We also define a `LinkedList` class that represents the linked list itself. The class has a `head` property to store the reference to the first node (head) of the list, and a `tail` property to store the reference to the last node (tail) of the list.

The `append(value)` method is used to add a new node with the given value at the end of the list. The `prepend(value)` method adds a new node with the given value at the beginning of the list. The `insertAfter(targetValue, value)` method inserts a new node with the given value after the node with the target value in the list. The `delete(value)` method removes the node with the given value from the list. The `toArray()` method converts the linked list into an array for easier display and manipulation.

In the example usage, we create a linked list and perform various operations such as appending, prepending, inserting after a specific value, and

deleting a value. Finally, we print the linked list as an array using the `toArray()` method.

Linked lists are useful for scenarios where efficient insertion and deletion at the beginning or end of a collection is required, such as implementing stacks, queues, and various other data structures and algorithms.
