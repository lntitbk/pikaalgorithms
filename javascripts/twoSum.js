/*
Given an array of integers nums and an integer target. return indices of the two numbers such that they add up to target.
*/
// resolve with complex O(n2)
var twoSum = function(nums, target) {
    var n = nums.length;
    if (n > 1) {
        // var sum = 0;
        for(var i = 0; i < n - 1; i++) {
            var item = target - nums[i];
            for(var j = i + 1; j < n; j++) {
                if (item == nums[j]) {
                    return [i, j];
                }
            }
        }
    }
    return [];
};

// resolve with complex O(n)
var twoSum = function(nums, target) {
    var n = nums.length;
    if (n > 1) {
        var cache = {};
        for(var i = 0; i < n; i++) {
            // var key = i;
            var v = target - nums[i];
            if (cache[v] != null && cache[v] != undefined) {
                return [cache[v], i];
            }
            cache[nums[i]] = i;
        }
    }
};
