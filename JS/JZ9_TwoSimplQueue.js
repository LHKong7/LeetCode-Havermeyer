/**
 * @charset: UTF-8
 * @Date:
 * @Author: Linghan Kong
 * @Algoset:
 * @Memo: Giving up is not an option
 */

/******************************************************************
 *
 * Problem Description:
 *
 *
 * TestCase:
 * Output:
 * Explanation:
 * *****************************************************************/

var CQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackOut.length === 0) {
        while (this.stackIn.length !== 0) {
            this.stackOut.push(this.stackIn.pop());
        }
    }

    if (this.stackOut.length === 0) {
        return -1;
    } else {
        return this.stackOut.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


/**
 * @Idea:
 * @Solution:
 * @DataStructure:
 */

