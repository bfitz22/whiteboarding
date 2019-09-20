var mergeTwoLists = function(l1, l2) {
    let head = null;
    let prev_node;
    let curr_node1 = l1;
    let curr_node2 = l2;
 
    if (l1 === null) return l2;
    if (l2 === null) return l1;
 
    while (curr_node1 != null && curr_node2 != null) {
        if (curr_node1.val <= curr_node2.val) {
            if(curr_node1 === l1 && head === null) head = l1;
            prev_node = curr_node1;
 
            prev_node.next = curr_node1 <= curr_node2 ? curr_node1 : curr_node2;
            curr_node1 = curr_node1.next;
        } else {
            if(curr_node2 === l2 && head === null) head = l2;
            prev_node = curr_node2;
 
            prev_node.next = curr_node1 <= curr_node2 ? curr_node1 : curr_node2;
            curr_node2 = curr_node2.next;
        }
    }
    return head;
 };