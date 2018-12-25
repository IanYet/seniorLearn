class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }
    append(element) {
        const node = new Node(element)

        if (!this.head) {
            this.head = node
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null
        }

        let current = this.head
        if (position === 0) {
            this.head = current.next
            this.length--
            return current.element
        }

        let previous = this.head
        for (let index = 0; index < position; index++) {
            previous = current
            current = current.next
        }

        previous.next = current.next
        this.length--
        return current.element
    }
    remove(element) {
        let current = this.head
        if (this.head.element === element) {
            this.head = current.next
            this.length--
            return current.element
        }

        let previous = this.head
        while (current) {
            if (current.element === element) {
                previous.next = current.next
                this.length--

                return current.element
            }

            previous = current
            current = current.next
        }

        return null
    }
    insert(position, element) {
        if (position < 0 || position >= this.length) {
            return false
        }

        const node = new Node(element)
        let current = this.head
        if (position === 0) {
            node.next = current
            this.head = node
            this.length++
            return true
        }

        let previous = this.head
        for (let index = 0; index < position; index++) {
            previous = current
            current = current.next
        }
        previous.next = node
        node.next = current
        this.length++
        return true
    }
    toString() {
        let string = ''
        let current = this.head

        while (current) {
            string = string + current.element + ' '
            current = current.next
        }

        return string
    }
    indexOf(element) {
        let current = this.head
        let position = 0

        while (current) {
            if (current.element === element) {
                return position
            }

            current = current.next
            position++
        }

        return -1
    }
    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    getHead() {
        return this.head.element
    }
    print() {
        console.log(
            this.toString()
                .trim()
                .replace(/ /g, ' ==> ')
        )
    }
}

const linkedList = new LinkedList()
linkedList.append(0)
linkedList.append(2)
linkedList.append(3)
linkedList.insert(1, 1)
linkedList.insert(1, 1)
linkedList.remove(3)
linkedList.removeAt(2)

linkedList.print()