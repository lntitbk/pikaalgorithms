var addTwoNumbers = function(l1, l2) {
    var current = l3 = new ListNode();
    var n = 0;
    while(l1 != null || l2 != null || n != 0) {
        var sum = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum += n;
        var nb = sum % 10;
        n = Math.floor(sum/10);
        current.next = new ListNode(nb);
        current = current.next;
    }
    l3 = l3.next;
    return l3;
};