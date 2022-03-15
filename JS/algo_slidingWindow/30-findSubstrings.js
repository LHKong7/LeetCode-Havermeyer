
/**
 *  * @param {string} s
 *   * @param {string[]} words
 *    * @return {number[]}
 *     */
var findSubstring = function(s, words) {
  let wordStore = new Map();
  for (let word of words) {
    if (wordStore.has(word)) {
      wordStore.set(word, wordStore.get(word) + 1);
    }
    wordStore.set(word, 0);
  }

  let res = [];
  let oneWordLen = words[0].length;
  let wordNum = words.length;
  let totalLen = oneWordLen * wordNum;
  for (let i = 0; i < s.length - totalLen + 1; i++) {
    let currSubstr = s.substring(i, i + totalLen);
    let freqMap = new Map();
    for (let j = 0; j < totalLen; j += oneWordLen) {
      let oneWord = currSubstr.substring(j, j+oneWordLen);
      if (freqMap.has(oneWord)) {
        freqMap.set(oneWord, freqMap.get(oneWord) + 1);
      }
      freqMap.set(oneWord, 0);
    }

    let equlityFlag = true;
    for (let [k, v] of freqMap) {
      if (!wordStore.has(k) || (v !== wordStore.get(k))) {
        equlityFlag = false;
      }
    }

    if (equlityFlag) res.push(i);
  }

  return res;
};

