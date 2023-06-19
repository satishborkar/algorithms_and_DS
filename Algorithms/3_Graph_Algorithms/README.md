## Graph Algorithms

Graph algorithms are used to traverse, analyze, and manipulate graphs, which are mathematical structures composed of nodes (vertices) and edges that connect these nodes. Here are some commonly used graph algorithms:

1. Depth-First Search (DFS):

   - Traverses a graph by exploring as far as possible along each branch before backtracking. It can be used to determine connectivity, detect cycles, and perform topological sorting.

2. Breadth-First Search (BFS):

   - Traverses a graph by exploring all the neighbors of a node before moving to the next level of nodes. It can be used to find the shortest path between two nodes, determine connectivity, and perform level-order traversal.

3. Dijkstra's Algorithm:

   - Finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. It uses a priority queue to iteratively update the distances to the nodes.

4. Bellman-Ford Algorithm:

   - Finds the shortest path from a source node to all other nodes in a weighted graph, even with negative edge weights. It iteratively relaxes the edges to find the shortest paths.

5. Floyd-Warshall Algorithm:

   - Finds the shortest path between all pairs of nodes in a weighted graph. It utilizes dynamic programming to build a matrix of shortest path distances.

6. Prim's Algorithm:

   - Constructs a minimum spanning tree (MST) for a weighted undirected graph. It starts from a single node and repeatedly adds the shortest edge that connects an explored node to an unexplored node.

7. Kruskal's Algorithm:

   - Constructs a minimum spanning tree (MST) for a weighted undirected graph. It sorts the edges by weight and adds them to the MST in ascending order while avoiding cycles.

8. Topological Sorting:

   - Orders the nodes of a directed acyclic graph (DAG) such that for every directed edge from node A to node B, A comes before B in the ordering. It can be used for task scheduling and dependency resolution.

9. Strongly Connected Components (SCC):
   - Identifies groups of nodes in a directed graph where every node in a group is reachable from every other node. Tarjan's algorithm and Kosaraju's algorithm are commonly used to find strongly connected components.

These are just a few examples of graph algorithms. Graph theory offers a vast range of algorithms for various applications, including pathfinding, connectivity analysis, cycle detection, clustering, and network analysis. The choice of which algorithm to use depends on the specific problem and the characteristics of the graph at hand.
