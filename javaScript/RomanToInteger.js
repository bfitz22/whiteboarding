var romanToInt = function(s) {
    s = s.split("")
    let total = 0;
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] == "I") { s[i] = 1 };
        if (s[i] == "V") { s[i] = 5 };
        if (s[i] == "X") { s[i] = 10 };
        if (s[i] == "L") { s[i] = 50 };
        if (s[i] == "C") { s[i] = 100 };
        if (s[i] == "D") { s[i] = 500 };
        if (s[i] == "M") { s[i] = 1000 };
        if (i != s.length - 1 && s[i] < s[i+1]) {
            total -= s[i];
        } else {
            total += s[i];
        }
    }
    return total;
};

console.log(romanToInt("MCMXCIV"))