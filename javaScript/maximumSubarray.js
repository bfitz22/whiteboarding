var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    
    let localMax = nums[0];
    let globalMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const sum = localMax + nums[i];
        if (sum < nums[i]) {
            localMax = nums[i];
        } else {
            localMax = sum;
        }
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }
    return globalMax;
    
    
};