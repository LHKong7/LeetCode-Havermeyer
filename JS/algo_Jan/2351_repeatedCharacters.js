/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const seen = new Map();

    for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) return s[i];

        seen.set(s[i], i);
    }

    return '';
};

// 状态压缩
var repeatedCharacter = function(s) {
    let seen = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const x = ch.charCodeAt() - 'a'.charCodeAt();
        if ((seen & (1 << x)) !== 0) {
            return ch;
        }
        seen |= (1 << x);
    }

    return ' ';
};

