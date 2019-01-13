class Node {
    constructor(key) {
        this.key = key
        this.left = {}
        this.right = {}
        this.is = true
    }
}

class BinarySearchTree {
    constructor(key) {
        this.root = key ? new Node(key) : {}
    }
    /**
     *
     * @param {*} key
     * @param {Node} parentNode
     */
    insert(key, parentNode = this.root) {
        const node = new Node(key)

        if (!parentNode.is) {
            Object.assign(parentNode, node)
            return this
        }

        if (key < parentNode.key) {
            return this.insert(key, parentNode.left)
        } else {
            return this.insert(key, parentNode.right)
        }
    }
    search(key, callback = node => console.log(node.key), node = this.root) {
        if (!node.is) {
            callback(false)
            return this
        } else if (node.key === key) {
            callback(node)
            return this
        } else if (node.key < key) {
            return this.search(key, callback, node.right)
        } else if (node.key > key) {
            return this.search(key, callback, node.left)
        }
    }
    inOrderTraverse(
        node = this.root,
        callback = node => console.log(node.key)
    ) {
        if (node.is) {
            this.inOrderTraverse(node.left)
            callback(node)
            this.inOrderTraverse(node.right)
            return this
        }
    }
    preOrderTraverse(
        node = this.root,
        callback = node => console.log(node.key)
    ) {
        if (node.is) {
            callback(node)
            this.inOrderTraverse(node.left)
            this.inOrderTraverse(node.right)
            return this
        }
    }
    postOrderTraverse(
        node = this.root,
        callback = node => console.log(node.key)
    ) {
        if (node.is) {
            this.inOrderTraverse(node.left)
            this.inOrderTraverse(node.right)
            callback(node)
            return this
        }
    }
    min(node = this.root, callback = node => console.log(node.key)) {
        if (node.left.is) {
            this.min(node.left)
        } else {
            callback(node)
        }
        return this
    }
    max(node = this.root, callback = node => console.log(node.key)) {
        if (node.right.is) {
            this.max(node.right)
        } else {
            callback(node)
        }
        return this
    }
    remove(key) {
        const removeNode = node => {
            console.log('node')
            if (!node.is) {
                console.log(false)
            } else if (!node.left.is && !node.right.is) {
                Object.assign(node, {})
            } else if (node.left.is && !node.right.is) {
                Object.assign(node, node.left)
            } else if (node.right.is && !node.left.is) {
                Object.assign(node, node.right)
            } else {
                const midKey = null
                this.max(node.left, node => {
                    console.log(`max: ${node.key}`)
                    midKey = node.key
                    Object.assign(node, {})
                })
                node.key = midKey
            }
        }

        this.search(key, removeNode)
        return this
    }
    print() {
        console.log(JSON.stringify(this))
        return this
    }
}

const bst = new BinarySearchTree(5)
bst.insert(2)
    .insert(10)
    // .inOrderTraverse()
    // .preOrderTraverse()
    // .postOrderTraverse()
    // .min()
    // .max()
    // .search(2)
    // .search(8)
    .insert(4)
    .insert(6)
    .insert(12)
    .print()
    .remove(2)
    .print()
