/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1Arr = version1.split('.');
    let v2Arr = version2.split('.');

    const n1 = v1Arr.length, n2 = v2Arr.length;

    for (let i = 0; i < Math.max(n1, n2); i++) {
        let v1 = i < n1 ? parseInt(v1Arr[i]) : 0;
        let v2 = i < n2 ? parseInt(v2Arr[i]) : 0;

        if (v1 !== v2) {
            return v1 > v2 ? 1 : -1;
        }
    }

    return 0;
};
