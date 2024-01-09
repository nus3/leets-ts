function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  // numrows分の空文字を要素にもつ配列を作る
  const rows = new Array(numRows).fill("");

  let currRow = -1;
  // +、-はbooleanでよかった
  let ascending = true;

  for (let i = 0; i < s.length; i++) {
    currRow += ascending ? 1 : -1;
    // mapに持たずに各々のindexにそのまま文字列結合するでよかった
    rows[currRow] += s[i];

    if (currRow === numRows - 1) {
      ascending = false;
    } else if (currRow === 0) {
      ascending = true;
    }
  }

  return rows.join("");
}
function main() {
  console.log(convert("PAYPALISHIRING", 3));
}

main();

export {};
