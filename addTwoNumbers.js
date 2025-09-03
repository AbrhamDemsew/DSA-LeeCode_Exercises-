// Definition for singly-linked list node used by LeetCode.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Correct implementation that works with ListNode inputs (what LeetCode passes).
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

// --- Helpers for local testing ---
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let cur = dummy;
    for (let v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
}

function listToArray(node) {
    const out = [];
    while (node) {
        out.push(node.val);
        node = node.next;
    }
    return out;
}

// Local test (keeps same visible output as original file)
const a = arrayToList([2, 4, 3]);
const b = arrayToList([5, 6, 4]);
console.log(listToArray(addTwoNumbers(a, b))); // Expected: [7, 0, 8]