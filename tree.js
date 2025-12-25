import Node

from "./node";
export default class Tree {
    constructor(arr = []){
        arr.sort((a,b) => a - b);
        arr = [...new Set(arr)];
        this.root = this.buildTree(arr)
    }
    
    buildTree(arr) {
        if (arr.length == 0) return null;
        
        let mid = Math.floor(arr.length/2);
        const node = new Node(arr[mid]);

        node.left = this.buildTree(arr.slice(0, mid));
        node.right = this.buildTree(arr.slice(mid+1))

        return node
    }
    
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
