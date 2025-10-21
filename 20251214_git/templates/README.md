# Templates - 実践演習用テンプレートファイル

## 📁 このフォルダについて

このフォルダには、実践演習「メンバー紹介サイト」で使用するWebサイトのテンプレートファイルが含まれています。

運営側がGitHubリポジトリ（`community-site`）を準備する際に使用します。

---

## 📦 含まれるファイル

```
templates/
├── README.md              # このファイル
├── README_TEMPLATE.md     # リポジトリ用README
├── MEMBER_GUIDE.md        # 参加者向けガイド
├── index.html             # メインHTML
├── css/
│   └── style.css         # スタイルシート
└── js/
    └── members.js        # メンバーデータ管理
```

---

## 🎯 使い方

### 1. リポジトリを作成

GitHubで `community-site` リポジトリを作成

### 2. ファイルをコピー

```bash
# リポジトリをクローン
git clone https://github.com/study-basic-hackathon/community-site.git
cd community-site

# テンプレートファイルをコピー
cp /path/to/templates/index.html .
cp /path/to/templates/README_TEMPLATE.md README.md
cp /path/to/templates/MEMBER_GUIDE.md .
mkdir css js
cp /path/to/templates/css/style.css css/
cp /path/to/templates/js/members.js js/

# コミット & プッシュ
git add .
git commit -m "初期セットアップ: Webサイトのベースファイルを追加"
git push origin main
```

### 3. 動作確認

`index.html` をブラウザで開いて、正しく表示されるか確認

---

## 📄 ファイルの説明

### `index.html`

メンバー紹介サイトのメインページ。

**特徴:**
- レスポンシブデザイン
- セマンティックなHTML5マークアップ
- JavaScriptで動的にメンバーカードを生成

**編集不要**: 参加者はこのファイルを編集しません

### `css/style.css`

サイトのスタイルシート。

**特徴:**
- グラデーション背景
- カードデザイン
- ホバーアニメーション
- レスポンシブ対応

**編集不要**: 参加者はこのファイルを編集しません

### `js/members.js`

メンバー情報を管理するJavaScriptファイル。

**特徴:**
- `members` 配列にメンバー情報を格納
- 動的にHTMLを生成
- アニメーション効果

**編集必要**: 参加者はこのファイルの `members` 配列に自分の情報を追加します

### `README_TEMPLATE.md`

リポジトリのREADMEとして使用するテンプレート。

**内容:**
- プロジェクト概要
- クイックスタート
- ディレクトリ構成
- トラブルシューティング

### `MEMBER_GUIDE.md`

参加者向けの詳細なガイド。

**内容:**
- ステップバイステップの手順
- JavaScriptの記入例
- 使える絵文字一覧
- よくある質問
- チェックリスト

---

## 🎨 カスタマイズ

### テーマカラーの変更

`css/style.css` の以下の部分を編集：

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

header h1 {
    color: #667eea;
}
```

### メンバーカードのレイアウト変更

`css/style.css` の `.members-grid` を編集：

```css
.members-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}
```

### サンプルメンバーの変更

`js/members.js` の `members` 配列を編集：

```javascript
const members = [
    {
        name: "あなたの名前",
        icon: "😊",
        location: "地域",
        experience: "経験",
        language: "言語",
        goal: "目標",
        hobbies: ["趣味1", "趣味2"],
        message: "メッセージ"
    }
];
```

---

## ✅ 動作確認

### ローカルで確認

1. `index.html` をブラウザで開く
2. サンプルメンバーのカードが表示されるか確認
3. レスポンシブ表示を確認（ブラウザのウィンドウサイズを変更）

### JavaScriptコンソールで確認

1. ブラウザのコンソール（F12）を開く
2. エラーが出ていないか確認
3. 「メンバー管理システム準備完了！」と表示されているか確認

---

## 🔧 トラブルシューティング

### スタイルが適用されない

- `css/style.css` のパスが正しいか確認
- ブラウザのキャッシュをクリア

### JavaScriptが動作しない

- `js/members.js` のパスが正しいか確認
- コンソールでエラーメッセージを確認
- JavaScriptの記法（カンマ、引用符）を確認

### メンバーカードが表示されない

- `members` 配列が空でないか確認
- `displayMembers()` 関数が実行されているか確認

---

## 📊 参加者の体験フロー

1. リポジトリをクローン
2. ブランチを作成
3. `js/members.js` を編集（自分の情報を追加）
4. `index.html` をブラウザで開いて確認
5. コミット & プッシュ
6. プルリクエストを作成
7. 運営側がマージ
8. 全員のプロフィールが揃った完成版を確認！

---

## 💡 教育的な意義

### このテンプレートの利点

1. **視覚的**: ブラウザで結果がすぐ見える
2. **実践的**: 実際のWeb開発に近い
3. **楽しい**: 自分のカードが表示される達成感
4. **安全**: 1つのファイルの配列に追加するだけ
5. **コンフリクトしにくい**: 配列の末尾に追加するため

### 学習効果

- ✅ GitとGitHubの基本操作
- ✅ ブランチの概念
- ✅ プルリクエストの流れ
- ✅ チーム開発のワークフロー
- ✅ HTML/CSS/JavaScriptの基礎理解

---

## 🎉 成功事例

このテンプレートを使用することで：

- 参加者全員がプルリクエストを作成できた
- 視覚的な成果物で達成感を得られた
- 交流のきっかけになった（他の人のプロフィールを見て話題に）
- セミナー後も見返せる記念になった

---

## 📝 ライセンス

このテンプレートは教育目的で自由に使用・改変できます。

---

お疲れ様でした！素晴らしい実践演習になることを願っています 🚀
