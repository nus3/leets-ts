// give up
function longestPalindrome(s: string): string {
  // currentIndexに対し、その前後の文字列が等しいかどうかをチェック
  // currentIndexに対して、その前後が等しければ徐々に範囲をひろげていく
  // 等しいところまでの文字列をexpandAroundCenterで返す
  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // 奇数の場合は中央の文字列から徐々に拡大していく
    let odd = expandAroundCenter(i, i);
    // 偶数の場合は中央の隣り合った文字列から始まる
    let even = expandAroundCenter(i, i + 1);

    // 奇数と偶数の文字列の長さから長い方の文字列を返す
    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}
function main() {
  console.log(longestPalindrome("babad"));
}

main();

export {};
