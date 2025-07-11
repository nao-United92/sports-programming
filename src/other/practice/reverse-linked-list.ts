/*
 * Problem: Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 */

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    // Your code here
    return null;
}

function reverseList(head: ListNode | null): ListNode | null {
    // Your code here
    return null;
}

// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function listToArray(head: ListNode | null): number[] {
    let arr: number[] = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// You can add test cases here to verify your solution
// For example:
// console.log(listToArray(reverseList(createList([1,2,3,4,5])))); // Expected: [5,4,3,2,1]
// console.log(listToArray(reverseList(createList([1,2]))));       // Expected: [2,1]
// console.log(listToArray(reverseList(createList([]))));          // Expected: []
