import Tree from "./tree.js";
import { prettyPrint } from "./tree.js";


let numbers = [1,9,4,7,2,19,12,11,17,10,17];

const myTree = new Tree(numbers);

prettyPrint(myTree.root);

myTree.insert(15);

prettyPrint(myTree.find(4));

myTree.levelOrderForEach(node => {
    console.log(node.data);
});

console.log("Depth of 10:", myTree.depth(17));
console.log("Depth of 1:", myTree.depth(1));

console.log("Height of 9:", myTree.height(9));
console.log("Height of 15:", myTree.height(4));
