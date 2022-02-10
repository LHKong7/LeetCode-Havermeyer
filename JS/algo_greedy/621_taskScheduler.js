/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    const counter = new Array(26).fill(0);
    let maxCount = 0, countMax = 0;
    for (const task of tasks) {
        const index = task.charCodeAt() - 'A'.charCodeAt();
        counter[index]++;
        if (maxCount == counter[index]) {
            countMax++;
        } else if (maxCount < counter[index]) {
            maxCount = counter[index];
            countMax = 1;
        }
    }

    const partCount = maxCount - 1;
    const partLength = n - (countMax - 1);
    const emptySlots = partCount * partLength;
    const availableTasks = tasks.length - maxCount * countMax;
    const idle = Math.max(0, emptySlots - availableTasks);

    return tasks.length + idle;
};
