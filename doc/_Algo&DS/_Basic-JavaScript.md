### JavaScript



1.丢弃小数部分,保留整数部分  : `parseInt(7/2) `

2.向上取整,有小数就整数部分加1 `Math.ceil(7/2)` 

3,四舍五入. `Math.round(7/2) `

4,向下取整 `Math.floor(7/2)`

都是JS内置对象

javascript除法如何取整
Math.round(x) 四舍五入，如Math.round(0.60)，结果为1；Math.round(0.49)，结果为0；
Math.floor(x) 向下舍入，如Math.floor(0.60)与Math.floor(0.49)，结果均为0；
Math.ceil(x)向上舍入，如Math.ceil(0.60)与Math.ceil(0. 49)，结果均为1。



##### Array:

Shallow Copy:

- spread sequence `let shallowCopySpread = [...array]`
- Array.slice() : `let shallowCopySlice = array.slice()`
- Array.from() : `let shallowCopyFrom = Array.from(array)`

**Static Methods**:

- `Array.isArray()`
- `Array.from()`

**Instance Methods**:

- `Array.prototype.concat` : Return a new array that is this array joined with other array(s) and/or value(s).



Used as Queue (FIFO):

- `push()` : Adds one or more elements to the end of an array, and returns the new `length` of the array.
- `shift()`: Removes the first element from an array and returns that element.



Used as Stack (LIFO) :

- `push()`
- `pop()`: Removes the last element from an array and returns that element.



[`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

[`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): Sorts the elements of an array in place and returns the array.

[`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) : Extracts a section of the calling array and returns a new array.

[`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) : Returns a new array containing the results of calling a function on every element in this array.

[`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) : Reverses the order of the elements of an array *in place*. (First becomes the last, last becomes first.)

[`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.

[`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) : Returns the found `element` in the array, if some element in the array satisfies the testing function, or `undefined` if not found.

[`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) :Determines whether the array contains a value, returning `true` or `false` as appropriate.

##### String

**Static Methods**:

[`String.fromCharCode(num1 [, ...[, numN\]])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) : Returns a string created by using the specified sequence of Unicode values.

**Instance Methods**:

[`String.prototype.charAt(index)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)Returns the character (exactly one UTF-16 code unit) at the specified `index`.

`String.prototype.includes(searchString [, position\])` : Determines whether the calling string contains `searchString`.

`String.prototype.indexOf(searchValue [, fromIndex\])`  : Returns the index within the calling [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object of the first occurrence of `searchValue`, or `-1` if not found.

`String.prototype.substring(indexStart [, indexEnd\])` : Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

`String.prototype.slice(beginIndex[, endIndex\])` : Extracts a section of a string and returns a new string.

##### Map



##### Set





