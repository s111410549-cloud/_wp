// 1. 定義 cleanData 函數
function cleanData(arr) {
    // 移除陣列最後一個元素 (破壞性修改)
    arr.pop();
    
    // 在陣列最前面加上 "Start" (破壞性修改)
    arr.unshift("Start");
}

// 2. 驗證步驟
let myData = [1, 2, 3];

console.log("執行前:", myData); // [1, 2, 3]

// 3. 執行函數
cleanData(myData);

// 4. 觀察結果
console.log("執行後:", myData); // ["Start", 1, 2]