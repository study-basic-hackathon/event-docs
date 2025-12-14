---
marp: true
paginate: true
header: '【東京】今さら聞けない！Gitハンズオン'
footer: 'プログラミング初学者の会 | 2025/12/14'
---

<!--
_class: lead
_paginate: false
-->

# 実践演習
## チーム開発シミュレーション

ハンズオン③の後に実施する、実践的なチーム開発演習

2025年12月14日（土）
プログラミング初学者の会

---

## 演習の目的

- ✅ 実際のチーム開発フローを体験する
- ✅ 複数人での並行開発を実践する
- ✅ コンフリクト（競合）の発生と解決を学ぶ
- ✅ プルリクエストの基本を理解する

---

<!--
_class: lead
-->

# 準備
## このリポジトリについて

---

## このリポジトリ（event-docs）について

このスライドや演習の資料は、GitHubで管理されています。

**リポジトリURL:**
https://github.com/study-basic-hackathon/event-docs

ここには今日のイベントの全ての資料が含まれています。

---

## このリポジトリをクローンする

まずは、このリポジトリをクローンしましょう。

```bash
git clone https://github.com/study-basic-hackathon/event-docs.git
cd event-docs
```

**このリポジトリで演習を行います！**

---

## event-docs のフォルダ構成

```
event-docs/
├── 20251214_git/          # 本日のイベント資料
│   ├── slides.md          # メインスライド（Marp形式）
│   ├── practical_exercises.md  # この実践演習資料
│   ├── handson_guide.md   # ハンズオンガイド
│   ├── preparation.md     # 事前準備
│   └── templates/         # 演習用テンプレート
│       ├── index.html
│       ├── css/
│       └── js/
├── slides/                # 過去のイベントスライド
├── docs/                  # 公開用HTML（GitHub Pages）
└── README.md              # リポジトリの説明
```

---

## event-docs の主要ファイル

| ファイル | 説明 |
|---------|------|
| `20251214_git/slides.md` | 本日のメインスライド |
| `20251214_git/practical_exercises.md` | この実践演習資料 |
| `20251214_git/handson_guide.md` | ハンズオン①②③のガイド |
| `20251214_git/templates/` | 演習1で使うテンプレート |
| `docs/` | GitHub Pagesで公開 |

---

## Marp でスライドをプレビュー

VS Code で Marp 拡張機能を使うと、スライドを確認できます。

1. VS Code 拡張機能「**Marp for VS Code**」をインストール
2. `slides.md` または `practical_exercises.md` を開く
3. コマンドパレット（Cmd+Shift+P）で
   「**Marp: Open Preview to the Side**」を実行

リアルタイムでプレビューが表示されます！

---

<!--
_class: lead
-->

# 演習1
## 個人演習「メンバー紹介サイトにプロフィール追加」

---

## 演習1：概要

### 対象
全員

### 所要時間
15分

### 難易度
★☆☆

---

## シナリオ

参加者全員が同じWebサイト（メンバー紹介サイト）に、自分のプロフィールカードを追加していきます。

HTMLとJavaScriptで作られたWebサイトで、実際のチーム開発に近い体験ができます。

---

## 前提条件

運営側で事前に準備：

- `event-docs` リポジトリに演習用テンプレートを配置
  - `20251214_git/templates/index.html` - メインページ
  - `20251214_git/templates/css/style.css` - スタイルシート
  - `20251214_git/templates/js/members.js` - メンバーデータ（ここを編集）
- 参加者をコラボレーターとして招待

---

## Step 1: リポジトリの確認

すでにクローン済みの場合は、最新の状態に更新します。

```bash
cd event-docs
git pull origin main
```

まだクローンしていない場合：

```bash
git clone https://github.com/study-basic-hackathon/event-docs.git
cd event-docs
```

---

## Step 2: 自分用のブランチを作成

```bash
git switch -c add-member-yourname
```

**命名ルール**: `add-member-[自分の名前]`
- 例：`add-member-yamada`

---

## Step 3: JavaScriptファイルを編集

`20251214_git/templates/js/members.js` を開いて、`members` 配列にあなたの情報を追加します。

---

## 記入例

```javascript
const members = [
    // 既存のメンバー...
    
    // ⬇️ ここにあなたの情報を追加
    {
        name: "山田太郎",
        icon: "👨‍💻",
        location: "東京都",
        experience: "1年",
        language: "Python",
        goal: "Gitを使ったチーム開発ができるようになりたい！",
        hobbies: ["プログラミング", "読書", "カフェ巡り"],
        message: "よろしくお願いします！"
    },
];
```

---

## 記入項目の説明

- `name`: あなたの名前（本名でもニックネームでもOK）
- `icon`: プロフィールに表示する絵文字（例: "😊", "🚀", "👨‍💻"）
- `location`: 住んでいる地域
- `experience`: プログラミング歴
- `language`: 好きな言語・技術
- `goal`: 今日の目標
- `hobbies`: 趣味（配列形式）
- `message`: 一言メッセージ

---

## Step 4: ローカルで動作確認

### 方法1: VS Codeの Live Server（推奨）

1. VS Code で `index.html` を開く
2. 右クリック → 「Open with Live Server」
3. ブラウザで自分のプロフィールカードが表示されているか確認

### 方法2: ブラウザで直接開く

1. `index.html` をダブルクリック
2. ブラウザで開く
3. 自分のカードが表示されているか確認

## Step 4: ローカルで動作確認

### 方法1: VS Codeの Live Server（推奨）

1. VS Code で `20251214_git/templates/index.html` を開く
2. 右クリック → 「Open with Live Server」
3. ブラウザで自分のプロフィールカードが表示されているか確認

### 方法2: ブラウザで直接開く

1. `20251214_git/templates/index.html` をダブルクリック
2. ブラウザで開く
3. 自分のカードが表示されているか確認

---

## Step 5: コミット

```bash
git add 20251214_git/templates/js/members.js
git commit -m "add: 山田太郎のプロフィールを追加"
```

---

## Step 6: GitHubにプッシュ

```bash
git push -u origin add-member-yamada
```

---

## Step 7: プルリクエストを作成

1. GitHubのリポジトリページを開く
2. 「Compare & pull request」ボタンをクリック
3. タイトル：「add: 山田太郎のプロフィールを追加」
4. 説明を記入（オプション）
5. 「Create pull request」をクリック

**✅ これで完了！運営側でマージします**

---

## プルリクエストの説明例

```markdown
## 変更内容
- メンバー紹介ページに自分のプロフィールを追加しました

## 確認事項
- [x] ローカルで表示を確認しました
- [x] 他のメンバーの情報は変更していません
```

---

## 完成イメージ

```
┌─────────────────────────────┐
│           👨‍💻              │
│         山田太郎            │
├─────────────────────────────┤
│ 📍 地域: 東京都              │
│ 💻 経験: 1年                │
│ ❤️ 好きな言語: Python       │
├─────────────────────────────┤
│ 🎯 目標:                    │
│ Gitを使ったチーム開発が      │
│ できるようになりたい！       │
├─────────────────────────────┤
│ 🎨 趣味:                    │
│ ▸ プログラミング            │
│ ▸ 読書                      │
│ ▸ カフェ巡り                │
├─────────────────────────────┤
│ "よろしくお願いします！"     │
└─────────────────────────────┘
## 完成イメージ

あなたのプロフィールカードは、こんな感じで表示されます：

```
┌─────────────────────────────┐
│           👨‍💻              │
│         山田太郎            │
├─────────────────────────────┤
│ 📍 地域: 東京都              │
│ 💻 経験: 1年                │
│ ❤️ 好きな言語: Python       │
├─────────────────────────────┤
│ 🎯 目標:                    │
│ Gitを使ったチーム開発が      │
│ できるようになりたい！       │
├─────────────────────────────┤
│ 🎨 趣味:                    │
│ ▸ プログラミング            │
│ ▸ 読書                      │
│ ▸ カフェ巡り                │
├─────────────────────────────┤
│ "よろしくお願いします！"     │
└─────────────────────────────┘
```

---

<!--
_class: lead
-->

# 演習2
## ペア演習「機能追加とコンフリクト解決」

---

## 演習2：概要

### 対象
2人1組

### 所要時間
20分

### 難易度
★★☆

---

## シナリオ

簡単なWebサイトプロジェクトで、2人が異なる機能を同時に開発します。

意図的にコンフリクトを発生させ、解決方法を学びます。

---

## 前提条件

このリポジトリ（event-docs）を使用します。

演習用のHTMLファイルは `20251214_git/templates/` にあります。

---

## ベースのHTMLファイル

`20251214_git/templates/index.html` の構造：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>チームプロジェクト</title>
</head>
<body>
    <header>
        <h1>チームプロジェクト</h1>
        <!-- ここにナビゲーションを追加してください -->
    </header>
    
    <main>
        <h2>メインコンテンツ</h2>
        <!-- ここにコンテンツを追加してください -->
    </main>
    
    <footer>
        <!-- ここにフッターを追加してください -->
    </footer>
</body>
</html>
```

---

