var deleteDuplicates = function(head) {
    let curr = head
    if (curr) {
        while (curr.next) {
            if (curr.val === curr.next.val) {
                curr.next = curr.next.next
            } else {
                curr = curr.next 
            }
        }
    }
      return head
  };