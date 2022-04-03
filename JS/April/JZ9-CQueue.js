var CQueue = function() {
    this.inStk = [];
    this.outStk = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStk.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.outStk.length) {
        if (!this.inStk.length) {
            return -1;
        }
        this.inTOout();
    }

    return this.outStk.pop();
};

CQueue.prototype.inTOout = function() {
    while (this.inStk.length) {
        this.outStk.push(this.inStk.pop());
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

