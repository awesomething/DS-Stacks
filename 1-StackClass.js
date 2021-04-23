// Walk through the Stack class in the curriculum and understand it well. Then write a Stack 
// class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.


class Space {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}


class starTrek {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null){
            this.top = new Space(data, null)
            return this.top
        }
        const node = new Space(data, this.top)
        this.top = node
    }

    pop(data) {
        const node = this.top
        this.top = node.next
        return node.data
    }
}


const trek = new starTrek()
trek.push('Kirk')
trek.push('Spock')
trek.push('McCoy')
trek.push('Scotty')
console.log(trek)

module.export = starTrek 