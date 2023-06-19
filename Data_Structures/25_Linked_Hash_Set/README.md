## Linked Hash Set

A LinkedHashSet is a data structure that combines the properties of a linked list and a hash set. It maintains a doubly-linked list of elements along with a hash table for efficient element lookup. The LinkedHashSet retains the insertion order of elements while ensuring uniqueness.

Here are some important points about the LinkedHashSet data structure and its usage in programming:

1. Uniqueness: Like a regular set, a LinkedHashSet allows only unique elements. It automatically removes duplicate values, ensuring that each element appears only once in the collection.

2. Insertion Order: One of the main advantages of a LinkedHashSet is that it preserves the insertion order of elements. This means that when you iterate over a LinkedHashSet, the elements will be returned in the same order in which they were added.

3. Efficient Element Lookup: The LinkedHashSet uses a hash table for fast element lookup. This allows for constant-time complexity (O(1)) for insertion, deletion, and search operations on average.

4. Iteration Performance: LinkedHashSet provides efficient iteration performance since it maintains a doubly-linked list. It allows for fast iteration over the elements in the order of insertion.

5. Practical Usage:
   - Removing Duplicates: LinkedHashSet is often used to remove duplicate elements from a collection while preserving the original order. By adding elements to a LinkedHashSet, you can ensure that only unique elements remain in the collection.
   - Order-Preserving Operations: LinkedHashSet is useful when the order of elements is important. It allows you to perform operations like intersection, union, or difference on sets while retaining the original order of elements.
   - Caching: LinkedHashSet can be used in caching scenarios where you want to maintain a cache of unique objects while preserving their order of access. It provides efficient lookup and allows for removal of the least recently used items when the cache size exceeds a certain threshold.
   - User Interface (UI) Components: LinkedHashSet can be handy in UI development when you need to track a set of items with unique identifiers and preserve the order in which they were added. For example, in a dropdown menu or a tag input component.

Now, let's see an example of using LinkedHashSet in JavaScript:

```javascript
// Creating a LinkedHashSet
const linkedHashSet = new Set();

// Adding elements to the LinkedHashSet
linkedHashSet.add("apple");
linkedHashSet.add("banana");
linkedHashSet.add("orange");

// Adding duplicate elements (ignored in LinkedHashSet)
linkedHashSet.add("apple");
linkedHashSet.add("banana");

// Iterating over the LinkedHashSet (maintains insertion order)
linkedHashSet.forEach((item) => {
  console.log(item);
});

// Output:
// "apple"
// "banana"
// "orange"

// Checking if an element exists in the LinkedHashSet
console.log(linkedHashSet.has("banana")); // true
console.log(linkedHashSet.has("grape")); // false

// Removing an element from the LinkedHashSet
linkedHashSet.delete("banana");

// Size of the LinkedHashSet
console.log(linkedHashSet.size); // 2

// Clearing the LinkedHashSet
linkedHashSet.clear();
console.log(linkedHashSet.size); // 0
```

In the example above, we create a LinkedHashSet using the `Set` constructor in JavaScript. We add elements to the LinkedHashSet and demonstrate that duplicate elements are ignored. The `forEach` loop iterates over the elements in the same order they were added. We also show how to check if an element exists, delete an element, and clear the LinkedHashSet.

LinkedHashSet in JavaScript provides a convenient way to store a collection of unique elements while preserving their insertion order. It is useful in scenarios where uniqueness and order preservation are required, such as removing duplicates, caching, or working with UI components.
