class Stack extends Array {
    constructor () {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
}


