

### Binary Search



##### 查找第一个等于目标元素的下标 （有重复的元素）

```js
const fristTargetElement = (nums, target) => {
	if (nums === null || nums.length === 0) return -1;
	let left = 0;
	let right = nums.length - 1;
	
	while (left <= right) {
		let mid = left + (right - left) + 1;
		if (target === nums[mid]) {
			if (mid === 0 || nums[mid - 1] != target) return mid;
			else right = mid - 1;
		} else if (target < nums[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	
	return -1;
}
```



###### 查找第一个大于等于 目标元素的下标

```js
const fristGETargetElement = (nums, target) => {
	if (nums === null || nums.length === 0) return -1;
	let left = 0;
	let right = nums.length - 1;
	
	while (left <= right) {
		let mid = left + (right - left) + 1;
		if (target <= nums[mid]) {
      if (mid === 0 || nums[mid] < target) return mid;
      else right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	
	return -1;
}
```



##### 查找最后一个等于目标元素的下标

```js
const lastTargetElement = (nums, target) => {
	if (nums === null || nums.length === 0) return -1;
	let left = 0;
	let right = nums.length - 1;
	
	while (left <= right) {
		let mid = left + (right - left) + 1;
		if (target === nums[mid]) {
      //////////////// HERE ///////////////
			if (mid === nums.length-1 || nums[mid + 1] != target) return mid;
			else left = mid + 1;
      /////////////////////////////////////
		} else if (target < nums[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	
	return -1;
}
```



##### 查找最后一个小于等于目标元素的下标

```js
const lastTargetElement = (nums, target) => {
	if (nums === null || nums.length === 0) return -1;
	let left = 0;
	let right = nums.length - 1;
	
	while (left <= right) {
		let mid = left + (right - left) + 1;
		if (target >= nums[mid]) {
      //////////////// HERE ///////////////
			if (mid === nums.length-1 || nums[mid + 1] != target) return mid;
			else left = mid + 1;
 		else {
			right = mid - 1;
		}
	}
	
	return -1;
}
```

