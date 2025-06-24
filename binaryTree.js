class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    // data is equal, do not insert duplicates
                    return null;
                }
            };

            return searchTree(node);
        }
    }

    
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current !== null) {
            if (data === current.data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    isPresent(data) {
        return this.find(data) !== null;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                // Case 1 : No child
                if (node.left === null && node.right === null) {
                    return null;
                }

                // Case 2 : One child
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }

                // Case 3 : Two childs
                let temp = node.right;
                while (temp.left !== null) {
                    temp = temp.left;
                }
                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;

            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }
}

const bst = new BST(); // Create a new Binary Search Tree

// Add nodes to the BST
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(18);

// --- Example: findMin ---
console.log("Minimum value:", bst.findMin()); 
// Output: 3 (the leftmost node)

// --- Example: findMax ---
console.log("Maximum value:", bst.findMax()); 
// Output: 18 (the rightmost node)

// --- Example: find(data) ---
const foundNode = bst.find(7);
console.log("Found node with value 7:", foundNode); 
// Output: Node object if found, or null

// --- Example: isPresent(data) ---
console.log("Is 12 present in the tree?", bst.isPresent(12)); 
// Output: true
console.log("Is 20 present in the tree?", bst.isPresent(20)); 
// Output: false

// --- Example: remove(data) ---
bst.remove(10); 
// Removes the root node (10), which has two children

console.log("Tree after removing 10:", JSON.stringify(bst, null, 2)); 
// Shows the updated structure of the tree
