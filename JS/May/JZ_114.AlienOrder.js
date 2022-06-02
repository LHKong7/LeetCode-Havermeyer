/**
 * @param {string[]} words
 * @return {string}
 */
 var alienOrder = function(words) {
    let valid = true;
    const edges = new Map();
    const indegrees = new Map();
    const length = words.length;
    for (const word of words) {
        const wordLength = word.length;
        for (let j = 0; j < wordLength; j++) {
            const c = word[j];
            if (!edges.has(c)) {
                edges.set(c, []);
            }
        }
    }

    const addEdge = (before, after) => {
        const length1 = before.length, length2 = after.length;
        const length = Math.min(length1, length2);
        let index = 0;
        while (index < length) {
            const c1 = before[index], c2 = after[index];
            if (c1 !== c2) {
                edges.get(c1).push(c2);
                indegrees.set(c2, (indegrees.get(c2) || 0) + 1);
                break;
            }
            index++;
        }
        if (index === length && length1 > length2) {
            valid = false;
        }
    }

    for (let i = 1; i < length && valid; i++) {
        addEdge(words[i - 1], words[i]);
    }
    if (!valid) {
        return "";
    }
    const queue = [];
    const letterSet = edges.keys();
    for (const u of letterSet) {
        if (!indegrees.has(u)) {
            queue.push(u);
        }
    }
    const order = [];
    while (queue.length) {
        const u = queue.shift();
        order.push(u);
        const adjacent = edges.get(u);
        for (const v of adjacent) {
            indegrees.set(v, indegrees.get(v) - 1);
            if (indegrees.get(v) === 0) {
                queue.push(v);
            }
        }
    }
    return order.length === edges.size ? order.join('') : "";
};
