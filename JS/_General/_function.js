function reassignFail(word) {
    // this assignment does not leak out
    word = "world"
}

let test = "hello"
reassignFail(test)
console.log(test) // prints "hello"
