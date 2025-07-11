/*
 * Problem: Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Your code here
    return null;
}

// You can add test cases here to verify your solution
// For example:
// function createList(arr: number[]): ListNode | null {
//     if (arr.length === 0) return null;
//     let head = new ListNode(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }
//     return head;
// }

// function listToArray(head: ListNode | null): number[] {
//     let arr: number[] = [];
//     let current = head;
//     while (current) {
//         arr.push(current.val);
//         current = current.next;
//     }
//     return arr;
// }

// console.log(listToArray(mergeTwoLists(createList([1,2,4]), createList([1,3,4])))); // Expected: [1,1,2,3,4,4]
// console.log(listToArray(mergeTwoLists(createList([]), createList([]))));       // Expected: []
// console.log(listToArray(mergeTwoLists(createList([]), createList([0]))));      // Expected: [0]
