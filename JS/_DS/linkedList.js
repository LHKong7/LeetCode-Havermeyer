// https://daveceddia.com/linked-lists-javascript/
// https://ryanpeden.com/how-do-javascript-arrays-work-under-the-hood/

function makeNode(value) {
    return {
      value: value,
      next: null
    }
}

class LList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = makeNode(value);
    
        // Is it currently empty?
        if(!this.tail) {
          // Head and tail are one and the same
          this.head = this.tail = node;
          return node;
        }
    
        // If it's not empty, tack this on the end,
        // and update `tail` to point at this new node
        this.tail.next = node;
        this.tail = node;
    
        // Return the node we added
        return node;
    }

    print() {
        let current = this.head;
        while(current) {
          console.log(current.value);
          current = current.next;
        }
    }

    prepend(value) {
        let node = makeNode(value);
    
        // Is it currently empty?
        if(!this.head) {
          // gee this looks familiar
          this.head = this.tail = node;
          return node;
        }
    
        // If it's not empty, this new value
        // will become the `head`, and it will
        // need to point at the old head
        node.next = this.head;
        this.head = node;
    
        // Return the node we added
        return node;
    }
}


