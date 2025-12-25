import Node from "./node.js";
export default class Tree {
    constructor(arr = []) {
        arr.sort((a, b) => a - b);
        arr = [...new Set(arr)];
        this.root = this.buildTree(arr)
    }

    buildTree(arr) {
        if (arr.length == 0) return null;

        let mid = Math.floor(arr.length / 2);
        const node = new Node(arr[mid]);

        node.left = this.buildTree(arr.slice(0, mid));
        node.right = this.buildTree(arr.slice(mid + 1))

        return node
    }

    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
            return;
        }

        let current = this.root;
        while (true) {
            if (value > current.data) {
                if (current.right == null) {
                    current.right = node;
                    return;
                } else {
                    current = current.right;
                }
            } else if (value < current.data) {
                if (current.left == null) {
                    current.left = node;
                    return;
                } else {
                    current= current.left;
                }
            } else {
                return;
            }
        }

    }

    find(value) {
        let current = this.root;
        while(current !== null) {
            if (value > current.data) {
                current = current.right;
            } else if (value < current.data) {
                current = current.left;
            } else {
                return current;
            }
        }
        
    }

    deleteItem(value) {
        this.root = deleteRecursive(this.root, value);
    }
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
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

const deleteRecursive = (root, value) => {
    if (root === null) return null;
    if (value < root.data) {
        root.left = deleteRecursive(root.left, value);
    } else if (value > root.data) {
        root.right = deleteRecursive(root.right, value);
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        
        let successor = root.right;
        while(successor.left !== null) {
            successor = successor.left;
        }
        root.data = successor.data;
        root.right = deleteRecursive(root.right, successor.data);
        return root;
    }
};
