## Red Black Tree Data Structure

Red-Black Tree is a self-balancing binary search tree that maintains balanced properties while allowing efficient insertion, deletion, and search operations. It ensures that the tree remains approximately balanced, which guarantees a worst-case time complexity of O(log n) for these operations. Red-Black Trees are commonly used in various applications and algorithms where ordered data needs to be efficiently stored and retrieved.

Here are some important points about the Red-Black Tree data structure and its usage in programming:

1. Balanced Properties: Red-Black Trees maintain the following properties to ensure balance:

   - Each node is colored either red or black.
   - The root node is black.
   - All leaves (NIL nodes) are considered black.
   - If a node is red, both its children are black.
   - Every path from a node to its descendant leaves contains the same number of black nodes.

2. Balancing Operations: During insertion and deletion, Red-Black Trees perform rotations and color changes to maintain balance. These operations ensure that the tree remains approximately balanced and guarantees the logarithmic time complexity for operations.

3. Ordered Structure: Red-Black Trees are binary search trees, which means they maintain the ordering property of a binary search tree. The left child of a node is less than its parent, and the right child is greater.

4. Practical Usage:
   - Indexed Data Structures: Red-Black Trees are used in data structures like TreeMap and SortedSet to efficiently store ordered data and provide fast search, insertion, and deletion operations.
   - Symbol Tables: Red-Black Trees are widely used in symbol tables and associative arrays to store key-value pairs. The balanced properties of Red-Black Trees help maintain efficient search and retrieval.
   - Range Queries: The balanced structure of Red-Black Trees enables efficient range queries. By leveraging the ordering property, you can efficiently retrieve elements within a specified range.
   - Scheduler/Calendar: Red-Black Trees are suitable for scheduling or maintaining calendars where events need to be stored and retrieved based on time or order.

Now let's see an example of implementing a Red-Black Tree in JavaScript:

```javascript
// Node class representing a Red-Black Tree node
class Node {
  constructor(key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color; // "red" or "black"
  }
}

// Red-Black Tree class
class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // Insert a key into the Red-Black Tree
  insert(key) {
    const newNode = new Node(key, "red");
    // ... implementation of insertion operation
  }

  // Delete a key from the Red-Black Tree
  delete(key) {
    // ... implementation of deletion operation
  }

  // Search for a key in the Red-Black Tree
  search(key) {
    // ... implementation of search operation
  }
}

// Example usage:
const rbTree = new RedBlackTree();

// Insert keys into the Red-Black Tree
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);
rbTree.insert(20);
rbTree.insert(3);
rbTree.insert(12);

// Search for a key in the Red-Black Tree
console.log(rbTree.search(15)); // Output: true

// Delete a key from the Red-Black Tree
rbTree.delete(5);
```

In the example above, we create a Red-Black Tree class with methods to insert, delete, and search for keys. The implementation of the insertion, deletion, and search operations is omitted for brevity. The example demonstrates the creation of a Red-Black Tree, insertion
