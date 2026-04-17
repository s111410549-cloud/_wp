// 1. 定義 myFilter 函數
// arr 是原始陣列，callback 是用來判斷條件的函數
function myFilter(arr, callback) {
    // 建立一個空陣列來存放符合條件的結果
    const result = [];
    
    // 遍歷原始陣列中的每一個元素
    for (let i = 0; i < arr.length; i++) {
        // 呼叫 callback 函數，並傳入目前的元素 arr[i]
        // 如果 callback 回傳 true，代表符合條件
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    // 回傳篩選後的新陣列
    return result;
}

// 2. 測試：篩選出大於 7 的數字
const numbers = [1, 5, 8, 12];

// 呼叫 myFilter，並傳入一個匿名函數來判斷是否 > 7
const filteredNumbers = myFilter(numbers, function(num) {
    return num > 7;
});

// 3. 輸出結果
console.log(filteredNumbers); 