class Stack {
    constructor(){
        this._item = []
    }
    push(...item) {
        this._item.push(...item)
    }
    pop() {
        return this._item.pop()
    }
    peek() {
        return this._item[this._item.length - 1]
    }
    isEmpty() {
        return this._item.length === 0
    }
    clear() {
        this._item = []
    }
    size() {
        return this._item
    }
    print() {
        console.log(this._item)
    }
}
module.exports = () => new Stack()