function lengthOfLongestSubstring(s: string): number {
  const scanner: string[] = [];
  let longest = 0;

  for (const char of s) {
    const possibleIndex = scanner.indexOf(char);

    if (possibleIndex !== -1) {
      // scannerの中にすでに文字列があればそれを配列から削除する
      scanner.splice(0, possibleIndex + 1);
    }
    scanner.push(char);
    longest = Math.max(longest, scanner.length);
  }

  return longest;
}

function lengthOfLongestSubstring1(characters: string): number {
  let length = 0;
  let characterMap = new Map();
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < characters.length; rightIndex++) {
    const character = characters[rightIndex];

    // leftとrightのindexの値を保持しておいて、同じ文字列がきたときにrightIndexの値がleftIndexの値より大きかったらleftIndexを更新
    if (
      characterMap.has(character) &&
      characterMap.get(character) >= leftIndex
    ) {
      leftIndex = characterMap.get(character) + 1;
    }

    // rightIndex - leftIndexがsubstringになる
    length = Math.max(length, rightIndex - leftIndex + 1);

    characterMap.set(character, rightIndex);
  }

  return length;
}

function main() {
  // console.log(lengthOfLongestSubstring("abcabcbb"));
  // console.log(lengthOfLongestSubstring("bbbbb"));
  // console.log(lengthOfLongestSubstring("pwwkew"));
  // console.log(lengthOfLongestSubstring("dvdf"));
  console.log(lengthOfLongestSubstring1("ckilbkd"));
}

main();

export {};
