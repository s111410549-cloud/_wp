# 我的部落格 - 作業報告

## 專案簡介

這是一個簡單的部落格系統，使用 HTML、CSS 和 JavaScript 實現文章發布與刪除功能。

## 檔案結構

| 檔案 | 說明 |
|------|------|
| index.html | 主頁面結構 |
| style.css | 樣式美化 |
| script.js | 互動功能 |
| README.md | 專案說明文件 |

---

## 程式碼解釋

### 1. index.html

```
- <header>: 網站標題與副標題
- <form id="postForm>: 發布文章表單
  - <input id="titleInput">: 標題輸入框
  - <textarea id="contentInput">: 內容輸入框
  - <button>: 發布按鈕
- <div id="postsContainer>: 文章列表顯示區域
```

### 2. style.css

- **全局樣式**: `* { box-sizing: border-box }` 確保 padding 不影響寬度計算
- **背景**: 紫色漸變 `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **表單樣式**: 輸入框 focus 時 border 變色
- **按鈕**: hover 時上浮效果 `transform: translateY(-2px)`
- **文章卡片**: 左側紫色邊框，左下角動畫 `fadeIn` 淡入效果
- **響應式**: 螢幕宽度 < 600px 時調整字體大小

### 3. script.js

**發布功能** (第 1-33 行):
```
1. 監聽表單 submit 事件
2. e.preventDefault() 阻止表單預設提交
3. 取得標題與內容值
4. 建立新文章 DOM 元素
5. insertBefore() 將新文章插入最前面
6. 清空輸入框
```

**XSS 防護** (第 35-39 行):
```
- escapeHtml() 函數將使用者輸入轉為純文字
- 防止 JavaScript 注入攻擊
```

**刪除功能** (第 41-49 行):
```
1. deletePost(btn) 接收刪除按鈕元素
2. closest('.post-item') 找到父層文章元素
3. remove() 移除該文章
4. 若文章全部刪除，顯示「尚無文章」提示
```

---

## 功能總結

- ✅ 發布文章（標題 + 內容）
- ✅ 顯示發布時間
- ✅ 刪除文章
- ✅ 響應式設計（支援手機/電腦）
- ✅ XSS 安全防護

---

## 如何使用

1. 打開 `index.html`
2. 輸入標題和內容
3. 點擊「發布」按鈕
4. 文章會顯示在列表中
5. 可點擊「刪除」移除文章