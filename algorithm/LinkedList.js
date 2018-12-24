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
            this.head = null
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
        if(position === 0){
            this.head = current.next
            this.length--
            return current.element
        }
        
        let previous = this.head
        for(let index=0;index<position;index++){
            previous = current
            current = current.next
        }

        previous.next = current.next
        this.length--
        return current.element
    }
    insert(position, element){
        if (position < 0 || position >= this.length) {
            return false
        }

        const node = new Node(element)
        let current = this,head
        if(position === 0){
            node.next = current
            this.head = node
            this.length++
            return true
        }

        let previous = this.head
        for(let index=0;index<position;index++){
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
        
    }
}
