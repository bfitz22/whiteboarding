var isSameTree = function(p, q) {
    if (p == null && q == null) {return true}
    if (p == null) {return false}
    if (q == null) {return false}
    return p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};