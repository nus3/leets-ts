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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (!l1 && !l2 && !carry) return null;

  const total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10 + "");
  return new ListNode(
    total % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, carry)
  );
}

function consoleLinkedListValue(li: ListNode | null) {
  if (!li) return;
  console.log(li.val);
  consoleLinkedListValue(li?.next || null);
}

// @ts-ignore
function main() {
  // const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  // const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  // const l1 = new ListNode(0);
  // const l2 = new ListNode(0);

  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

  consoleLinkedListValue(addTwoNumbers(l1, l2));
}

main();

export {};
