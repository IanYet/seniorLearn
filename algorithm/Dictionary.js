class Dictionary {
    constructor() {
        this.items = {}
        this.length = 0
    }
    set(key, value) {
        this.items[key] = value
        return this
    }
    delete(key) {
        delete this.items[key]
        return this
    }
    has(key) {
        return this.items.hasOwnProperty(key)
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined
    }
    clear() {
        this.items = {}
        this.length = 0
        return this
    }
    size() {
        return this.length
    }
    keys() {
        return Object.keys(this.items)
    }
    values() {
        return Object.values(this.items)
    }
    print() {
        console.log(this.items);
    }
}
