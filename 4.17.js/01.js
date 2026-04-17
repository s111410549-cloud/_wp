// 1. 定義 mathTool 函數
// 它接收 num1, num2 兩個數字，以及一個名為 action 的函數
function mathTool(num1, num2, action) {
    // 這裡會執行傳進來的 action 函數，並把 num1 和 num2 餵給它
    return action(num1, num2);
}

// 2. 呼叫 mathTool 並傳入「相加」的匿名函數
const plusResult = mathTool(10, 5, function(a, b) {
    return a + b;
});

// 3. 呼叫 mathTool 並傳入「相減」的匿名函數
const minusResult = mathTool(10, 5, function(a, b) {
    return a - b;
});

// 印出結果，檢查是否符合範例輸出的 15, 5
console.log(plusResult);  // 15
console.log(minusResult); // 5