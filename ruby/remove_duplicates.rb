def remove_duplicates(nums)
    nums.each_with_index do |n, i|
        if n == nums[i+1]
            nums[i] = ""
        end
    end
    nums = nums.select { |n| n != "" }
    return nums.length
end

puts remove_duplicates([1, 1, 1, 2, 2, 3, 3])