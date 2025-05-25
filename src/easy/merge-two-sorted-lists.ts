function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2; // l1が空ならl2を返す
  if (!l2) return l1; // l2が空ならl1を返す

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2); // l1の残りとl2をマージ
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next); // l2の残りとl1をマージ
    return l2;
  }
}

// SampleCore
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const dummyHead = new ListNode();
//     let current = dummyHead;

//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     if (list1) {
//         current.next = list1;
//     } else if (list2) {
//         current.next = list2;
//     }

//     return dummyHead.next;
// };
