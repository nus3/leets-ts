function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0 && nums2.length === 0) {
    return 0;
  }

  const mergedNums = nums1.concat(nums2);
  mergedNums.sort((a, b) => a - b);
  const mergedNumsLength = mergedNums.length;

  const harfIndex = Math.ceil(mergedNumsLength / 2) - 1;

  if (mergedNumsLength % 2 !== 0) {
    return mergedNums[harfIndex];
  }

  return (mergedNums[harfIndex] + mergedNums[harfIndex + 1]) / 2;
}

function main() {
  console.log(findMedianSortedArrays([1, 3], [2]));
  console.log(findMedianSortedArrays([1, 2], [3, 4]));
}

main();

export {};
