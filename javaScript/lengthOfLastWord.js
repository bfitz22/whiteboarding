var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ").reverse();
    if (words.length < 1) {return 0}
    return words[0].length
};