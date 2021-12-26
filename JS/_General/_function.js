// function reassignFail(word) {
//     // this assignment does not leak out
//     word = "world"
// }

// let test = "hello"
// reassignFail(test)
// console.log(test) // prints "hello"

function test(num) {
    console.log(arguments);
}

let obj = new Object();
obj.name = 'obj';
test(obj, 2);
