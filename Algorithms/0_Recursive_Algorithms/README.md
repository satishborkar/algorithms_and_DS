# Information related Array?

## resources

- [Recursion Function on GeekForGeek](https://www.geeksforgeeks.org/recursive-functions/)
- [Recursion in Programming](https://www.youtube.com/watch?v=IJDJ0kBx2LM)

Recursive functions are commonly used in algorithms that involve traversing or exploring data structures, such as trees and graphs. Some examples of algorithms that use recursive functions include:

1. Tree Traversal:

   - Depth-First Search (DFS): Recursive functions are used to traverse through the nodes of a tree or graph in a depth-first manner, visiting the children recursively.
   - Inorder, Preorder, and Postorder Traversal: Recursive functions are used to traverse binary trees in different orders.

2. Graph Traversal:

   - Depth-First Search (DFS): Similar to tree traversal, recursive functions can be used to traverse graphs in a depth-first manner, visiting adjacent vertices recursively.
   - Breadth-First Search (BFS): Although BFS is typically implemented using a queue, a recursive approach can also be used by making use of recursive function calls.

3. Backtracking:

   - Backtracking algorithms, such as solving puzzles like Sudoku or the N-Queens problem, often utilize recursive functions to explore possible solutions by trying different choices at each step and backtracking when a choice leads to a dead end.

4. Divide and Conquer:

   - Many divide and conquer algorithms, like binary search, merge sort, and quicksort, involve recursive functions. These algorithms divide the problem into smaller subproblems and recursively solve them.

5. Dynamic Programming:

   - In dynamic programming, recursive functions are used to break down a problem into smaller subproblems and store the results of these subproblems to avoid redundant calculations. The recursive functions can be optimized using techniques like memoization or bottom-up dynamic programming.

6. Fractals:
   - Fractal generation algorithms, like the Mandelbrot set or the Koch curve, often use recursive functions to create complex and self-repeating geometric patterns.

These are just a few examples of algorithms that utilize recursive functions. Recursive approaches can be elegant and intuitive for solving problems with recursive structures. However, it's important to ensure that the recursive calls have proper base cases and terminate correctly to avoid infinite recursion.
