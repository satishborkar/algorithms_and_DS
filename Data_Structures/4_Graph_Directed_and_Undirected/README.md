# Graph Directed and Undirected

Graphs are a fundamental data structure used to represent relationships between objects. They can be categorized into two main types: directed graphs and undirected graphs.

1. Directed Graphs (Digraphs):

   - In a directed graph, also known as a digraph, edges have a specific direction associated with them.
   - The edges connect pairs of vertices (nodes) and are represented by arrows indicating the direction.
   - An edge from vertex A to vertex B implies that there is a directed connection or relationship from A to B, but not necessarily from B to A.
   - Digraphs are used to model scenarios where the relationship between objects is one-way or asymmetric.
   - Examples of directed graphs include social networks (where friendships are often not reciprocal) and web page linking (where hyperlinks may be unidirectional).

2. Undirected Graphs:
   - In an undirected graph, edges have no specific direction associated with them.
   - The edges connect pairs of vertices (nodes) and are usually represented by lines or arcs without arrows.
   - An edge between vertices A and B implies a bidirectional connection or relationship between them, allowing traversal in both directions.
   - Undirected graphs are used to model scenarios where the relationship between objects is symmetric or bidirectional.
   - Examples of undirected graphs include a network of roads (where travel is possible in both directions) or a group of friends (where friendships are mutual).

Both directed and undirected graphs consist of vertices (nodes) and edges. Vertices represent the objects or entities being connected, while edges represent the relationships or connections between the vertices. These relationships can be weighted (assigned with values) or unweighted, depending on the application.

Graphs can be further augmented with additional features, such as self-loops (edges connecting a vertex to itself), multiple edges (more than one edge between two vertices), or weighted edges (edges with associated weights or costs). These extensions allow graphs to model a wide range of real-world scenarios and provide a flexible data structure for various algorithms and applications.

In JavaScript, a graph data structure can be implemented using objects and arrays. Here's an example of implementing a directed and undirected graph in JavaScript:

```javascript
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.vertices[vertex1] && this.vertices[vertex2]) {
      this.vertices[vertex1].push(vertex2);
    }
  }

  getNeighbors(vertex) {
    return this.vertices[vertex] || [];
  }

  removeVertex(vertex) {
    delete this.vertices[vertex];
    for (let v in this.vertices) {
      this.vertices[v] = this.vertices[v].filter((v) => v !== vertex);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.vertices[vertex1]) {
      this.vertices[vertex1] = this.vertices[vertex1].filter(
        (v) => v !== vertex2
      );
    }
  }

  print() {
    for (let vertex in this.vertices) {
      console.log(vertex + " -> " + this.vertices[vertex].join(", "));
    }
  }
}

// Example usage:

// Directed graph
const directedGraph = new Graph();

directedGraph.addVertex("A");
directedGraph.addVertex("B");
directedGraph.addVertex("C");
directedGraph.addVertex("D");

directedGraph.addEdge("A", "B");
directedGraph.addEdge("B", "C");
directedGraph.addEdge("C", "D");
directedGraph.addEdge("D", "A");

directedGraph.print();
/*
Output:
A -> B
B -> C
C -> D
D -> A
*/

// Undirected graph
const undirectedGraph = new Graph();

undirectedGraph.addVertex("A");
undirectedGraph.addVertex("B");
undirectedGraph.addVertex("C");
undirectedGraph.addVertex("D");

undirectedGraph.addEdge("A", "B");
undirectedGraph.addEdge("B", "C");
undirectedGraph.addEdge("C", "D");
undirectedGraph.addEdge("D", "A");

undirectedGraph.print();
/*
Output:
A -> B, D
B -> A, C
C -> B, D
D -> C, A
*/
```

In the example above, we define a `Graph` class that represents a directed and undirected graph. The class uses an object `vertices` to store the vertices as keys and their corresponding neighbors as arrays.

The `addVertex(vertex)` method is used to add a vertex to the graph. It initializes an empty array as the neighbor list for the given vertex.

The `addEdge(vertex1, vertex2)` method adds an edge between `vertex1` and `vertex2`. It checks if both vertices exist in the graph and adds `vertex2` to the neighbor list of `vertex1`.

The `getNeighbors(vertex)` method returns an array of neighbors for the given vertex.

The `removeVertex(vertex)` method removes a vertex from the graph. It deletes the vertex from the `vertices` object and removes any references to the vertex from other neighbor lists.

The `removeEdge(vertex1, vertex2)` method removes an edge between `vertex1` and `vertex2`. It removes `vertex2` from the neighbor list of `vertex1`.

The `print()` method is used to print the graph, showing the vertices and their corresponding neighbors.

In the example usage, we create both a directed and an undirected graph. We add vertices (A, B, C, D) and connect them with edges. Finally, we print the graphs to visualize their structures.

Directed graphs represent a one-way relationship between vertices, while undirected graphs represent

a two-way relationship. They are useful in various scenarios, including representing relationships, network topology, pathfinding algorithms, and social network analysis.
