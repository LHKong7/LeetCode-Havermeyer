async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * promise2
 * async1 end
 * setTimeout
 */

/*
 这里需要先简单地说一些 event loop 的概念。
    Javascript是单线程的，所有的同步任务都会在主线程中执行。
    主线程之外，还有一个任务队列。每当一个异步任务有结果了，就往任务队列里塞一个事件。
    当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。
    异步任务之间，会存在差异，所以它们执行的优先级也会有区别。大致分为 微任务（micro task，如：Promise、MutaionObserver等）和宏任务（macro task，如：setTimeout、setInterval、I/O等）。同一次事件循环中，微任务永远在宏任务之前执行。
    主线程会不断重复上面的步骤，直到执行完所有任务。
    另外，还有 async/await 的概念。
 
 async 函数，可以理解为是Generator 函数的语法糖。
    它建立在promise之上，总是与await一起使用的。
    await会返回一个Promise 对象，或者一个表达式的值。
    其目的是为了让异步操作更优雅，能像同步一样地书写。
*/

function frameOne() {
    return new Promise(function(resolve) {
        // Change the frame
        // document.getElementById('frame-two').image.src = '';
        setTimeout(function() {
            resolve(frameTwo())
        }, 1000);
    })
}

function frameTwo() {
    return new Promise(function(resolve) {
        // Change the frame
        // document.getElementById('frame-two').image.src = '';
        setTimeout(function() {
            resolve(frameOne())
        }, 2000);
    })
}

frameOne();

function changeFrame() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000)
    })
}

async function run() {
    while (true) {
        await changeFrame()
    }
}
