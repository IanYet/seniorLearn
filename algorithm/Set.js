class Set {
    constructor(items = {}) {
        this.items = items
        this.length = 0
    }
    has(value) {
        return this.items.hasOwnProperty(value)
    }
    add(value) {
        if(this.has(value)){
            return this
        }

        this.items[value] = value
        this.length ++
        return this
    }
    remove(value) {
        if(!this.has(value)){
            return this
        }

        delete this.items[value]
        this.length--
        return this
    }
    clear() {
        this.items = {}
        this.length = 0

        return this
    }
    size() {
        return this.length
    }
    values() {
        return Object.keys(this.items)
    }
    print() {
        console.log(this.values())
    }
    /**
     * 
     * @param {Set} set 
     */
    union(set) {
        return new Set({...this.items, ...set.items})
    }
    /**
     * 
     * @param {Set} set 
     */
    intersection(set) {
        const setValues = set.values()
        const newSet = new Set()

        setValues.forEach(val => {
            if(this.has(val)){
                newSet.add(val)
            }
        });

        return new Set(newSet)
    }
    difference(set) {
        const values = this.values()
        const newSet = new Set()

        values.forEach(val => {
            if(!set.has(val)){
                newSet.add(val)
            }
        });

        return newSet
    }
    subset(set) {
        if(set.size() > this.size()){
            return false
        }

        const values = set.values()
        values.forEach(val => {
            if(!this.has(val)){
                return false
            }
        });

        return true
    }
}

const [set1, set2] = [new Set(), new Set()]
set1.add(1).add(2).add(3)
set2.add(3).add(4).difference(set1).subset(set1)