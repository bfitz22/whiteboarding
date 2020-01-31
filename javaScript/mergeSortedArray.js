var merge = function(nums1, m, nums2, n) {
    let current = n + m - 1
    let left = m - 1
    let right = n - 1
    
    while (left >= 0 && right >= 0) {
        if (nums1[left] >= nums2[right]) {
            nums1[current] = nums1[left]
            left --
        } else {
            nums1[current] = nums2[right]
            right --
        }
        current --
    }
    
    while (left >= 0) {nums1[current] = nums1[left]; left --; current --;}
    
    while (right >= 0) {nums1[current] = nums2[right]; right --; current --;}
    
    return nums1
};