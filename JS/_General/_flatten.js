function flatten(arr) {
    // 判断参数是否是数组,检测数组元素是否是整数或者数组
    var result = [];
    if (!Array.isArray(arr)) {
        // 不是数组， 判断是否是整数
        if (arr % 1 == 0) {
            result.push(arr);
        } else {
            throw Error('The parameter contains NaN or contains not Integer!');
        }
    } else {
        // 是数组，遍历
        for (let i = 0; i < arr.length; i++) {
             result = result.concat(flatten(arr[i]));
        }
    }
    return result;
}

//利用reduce实现
/**
 * arr.reduce(callback,[initialValue]) : 累加器，可以作为高阶函数compose
    callback （执行数组中每个值的函数，包含四个参数）
        1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        2、currentValue （数组中当前被处理的元素）
        3、index （当前元素在数组中的索引）
        4、array （调用 reduce 的数组）

    initialValue （作为第一次调用 callback 的第一个参数。）
 */
function flatten(arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

//利用扩展运算符
function flatten(arr) {
    var arr;
    while (arr.some(v => Array.isArray(v))) {
        arr = [].concat(...arr);
    }
    return arr;
}

//扁平化数组(不使用循环，使用字符串)
function flatten(arr) {
    let str = JSON.stringify(arr).replace(/\[|\]/g, '');
    return JSON.parse(Array.of('[' + str + ']')[0]);
}
