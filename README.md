# 一對手作 CraftDate HK — MVP

一個為「香港手作約會」概念做的**需求驗證用靜態網站**。沒有後端、沒有資料庫、沒有建置工具；可以直接放上 GitHub Pages，用網址開啟。

## 功能

- 三條情侶約會路線卡片，點「查看行程」會開啟完整時間軸與預算拆解
- 16 間本地工作坊目錄，可按類別篩選
- 預約表單：選路線、日期、時段、加購項目，即時計算報價
- 送出後產生參考編號，並把意向記錄在瀏覽器的 `localStorage`
- 頁面上方會顯示「本機已記錄意向」數量，方便在同一部裝置上做簡單測試
- 響應式設計，手機與桌面都可正常瀏覽

> **重要**：這是 MVP 示範。表單資料只儲存在使用者自己的瀏覽器，不會傳到伺服器，也不會有人收到通知。正式營運需要接上後台、通知與金流。

## 檔案結構

```
craftdate-mvp/
├── index.html    頁面結構
├── styles.css    樣式
├── app.js        互動邏輯與 localStorage
├── data.js       路線、工作坊、加購項目資料
├── .nojekyll     讓 GitHub Pages 不要忽略底線開頭檔案
└── README.md     本說明
```

想改內容，優先編輯 `data.js`；想改視覺，編輯 `styles.css`。

## 本機預覽

直接雙擊 `index.html` 就可以開啟。若想用本機伺服器：

```bash
cd craftdate-mvp
python -m http.server 8000
```

然後開啟 <http://localhost:8000>。

## 放上 GitHub Pages

### 方法 A：整個 repository 就是網站（推薦）

1. 在 GitHub 建立一個新 repository，例如 `craftdate-mvp`。
2. 把這個資料夾內的**所有檔案**上傳到 repository 根目錄。
3. 進入 `Settings` → `Pages`。
4. `Build and deployment` → `Source` 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/ (root)`，按 `Save`。
6. 等一兩分鐘，網址會是：

   ```
   https://<你的使用者名稱>.github.io/craftdate-mvp/
   ```

### 方法 B：用 `docs/` 資料夾

1. 在 repository 內建立 `docs/` 資料夾，把所有檔案放進去。
2. `Settings` → `Pages` → Source 選 `main` / `/docs`。
3. 網址同樣是 `https://<使用者名稱>.github.io/<repo>/`。

### 用指令上傳

```bash
git init
git add .
git commit -m "Initial MVP"
git branch -M main
git remote add origin https://github.com/<你的使用者名稱>/craftdate-mvp.git
git push -u origin main
```

## 自訂網域（選配）

在 repository 根目錄建立一個名為 `CNAME` 的純文字檔，內容只有你的網域，例如：

```
date.example.com
```

再到網域服務商設定 CNAME 指向 `<使用者名稱>.github.io`。

## 下一步（如果要認真營運）

1. 把 `localStorage` 換成真正的后端，例如 Supabase / Firebase / Airtable。
2. 接上金流（Stripe、PayPal HK、支付寶香港）。
3. 與工作室建立固定時段庫存，避免重複預約。
4. 加入 Email / WhatsApp 自動確認。
5. 在表單加上 UTM 參數，追蹤不同渠道的轉換率。
6. 把「本機已記錄意向」改成後台真實數字，作為 MVP 驗證指標。

## 資料來源與免責聲明

工作坊名稱、價錢與路線資料整理自 PMQ、JCCAC、Klook、KKday、Playspot、U Lifestyle 等公開資訊（2026 年）。價錢與優惠可能變動，實際以工作室及平台最新公布為準。本專案僅作概念展示，與上述機構沒有合作關係。
