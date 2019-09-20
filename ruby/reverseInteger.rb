def reverse(x)
    answer = ""
    initial = x.to_s
    if initial[0] == "-"
        answer = "-"
    end
    initial.reverse.each_char do |num| 
         answer += num
    end
    if (answer.to_i <= -2**31) || (answer.to_i >= 2**31 - 1) 
        return 0
    end
    return answer.to_i
end