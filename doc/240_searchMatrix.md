主要思路：

二分查找：

重点：



```javascript
// the array(list in js) should be sorted either desc or asce
const middle = Math.floor((high - low) / 2) + low;

/***
 when asce:
 	mid > target, the value must be in left side
  mid < target, the value must be in right side
  mid === target, return
  keep the progress until find the target idx
*/
```

For each row, using Binary Search.



