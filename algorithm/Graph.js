const Dictionary = require('./Dictionary')
const Queue = require('./Queue')
const Stack = require('./Stack')

class Graph {
    constructor() {
        this.vertices = []
        this.adjList = new Dictionary()
    }
    addVertex(v) {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }
    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
        return this
    }
    bfs(v, callback = key => console.log(key)) {
        const status = this.initStatus()
        const queue = new Queue()
        queue.enqueue(v)
        status[v] = 'in'

        while (!queue.isEmpty()) {
            const u = queue.dequeue()
            const neighbors = this.adjList
                .get(u)
                .filter(n => status[n] === 'out')
            queue.enqueue(...neighbors)
            neighbors.forEach(n => (status[n] = 'in'))
            callback(u)
        }

        return this
    }
    dfs(v, callback = key => console.log(key)) {
        const status = this.initStatus()
        const stack = new Stack()
        stack.push(v)
        status[v] = 'in'

        while (!stack.isEmpty()) {
            const u = stack.pop()
            const neighbors = this.adjList
                .get(u)
                .filter(n => status[n] === 'out')
                .reverse()
            stack.push(...neighbors)
            neighbors.forEach(n => (status[n] = 'in'))
            callback(u)
        }

        return this
    }
    initStatus() {
        const status = {}
        this.vertices.forEach(v => (status[v] = 'out'))
        return status
    }
    print() {
        this.adjList.keys().forEach(key =>
            console.log(
                `${key} -> ${this.adjList
                    .get(key)
                    .toString()
                    .replace(/,/g, ' ')}`
            )
        )
        return this
    }
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
myVertices.forEach(v => graph.addVertex(v))
graph
    .addEdge('A', 'B')
    .addEdge('A', 'C')
    .addEdge('A', 'D')
    .addEdge('B', 'E')
    .addEdge('B', 'F')
    .addEdge('E', 'I')
    .addEdge('C', 'D')
    .addEdge('C', 'G')
    .addEdge('D', 'G')
    .addEdge('D', 'H')
    .bfs('A')
    .dfs('A')
    .print()
