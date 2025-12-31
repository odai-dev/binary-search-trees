import Tree from "./tree.js";
import { prettyPrint } from "./tree.js";


const randomNumbers = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));

const myTree = new Tree(randomNumbers);

prettyPrint(myTree.root);

myTree.insert(15);

prettyPrint(myTree.find(4));

console.log("Pre-order traversal:");
myTree.preOrderForEach(node => console.log(node.data));

console.log("In-order traversal:");
myTree.inOrderForEach(node => console.log(node.data));

console.log("Post-order traversal:");
myTree.postOrderForEach(node => console.log(node.data));

console.log("Level-order traversal:");
myTree.levelOrderForEach(node => console.log(node.data));

console.log("Depth of 10:", myTree.depth(17));
console.log("Depth of 1:", myTree.depth(1));

console.log("Height of 9:", myTree.height(9));
console.log("Height of 15:", myTree.height(4));


console.log("Is balanced?", myTree.isBalanced());

myTree.insert(50);
myTree.insert(60);
myTree.insert(70);

console.log("Is balanced after skewing?", myTree.isBalanced());

console.log("\nRebalancing...");
myTree.rebalance();
prettyPrint(myTree.root);

console.log("Is balanced after rebalance?", myTree.isBalanced());
