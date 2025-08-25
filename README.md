## 司会用スライド（Marp）

- スライド本体: `slides/hackathon_mc.md`
- Marp で PDF / PPTX / HTML に出力できます。

### VS Code でのプレビュー（Marp for VS Code）

Marp の公式拡張（Marp for VS Code）で、編集しながらプレビューできます。

- 準備: VS Code 拡張機能「Marp for VS Code」（ID: `marp-team.marp-vscode`）をインストール。
- テーマ設定: `.vscode/settings.json` で `slides/themes/hackathon.css` を自動参照。
  - スライドのフロントマターで `theme: hackathon` を指定済みです。
- プレビュー: `slides/hackathon_mc.md` を開き、コマンドパレットで「Marp: Open Preview to the Side」。


### 出力（VS Code 拡張）

Marp for VS Code から直接 PDF / PPTX / HTML を書き出せます。

- 手順: コマンドパレットで「Marp: Export slide deck...」→ フォーマット（PDF / PPTX / HTML）を選択 → 保存先を指定（例: `dist/hackathon_mc.pdf`）。
