/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let helperStk = [];
    let i = 0;

    for (const ele of pushed) {
        helperStk.push(ele);

        while (i < popped.length && helperStk.length && helperStk[helperStk.length - 1] == popped[i]) {
            helperStk.pop();
            i++;
        }
    }

    return i === popped.length;
};
