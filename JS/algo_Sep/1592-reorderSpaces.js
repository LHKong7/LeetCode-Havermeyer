/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
    if (!text) return "";
    const n = text.length;
    let spaceCnt = n;
    let wordCnt = 0;
    let res = '';
    const words = [];

    text.split(' ').forEach(ele => {
        if (ele.length) words.push(ele);
    });

    for (let word of words) {
        if (word.length) spaceCnt -= word.length;
    }

    if (words.length === 1) {
        res += words[0];
        for (let i = 0; i < spaceCnt; i++) {
            res += ' ';
        }
        return res;
    }

    const perSpace = Math.floor(spaceCnt / (words.length - 1));
    const restSpace = spaceCnt % (words.length - 1);

    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            for (let j = 0; j < perSpace; j++) {
                res += ' ';
            }
        }
        res += words[i];
    }

    for (let i = 0; i < restSpace; i++) {
        res += ' ';
    }

    return res;
};
