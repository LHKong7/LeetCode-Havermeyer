/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashStore = new Map();
    
    for (const str of strs) {
        let arr = Array.from(str);
        arr.sort();
        let key = arr.toString();
        let list = hashStore.get(key) ? hashStore.get(key) : new Array();
        list.push(str);
        hashStore.set(key, list);
    }

    return Array.from(hashStore.values());
};
