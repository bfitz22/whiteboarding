def generate_parentheses(n)
    combinations = []
    current = []
    (n * 2).times { current << "" }
    generate_all(current, 0, combinations)
    return combinations
end

def generate_all(current, pos, result)
    if pos == current.length
        if valid(current)
            result << current.join("")
        end
    else
        current[pos] = "("
        generate_all(current, pos + 1, result)
        current[pos] = ")"
        generate_all(current, pos + 1, result)
    end
end

def valid(current) 
    balance = 0
    current.each do |char|
        if char == "("
            balance += 1
        else
            balance -= 1
        end
        return false if balance < 0
    end
    return balance == 0
end

puts generate_parentheses(1)

