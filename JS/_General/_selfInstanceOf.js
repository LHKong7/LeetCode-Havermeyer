let myArr = [];
console.log("instanceOf myarr", myArr instanceof Array);

function new_instanceOf(leftVal, rightVal) {
    let rightProto = rightVal.prototype; // get the prototype of right
    let leftVaule = leftVal.__proto__; // get the __proto__ from left

    while (true) {
        if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}

console.log(new_instanceOf(myArr, Array));
