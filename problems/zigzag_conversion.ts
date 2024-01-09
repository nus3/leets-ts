function convert(s: string, numRows: number): string {
  const sMap = new Map<number, string[]>();
  const sArr = [...s];
  let currentKey = 1;
  let d: "+" | "-" = "+";

  for (let index = 0; index < sArr.length; index++) {
    const currentStr = sMap.get(currentKey);
    if (currentStr) {
      sMap.set(currentKey, [...currentStr, sArr[index]]);
    } else {
      sMap.set(currentKey, [sArr[index]]);
    }

    if (currentKey === numRows) {
      d = "-";
    }
    if (currentKey === 1) {
      d = "+";
    }

    if (d === "+") {
      currentKey++;
    }
    if (d === "-") {
      currentKey--;
    }
  }

  let result = "";
  for (const [key, value] of sMap) {
    result = result + value.join("");
  }

  return result;
}

function main() {
  console.log(convert("PAYPALISHIRING", 3));
}

main();

export {};
