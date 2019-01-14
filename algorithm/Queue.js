class Queue {
    constructor(){
        this._item = []
    }
    enqueue(...item) {
        this._item.push(...item)
    }
    dequeue() {
        return this._item.shift()
    }
    front() {
        return this._item[0]
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
module.exports = Queue