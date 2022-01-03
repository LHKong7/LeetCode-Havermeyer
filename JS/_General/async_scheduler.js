//   实现一个异步调度器函数,能够不断的将异步执行的函数加入其中,但是它最多能控制同一时间只能执行3个异步函数,并将执行结果返回.
class Scheduler {
    list = []; // 用来承载还未执行的异步
    count = 0; // 用来计数

    constructor(nums) {
        this.num = nums; //允许同时运行的异步函数的最大个数
    }

    async add(fn) {
        this.count >= this.num ? await new Promise((resolve) => this.list.push(resolve)) : "";
        this.count += 1;
        const result = await fn();
        this.count -= 1;

        if (this.list.length > 0) {
            this.list.shift();
        }

        return result;
    }
}
 
const schedule = new Scheduler(3);//最多同一时间让它执行3个异步函数
 
const asyncFacotory = (n, time) => {
 
  return () => {
 
    return new Promise((resolve) => {
 
      setTimeout(() => {
        resolve(n);
      }, time)
 
    })
 
  }
 
}
 
schedule.add(asyncFacotory(1, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(2, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(3, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(4, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.add(asyncFacotory(5, 2000)).then((n) => { console.log(`异步任务:${n}`) });
