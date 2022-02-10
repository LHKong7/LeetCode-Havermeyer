/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = []
    for (const c of s) {
        if (!stack.length || stack[stack.length - 1][0] != c) {
            stack.push([c, 1])
        } else {
            stack[stack.length - 1][1]++
            if (stack[stack.length - 1][1] == k) {
                stack.pop()
            }
        }
    }

    let res = ""
    for (const pair of stack) {
        for (let i = 0; i < pair[1]; i++) {
            res += pair[0]
        }
    }

    return res
}
