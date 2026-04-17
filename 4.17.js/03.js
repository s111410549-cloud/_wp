// 1. 定義原始價格陣列
const prices = [100, 200, 300, 400];

// 2. 使用 map 結合單行箭頭函數
// 打 8 折等於乘以 0.8
const discountedPrices = prices.map(price => price * 0.8);

// 3. 輸出結果
console.log(discountedPrices); // [80, 160, 240, 320]