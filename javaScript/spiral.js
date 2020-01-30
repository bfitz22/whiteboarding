var spiralOrder = function(matrix) {
    let final = matrix[0]
    if (matrix.length < 1) {return []}
    if (matrix.length === 1) {return final}
    let c = matrix[0].length - 1
    let r = 1
    let completedC = []
    let completedR = [0]
    let cont = true
    while (cont) {
        final.push(matrix[r][c])
        
    }
};