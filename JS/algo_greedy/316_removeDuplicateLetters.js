/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    const lastIndex = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i].charCodeAt() - 'a'.charCodeAt()] = i
    }

    const stack = [], exists = new Array(26).fill(false)
    for (let i = 0; i < s.length; i++) {
        if (exists[s[i].charCodeAt() - 'a'.charCodeAt()]) continue

        while (stack.length && stack[stack.length - 1] > s[i]
                    && lastIndex[stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt()] > i) {
            const top = stack.pop()
            exists[top.charCodeAt() - 'a'.charCodeAt()] = false
        }
        stack.push(s[i])
        exists[s[i].charCodeAt() - 'a'.charCodeAt()] = true
    }

    return stack.join("")
};
