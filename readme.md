# JavaScript Binary Search Tree Project

## Project Goal
A custom implementation of a **Balanced Binary Search Tree (BST)** data structure using ES6 classes. This project demonstrates advanced logic in data organization, recursive algorithms, and tree balancing techniques to ensure efficient data operations.

### **Core Features**
- **Balanced Tree Construction:** Transforms a sorted, unique array into a balanced tree by recursively picking the middle element as the root, ensuring $O(\log n)$ performance.
- **Dynamic Manipulation:** - **Insert:** Navigates the tree to place new values in the correct leaf position.
    - **Delete:** Handles complex node removal scenarios (leaf nodes, nodes with one child, and nodes with two children using the **Inorder Successor**).
- **Comprehensive Traversals:** - **Breadth-First (Level Order):** Iterative approach using a queue.
    - **Depth-First (Pre-order, In-order, Post-order):** Recursive approaches to visit nodes in specific hierarchies.
- **Tree Metrics:** Built-in functions to calculate **Height** (distance to leaf) and **Depth** (distance to root) for any given node.
- **Automatic Rebalancing:** An `isBalanced` check paired with a `rebalance` method that resets the tree structure if it becomes skewed.



## Curriculum Reference
This project was completed as part of **The Odin Project's** Full Stack JavaScript curriculum.
- **Lesson:** [Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

