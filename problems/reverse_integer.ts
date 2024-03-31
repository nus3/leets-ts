function reverseSolution(x: number): number {
  const minInt = -Math.pow(2, 31);
  const maxInt = -minInt - 1;

  const isNegative = x < 0;
  let reversed = 0;
  if (isNegative) {
    x = -x;
  }

  while (x > 0) {
    // 10で割ったあまりは最後の1桁になる
    const remainder = x % 10;
    // 桁数を合わせながら数字を足してく
    reversed = reversed * 10 + remainder;
    // 10で割って小数点を切り捨てにすることで、数値の桁数を減らしていく
    x = Math.floor(x / 10);
  }

  if (reversed > maxInt) {
    return 0;
  }
  return isNegative ? -reversed : reversed;
}

function reverse(x: number): number {
  const x_str = x.toString();
  const len = x_str.length;
  const x_arr = [...x_str];

  let result_str = "";

  for (let index = len; index > 0; index--) {
    result_str = result_str + x_arr[index - 1];
  }

  const reversedNumber =
    x < 0 ? -Number.parseInt(result_str) : Number.parseInt(result_str);

  const minInt = -Math.pow(2, 31);
  const maxInt = -minInt - 1;

  if (reversedNumber < minInt || reversedNumber > maxInt) {
    return 0;
  }

  return reversedNumber;
}

function main() {
  console.log(reverseSolution(123));
  // console.log(reverse(-123));
  // console.log(reverse(120));
  // console.log(reverse(1534236469));
}

main();

export {};
