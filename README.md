# [Airframe](https://github.com/0wczar/airframe-react)


## Updating Version Notes

react-bootstrap-table2-toolkit
有錯誤

---

還存有 require 問題的檔案

- HolderTextProvider.js

## Deploy

1. 若需要將輸出放進子資料夾 (`package.json`)
  - 建置指令改為要放入的子資料夾：`BASE_PATH=/test/`（這邊為 `/test/`）
	- `"homepage": "http://localhost:9000/test",`
2. 根據需求執行 `build` 或 `build:relativepath:linux` 或 `build:relativepath:windows`
	> 如果將專案放置伺服器靜態資料夾的根部，請使用 `build`
	> 若需要放至子資料夾，請做相對應設定，並依平台執行後面兩者之一指令
3. 將 `dist` 內的檔案丟至對應資料夾

## Setup Environment

### Flow.js

- npm
	```
	npm install --save-dev flow-bin
	```
- MacOS
	```
	brew update
	brew install flow
	```

VS Code

__settings.json__ 加上

```
"javascript.validate.enable": false
```

## Something

npm install --msvs_version=2015

yarn --msvs_version=2015

## Info

此專案是根據此 commit 做後續修改

```
++++++ master branch ++++++

@unski11ed
unski11ed committed on 3 Feb

2 parents 0b72253 + 2076134 
commit 375bafe729926141acaa0af226ac61f7349f85a7 
```
