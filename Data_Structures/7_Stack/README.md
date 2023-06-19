# Stack

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It represents a collection of elements in which new elements are added and removed from the same end, known as the top of the stack.

The operations commonly associated with a stack are:

1. Push: This operation adds an element to the top of the stack. It places the new element onto the stack.

2. Pop: This operation removes the element from the top of the stack. It returns the element that was most recently added to the stack, and updates the top to the next element.

3. Peek or Top: This operation retrieves the element at the top of the stack without removing it. It allows you to examine the element that will be popped next.

4. IsEmpty: This operation checks if the stack is empty. It returns a Boolean value indicating whether the stack has any elements or not.

Stacks are often visualized as a vertical structure, where the top is at the topmost position and the bottom is at the bottommost position. Elements are pushed onto the top and popped from the top, maintaining the LIFO order.

Practical usage of stacks in programming:

1. Function Call Stack: Stacks are extensively used in programming languages to manage function calls. Each function call pushes its context onto the stack, including parameters, local variables, and the return address. When a function completes, its context is popped from the stack, and the program resumes execution from the previous context.

2. Expression Evaluation: Stacks are employed to evaluate expressions, including infix, postfix, and prefix notation. They help in converting between notations and in calculating the results by pushing operands and operators onto the stack and performing the required operations.

3. Undo/Redo Operations: Stacks are utilized to implement undo and redo functionality in applications. Each action performed is pushed onto the stack, allowing the user to undo previous actions by popping the stack, and redo them by pushing the stack.

4. Parentheses Matching and Syntax Parsing: Stacks are useful for verifying the correctness of parentheses, braces, and brackets in an expression. They can be used to parse and evaluate syntax structures such as HTML or programming language code.

5. Backtracking and Depth-First Search: Stacks are employed in backtracking algorithms and depth-first search (DFS). They help in maintaining a record of visited nodes or previous states, allowing for exploration and traversal of graphs or tree-like structures.

6. Browser History: Stacks can be used to implement the functionality of the back and forward buttons in web browsers. Each visited page is pushed onto the stack, allowing users to go back to the previous page by popping the stack.

Stacks provide a simple and efficient way to manage elements in a Last-In-First-Out manner. They are widely used in programming for managing function calls, evaluating expressions, maintaining program state, and implementing various algorithms and data structures.

In JavaScript, a stack data structure can be implemented using an array and a set of stack operations. Here's an example of implementing a stack in JavaScript:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
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
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.size()); // Output: 1

stack.clear();

console.log(stack.isEmpty()); // Output: true
```

In the example above, we create a `Stack` class that represents a stack data structure. The stack is implemented using an array, where elements are added to the end of the array and removed from the end of the array.

The `push(element)` method is used to add an element to the stack by pushing it onto the array. The `pop()` method removes and returns the top element from the stack. The `peek()` method returns the top element without removing it. The `isEmpty()` method checks if the stack is empty. The `size()` method returns the number of elements in the stack. The `clear()` method removes all elements from the stack.

In the example usage, we create a stack and push elements 10, 20, and 30 onto it. We then demonstrate using the `peek()` method to see the top element, and the `pop()` method to remove and retrieve elements from the stack. We also show the usage of `size()` to get the number of elements in the stack, and `isEmpty()` to check if the stack is empty. Finally, we use the `clear()` method to empty the stack.

The stack data structure follows the Last-In-First-Out (LIFO) principle, making it useful in scenarios where the order of insertion and removal is important, such as function call stacks, expression evaluation, backtracking algorithms, and more.
