/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let best = Number.MAX_SAFE_INTEGER;

    const updateVal = (curr) => {
        if (Math.abs(curr - target) < Math.abs(best - target)) {
            best = curr;
        }
    }

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let leftPtr = i + 1, rightPtr = n - 1;
        while (leftPtr < rightPtr) {
            let sum = nums[i] + nums[leftPtr] + nums[rightPtr];

            if (sum === target) return target;
            updateVal(sum);

            if (sum > target) {
                let _rightPtr = rightPtr - 1;
                while (leftPtr < _rightPtr && nums[_rightPtr] === nums[rightPtr]) {
                    _rightPtr -= 1;
                }
                rightPtr = _rightPtr;
            } else {
                let _leftPtr = leftPtr + 1;
                while (_leftPtr < rightPtr && nums[_leftPtr] === nums[leftPtr]) {
                    leftPtr -= 1;
                }
                leftPtr = _leftPtr;
            }
        }
    }

    return best;
};

