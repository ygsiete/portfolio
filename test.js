const levels = 5;

for (let i = 1; i <= 2 * levels - 1; i++) {
  let row = "";

  // 計算當前行的層數（從1到levels，再倒退）
  const curr = i <= levels ? i : 2 * levels - i;

  // 組合空白與星星
  for (let j = 1; j <= 2 * levels - 1; j++) {
    if (______) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}
