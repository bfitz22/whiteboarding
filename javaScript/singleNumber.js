var singleNumber = function(nums) {
    let arr = []
      for (i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i])
        } else {
            let index = arr.indexOf(nums[i]);
            arr.splice(index, 1)
        }
      } 
    return arr[0]
};