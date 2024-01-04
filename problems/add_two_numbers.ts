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

// ListNodeという名前だと以下のCompile ErrorになるのでListNodeNus3という命名にしている
// Line -38: Char 7: error TS2300: Duplicate identifier 'ListNode'.
// Line 1: Char 7: error TS2300: Duplicate identifier 'ListNode'.

class ListNodeNus3 {
  val: number;
  next: ListNodeNus3 | null;
  constructor(val?: number, next?: ListNodeNus3 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addVal(
  l1: ListNodeNus3 | null,
  l2: ListNodeNus3 | null,
  isAddOne?: boolean
) {
  if (l1 === null && l2 === null && isAddOne) {
    return new ListNodeNus3(1);
  }

  if (l1 === null && l2 === null) {
    return null;
  }

  const firstVal1 = l1?.val || 0;
  const firstVal2 = l2?.val || 0;
  const firstVal = isAddOne ? firstVal1 + firstVal2 + 1 : firstVal1 + firstVal2;
  const isAdd = firstVal > 9;
  const n1 = firstVal % 10;

  return new ListNodeNus3(
    n1,
    addVal(l1?.next || null, l2?.next || null, isAdd)
  );
}

function addTwoNumbers(
  l1: ListNodeNus3 | null,
  l2: ListNodeNus3 | null
): ListNodeNus3 | null {
  const results = addVal(l1, l2);
  return results;
}

function consoleLinkedListValue(li: ListNodeNus3 | null) {
  if (!li) return;
  console.log(li.val);
  consoleLinkedListValue(li?.next || null);
}

// @ts-ignore
function main() {
  // const l1 = new ListNodeNus3(2, new ListNodeNus3(4, new ListNodeNus3(3)));
  // const l2 = new ListNodeNus3(5, new ListNodeNus3(6, new ListNodeNus3(4)));

  // const l1 = new ListNodeNus3(0);
  // const l2 = new ListNodeNus3(0);

  const l1 = new ListNodeNus3(
    9,
    new ListNodeNus3(
      9,
      new ListNodeNus3(
        9,
        new ListNodeNus3(
          9,
          new ListNodeNus3(9, new ListNodeNus3(9, new ListNodeNus3(9)))
        )
      )
    )
  );
  const l2 = new ListNodeNus3(
    9,
    new ListNodeNus3(9, new ListNodeNus3(9, new ListNodeNus3(9)))
  );

  consoleLinkedListValue(addTwoNumbers(l1, l2));
}

main();
