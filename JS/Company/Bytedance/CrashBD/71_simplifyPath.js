/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let stk = [];
    let paths = path.split('/');

    for (const name of paths) {
        if (name === '..') {
            stk.pop();
        } else if (name.length && name !== '.') {
            stk.push(name);
        }
    }

    return '/' + stk.join('/')
};
