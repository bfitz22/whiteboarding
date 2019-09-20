def is_valid(s)
    return true if s.length == 0 
    opening = "([{"
    closing = ")]}"
    required = []
    return false if s.length == 1 || !opening.include?(s[0])
    i = 0
    
    while i < s.length
        if opening.include?(s[i])
            required.unshift(opening.index(s[i]))
            i += 1
        elsif closing.index(s[i]) == required[0]
            required.shift
            i +=1
        else
            return false
        end
    end
    
     if required.length > 0
         return false
     else
         return true
     end
end

# puts is_valid("((()(())))")
