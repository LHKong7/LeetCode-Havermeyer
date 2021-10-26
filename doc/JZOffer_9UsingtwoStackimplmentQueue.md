STACK: LIFO -> Last In First Out

QUEUE: FIFI -> First In First Out



Stack:

- push : This operation is responsible for inserting or pushing a new element to the stack.
- pop : This operation is responsible for removing the most recent element from the stack.

Stack has methods such as `push()`, `pop()`, `peek()`, etc, but I'd like to focus on the very basic methods, `push()` and `pop()`.

A stack is a linear data structure, which means that all elements are arranged in sequential order. It results that the push and pop operations can only happen at one end of the structure, in this case, the top of the stack.



There are some specific cases where linked lists can perform better than arrays, but when implementing stack data structures in JavaScript, always prefer arrays. The array methods that you are going to use, push and pop, will have a time complexity of **[O(1)](https://www.telerik.com/blogs/big-o-notation)**, which means that they will run efficiently and will have the best performance possible.



Queue:

- **enqueue**—This operation is responsible for inserting or pushing a new element to the queue.
- **dequeue**—This operation is responsible for removing the oldest element from the queue.

JS `Array` actually can be a queue with native methods `push()` and `shift()` (or it can be `unshift()` and `pop()` for the other way around).

