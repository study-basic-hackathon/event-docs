## 司会用スライド（Marp）

- スライド本体: `slides/hackathon_mc.md`
- Marp で PDF / PPTX / HTML に出力できます。

### 使い方

前提: Node.js が入っていれば `npx` で動かせます。

1) PDF 出力（カスタムテーマ適用）

```
npx @marp-team/marp-cli --theme-set slides/themes/hackathon.css -o dist/hackathon_mc.pdf slides/hackathon_mc.md
```

2) PowerPoint 出力（カスタムテーマ適用）

```
npx @marp-team/marp-cli --theme-set slides/themes/hackathon.css slides/hackathon_mc.md -o dist/hackathon_mc.pptx
```

3) HTML 出力（ブラウザ表示）

```
npx @marp-team/marp-cli --theme-set slides/themes/hackathon.css slides/hackathon_mc.md -o dist/hackathon_mc.html
```

4) ライブプレビュー（編集しながら表示）

```
npx @marp-team/marp-cli --theme-set slides/themes/hackathon.css -s slides
```

### カスタマイズ箇所

- タイトルスライドの「日時 / 会場 / 司会」を実データに変更
- スケジュール表を当日のタイムテーブルに合わせて更新
- 必要に応じてロゴや背景画像を追加（例: 冒頭にカバー画像）
  - 画像を `slides/assets/` に配置
  - スライド先頭に `![bg](assets/cover.jpg)` のように記述

### テーマと補足

- カスタムテーマ: `hackathon`（紺×オレンジ）
  - テーマ定義: `slides/themes/hackathon.css`
  - フロントマターで `theme: hackathon` を指定済み
- ページ番号（paginate）はオンです。
- 司会用メモが必要な場合は、Markdown の各スライド内に `<!-- presenter: ... -->` 形式で追記してください。

### トラブルシュート

- 出力先ディレクトリが無い: 事前に `mkdir -p dist` を実行。
- テーマが見つからない: `--theme-set` はリポジトリルートからの相対で指定（例: `--theme-set ./slides/themes/hackathon.css`）。
- `npx` が途中で止まる/失敗する:
  - まず `npx @marp-team/marp-cli --version` で取得可否を確認。
  - PDF/PPTX 出力時に Chromium 取得がブロックされる環境では、ローカル Chrome を利用。
    - macOS: `export PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`
    - Windows: `set PUPPETEER_EXECUTABLE_PATH="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"`
  - その後に出力コマンドを再実行。
-
 Node/npm が見つからない: `node -v && npm -v && npx -v` で確認。未導入なら Node.js をインストール。
