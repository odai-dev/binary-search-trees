import Tree from "./tree.js";
import { prettyPrint } from "./tree.js";


let numbers = [1,9,4,7,2,19,12,11,17,10,17];

const myTree = new Tree(numbers);

prettyPrint(myTree.root);

myTree.insert(15);
prettyPrint(myTree.root);