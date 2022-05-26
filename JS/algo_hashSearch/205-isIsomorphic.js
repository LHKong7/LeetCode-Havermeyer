/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let s2tMap = new Map();
    let t2sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let schar = s[i];
        let tchar = t[i];
        if (s2tMap.has(schar) && s2tMap.get(schar) !== tchar) {
            return false;
        }
        if (t2sMap.has(tchar) && t2sMap.get(tchar) !== schar) {
            return false;
        }
        s2tMap.set(schar, tchar);
        t2sMap.set(tchar, schar);
    }

    return true;
};
