// 分割統治法を使って、計算量少なく中央値を算出してる
// 二つの配列はソートされていることが前提

const findKthSmallList = (
  A: number[],
  aL: number,
  a: number,
  B: number[],
  bL: number,
  b: number,
  K: number
): number => {
  if (a > b) return findKthSmallList(B, bL, b, A, aL, a, K);

  if (a === 0) return B[bL + K - 1];
  if (K === 1) return Math.min(A[aL], B[bL]);

  const aK = Math.min(a, Math.ceil(K / 2)); // A+K/2 > A length
  const bK = K - aK; // aK+bK=K (K/2+K/2=K or a+bK=K)

  if (A[aL + aK - 1] < B[bL + bK - 1]) {
    // array index include 0 so index=length-1
    return findKthSmallList(A, aL + aK, a - aK, B, bL, b, K - aK);
  } else {
    return findKthSmallList(A, aL, a, B, bL + bK, b - bK, K - bK);
  }
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mn = nums1.length + nums2.length;
  const res = findKthSmallList(
    nums1,
    0,
    nums1.length,
    nums2,
    0,
    nums2.length,
    Math.ceil(mn / 2)
  );
  if (mn % 2) return res;
  return (
    (res +
      findKthSmallList(
        nums1,
        0,
        nums1.length,
        nums2,
        0,
        nums2.length,
        (mn + 2) / 2
      )) /
    2
  );
}

function main() {
  console.log(findMedianSortedArrays([1, 3], [2]));
  console.log(findMedianSortedArrays([1, 2], [3, 4]));
}

main();

export {};
