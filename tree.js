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
                    current = current.left;
                }
            } else {
                return;
            }
        }

    }

    find(value) {
        let current = this.root;
        while (current !== null) {
            if (value > current.data) {
                current = current.right;
            } else if (value < current.data) {
                current = current.left;
            } else {
                return current;
            }
        }
        return null;

    }

    deleteItem(value) {
        this.root = deleteRecursive(this.root, value);
    }


    levelOrderForEach(callback) {
        if (!callback) {
            throw new Error('A callback is required');
        };
        if (this.root === null) return;

        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const current = queue.shift();
            callback(current);

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    preOrderForEach(callback, node = this.root) {
        if (!callback) throw new Error("A callback is required");
        if (node === null) return;

        callback(node);
        this.preOrderForEach(callback, node.left);
        this.preOrderForEach(callback, node.right);
    }

    inOrderForEach(callback, node = this.root) {
        if (!callback) throw new Error("A callback is required");
        if (node === null) return;

        this.inOrderForEach(callback, node.left);
        callback(node);
        this.inOrderForEach(callback, node.right);
    }

    postOrderForEach(callback, node = this.root) {
        if (!callback) throw new Error("A callback is required");
        if (node === null) return;

        this.postOrderForEach(callback, node.left);
        this.postOrderForEach(callback, node.right);
        callback(node);
    }


    depth(value) {
        let current = this.root;
        let depth = 0;

        while (current !== null) {
            if (value === current.data) {
                return depth;
            }

            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            depth++;
        }

        return null;
    }

    heightNode(node) {
        if (node === null) return -1;

        return 1 + Math.max(
            this.heightNode(node.left),
            this.heightNode(node.right)
        );
    }

    height(value) {
        const node = this.find(value);
        if (node === null) return null;

        return this.heightNode(node);
    }

    isBalancedNode(node) {
        if (node === null) return true;

        const leftHeight = this.heightNode(node.left);
        const rightHeight = this.heightNode(node.right);

        const balancedAtNode = Math.abs(leftHeight - rightHeight) <= 1;

        return balancedAtNode 
            && this.isBalancedNode(node.left) 
            && this.isBalancedNode(node.right);
    }

    isBalanced() {
        return this.isBalancedNode(this.root);
    }

    inOrderArray(node = this.root, arr = []) {
        if (node === null) return arr;

        this.inOrderArray(node.left, arr);
        arr.push(node.data);
        this.inOrderArray(node.right, arr);

        return arr;
    }

    rebalance() {
        const sortedArray = this.inOrderArray();
        this.root = this.buildTree(sortedArray);
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
        while (successor.left !== null) {
            successor = successor.left;
        }
        root.data = successor.data;
        root.right = deleteRecursive(root.right, successor.data);
    }

    return root; 
};

