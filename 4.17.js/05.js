// 1. 定義 multiplier 函數
// 它接收一個參數 factor，並「回傳」一個新的箭頭函數
function multiplier(factor) {
    // 回傳的箭頭函數接收參數 n
    return (n) => n * factor;
}

// 2. 測試：產生一個「兩倍」的函數
const double = multiplier(2);
console.log(double(10)); // 輸出: 20

// 3. 測試：產生一個「三倍」的函數
const triple = multiplier(3);
console.log(triple(10)); // 輸出: 30

// 4. 也可以直接連續呼叫 (第一個括號傳 factor, 第二個傳 n)
console.log(multiplier(5)(10)); // 輸出: 50