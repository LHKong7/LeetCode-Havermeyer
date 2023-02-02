/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let cur = 'a';
    let rules = new Map();

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== ' ' && !rules.has(key[i])) {
            rules.set(key[i], cur);
            cur = String.fromCharCode(cur.charCodeAt() + 1);
        }
    }

    let res = '';
    for (let i = 0; i < message.length; i++) {
        res += message[i] === ' ' ? ' ' : rules.get(message[i]);
    }

    return res;
};
