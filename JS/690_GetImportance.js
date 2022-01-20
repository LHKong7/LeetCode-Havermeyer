/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    let myMap = new Map();
    for (const e of employees) {
        myMap.set(e.id, e);
    }

    let res = 0;
    if (employees === null) return 0;
    const myQueue = [id];

    while (myQueue.length !== 0) {
        let curEmpID = myQueue.shift();
        let tempEmp = myMap.get(curEmpID);
        res += tempEmp.importance;
        const subOrds = tempEmp.subordinates;

        for (const id of subOrds) {
            myQueue.push(id);
        }
    }

    return res;
};