// give up

function lengthOfLongestSubstring(s: string): number {
  const subStringMap = new Map();
  const strings = [...s];
  let result = 0;

  for (const [i, x] of strings.entries()) {
    if (subStringMap.has(x)) {
      const b = subStringMap.get(x);
      if (b === i - 1) {
        subStringMap.clear();
      } else {
        subStringMap.delete(x);
      }
    }
    subStringMap.set(x, i);

    if (subStringMap.size > result) {
      result = subStringMap.size;
    }
  }

  return result;
}

function main() {
  // console.log(lengthOfLongestSubstring("abcabcbb"));
  // console.log(lengthOfLongestSubstring("bbbbb"));
  // console.log(lengthOfLongestSubstring("pwwkew"));
  // console.log(lengthOfLongestSubstring("dvdf"));
  console.log(lengthOfLongestSubstring("ckilbkd"));
}

main();

export {};
