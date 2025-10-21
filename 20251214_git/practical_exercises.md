# 実践演習：チーム開発シミュレーション

## 概要

ハンズオン③の後に実施する、実践的なチーム開発演習です。
実際の開発現場に近いシナリオで、Gitの使い方を体験します。

---

## 演習の目的

- 実際のチーム開発フローを体験する
- 複数人での並行開発を実践する
- コンフリクト（競合）の発生と解決を学ぶ
- プルリクエストの基本を理解する

---

## 演習1：個人演習「メンバー紹介サイトにプロフィール追加」

### 対象：全員
### 所要時間：15分
### 難易度：★☆☆

### シナリオ

参加者全員が同じWebサイト（メンバー紹介サイト）に、自分のプロフィールカードを追加していきます。

HTMLとJavaScriptで作られたWebサイトで、実際のチーム開発に近い体験ができます。

### 前提条件

運営側で事前に準備：
- `community-site` というリポジトリを作成
- ベースのHTML、CSS、JavaScriptファイルを配置
  - `index.html` - メインページ
  - `css/style.css` - スタイルシート
  - `js/members.js` - メンバーデータ（ここを編集）
- 参加者をコラボレーターとして招待

### 手順

#### Step 1: リポジトリをクローン

```bash
git clone https://github.com/study-basic-hackathon/community-site.git
cd community-site
```

#### Step 2: 自分用のブランチを作成

```bash
git switch -c add-member-yourname
```

**命名ルール**: `add-member-[自分の名前]`
- 例：`add-member-yamada`

#### Step 3: JavaScriptファイルを編集

`js/members.js` を開いて、`members` 配列にあなたの情報を追加します。

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

**記入項目の説明:**
- `name`: あなたの名前（本名でもニックネームでもOK）
- `icon`: プロフィールに表示する絵文字（例: "😊", "🚀", "👨‍💻"）
- `location`: 住んでいる地域
- `experience`: プログラミング歴
- `language`: 好きな言語・技術
- `goal`: 今日の目標
- `hobbies`: 趣味（配列形式）
- `message`: 一言メッセージ

#### Step 4: ローカルで動作確認

##### 方法1: VS Codeの Live Server（推奨）

1. VS Code で `index.html` を開く
2. 右クリック → 「Open with Live Server」
3. ブラウザで自分のプロフィールカードが表示されているか確認

##### 方法2: ブラウザで直接開く

1. `index.html` をダブルクリック
2. ブラウザで開く
3. 自分のカードが表示されているか確認

#### Step 5: コミット

```bash
git add js/members.js
git commit -m "add: 山田太郎のプロフィールを追加"
```

#### Step 6: GitHubにプッシュ

```bash
git push -u origin add-member-yamada
```

#### Step 7: プルリクエストを作成

1. GitHubのリポジトリページを開く
2. 「Compare & pull request」ボタンをクリック
3. タイトル：「add: 山田太郎のプロフィールを追加」
4. 説明を記入（オプション）
   ```
   ## 変更内容
   - メンバー紹介ページに自分のプロフィールを追加しました
   
   ## 確認事項
   - [x] ローカルで表示を確認しました
   - [x] 他のメンバーの情報は変更していません
   ```
5. 「Create pull request」をクリック

**✅ これで完了！運営側でマージします**

### 完成イメージ

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

## 演習2：ペア演習「機能追加とコンフリクト解決」

### 対象：2人1組
### 所要時間：20分
### 難易度：★★☆

### シナリオ

簡単なWebサイトプロジェクトで、2人が異なる機能を同時に開発します。
意図的にコンフリクトを発生させ、解決方法を学びます。

### 前提条件

運営側で準備：
- `team-project` リポジトリ
- 基本的なHTMLファイル（`index.html`）

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

### 役割分担

- **Aさん**: ナビゲーションを追加
- **Bさん**: フッターを追加

### 手順

#### 【両者共通】Step 1: リポジトリをクローン

```bash
git clone https://github.com/study-basic/team-project.git
cd team-project
```

#### 【Aさん】Step 2: ナビゲーション機能の開発

1. ブランチ作成

```bash
git switch -c feature/add-navigation
```

2. `index.html` を編集

```html
<header>
    <h1>チームプロジェクト</h1>
    <nav>
        <ul>
            <li><a href="#home">ホーム</a></li>
            <li><a href="#about">概要</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
        </ul>
    </nav>
</header>
```

3. コミット＆プッシュ

```bash
git add index.html
git commit -m "add: ナビゲーションメニューを追加"
git push -u origin feature/add-navigation
```

4. プルリクエストを作成してマージ

#### 【Bさん】Step 3: フッター機能の開発

1. ブランチ作成

```bash
git switch -c feature/add-footer
```

2. `index.html` を編集

```html
<footer>
    <p>&copy; 2025 チームプロジェクト</p>
    <p>お問い合わせ: info@example.com</p>
</footer>
```

3. コミット

```bash
git add index.html
git commit -m "add: フッターを追加"
```

4. mainブランチの更新を取得（ここでAさんの変更が入る）

```bash
git switch main
git pull origin main
```

5. 自分のブランチにmainをマージ

```bash
git switch feature/add-footer
git merge main
```

**✅ コンフリクトなし！** Aさんとは違う場所を編集したため

6. プッシュ＆プルリクエスト

```bash
git push -u origin feature/add-footer
```

---

## 演習3：グループ演習「チーム開発シミュレーション」

### 対象：3-4人1組
### 所要時間：30分
### 難易度：★★★

### シナリオ

架空のWebアプリケーション「タスク管理アプリ」を開発します。
各メンバーが異なる機能を担当し、最終的に統合します。

### プロジェクト構成

```
task-manager/
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── docs/
    └── feature-list.md
```

### 役割分担（4人チームの例）

| 役割 | 担当 | ブランチ名 | 作業内容 |
|------|------|------------|----------|
| **リーダー** | Aさん | `main` | レビュー・マージ担当 |
| **フロントエンド** | Bさん | `feature/ui-design` | HTMLとCSSの作成 |
| **ロジック** | Cさん | `feature/task-logic` | JavaScriptでタスク追加機能 |
| **ドキュメント** | Dさん | `feature/documentation` | README、機能一覧の作成 |

### 手順

#### フェーズ1：プロジェクトセットアップ（Aさん）

1. リポジトリ作成
2. 基本的なフォルダ構造を作成
3. チームメンバーをコラボレーターに招待

#### フェーズ2：並行開発（全員）

**【Bさん：UI担当】**

```bash
# ブランチ作成
git switch -c feature/ui-design

# index.html を作成
# style.css を作成

git add .
git commit -m "add: タスク管理アプリのUI作成"
git push -u origin feature/ui-design
```

**【Cさん：ロジック担当】**

```bash
# ブランチ作成
git switch -c feature/task-logic

# app.js を作成（タスク追加機能）

git add .
git commit -m "add: タスク追加機能のロジック実装"
git push -u origin feature/task-logic
```

**【Dさん：ドキュメント担当】**

```bash
# ブランチ作成
git switch -c feature/documentation

# README.md を充実
# docs/feature-list.md を作成

git add .
git commit -m "add: プロジェクトドキュメント作成"
git push -u origin feature/documentation
```

#### フェーズ3：プルリクエストとレビュー

各メンバーがプルリクエストを作成

**Aさん（リーダー）の役割：**
1. 各プルリクエストをレビュー
2. コメントを付ける
3. 問題なければマージ

#### フェーズ4：最終統合

全員が最新のmainを取得して動作確認

```bash
git switch main
git pull origin main
```

---

## 演習4：応用演習「コンフリクト解決チャレンジ」

### 対象：2人1組
### 所要時間：15分
### 難易度：★★★

### シナリオ

意図的にコンフリクトを発生させ、解決する練習をします。

### 前提条件

`conflict-practice` リポジトリに `config.txt` がある

```txt
# アプリケーション設定

アプリ名: サンプルアプリ
バージョン: 1.0.0
作者: 未設定
```

### 手順

#### 【両者】同じファイルの同じ行を編集

**Aさん：**

```bash
git switch -c feature/update-config-a
```

`config.txt` を編集：
```txt
作者: 山田太郎
```

```bash
git add config.txt
git commit -m "update: 作者名を山田太郎に設定"
git push -u origin feature/update-config-a
```

プルリクエスト作成→マージ

**Bさん：**

```bash
git switch -c feature/update-config-b
```

`config.txt` を編集：
```txt
作者: 鈴木花子
```

```bash
git add config.txt
git commit -m "update: 作者名を鈴木花子に設定"
git push -u origin feature/update-config-b
```

プルリクエスト作成

#### 【Bさん】コンフリクト発生！

mainブランチを取り込もうとすると...

```bash
git switch main
git pull origin main
git switch feature/update-config-b
git merge main
```

**エラーメッセージ：**
```
Auto-merging config.txt
CONFLICT (content): Merge conflict in config.txt
Automatic merge failed; fix conflicts and then commit the result.
```

#### コンフリクトの解決

1. ファイルを開く

```txt
# アプリケーション設定

アプリ名: サンプルアプリ
バージョン: 1.0.0
<<<<<<< HEAD
作者: 鈴木花子
=======
作者: 山田太郎
>>>>>>> main
```

2. どちらを採用するか決める

**例：両方の名前を記載**
```txt
作者: 山田太郎、鈴木花子
```

3. コンフリクトマーカーを削除して保存

4. コミット

```bash
git add config.txt
git commit -m "resolve: 作者名のコンフリクトを解決"
git push
```

5. プルリクエストをマージ

---

## 演習5：ミニハッカソン「オリジナルページ作成」

### 対象：3-4人1組
### 所要時間：40分（時間があれば）
### 難易度：★★★

### シナリオ

チームで簡単なWebサイトを作成します。
実際のハッカソンに近い形で、企画から実装まで体験します。

### テーマ例

以下から1つ選ぶ：
1. **チーム紹介サイト**
2. **おすすめスポット紹介**
3. **好きな本・映画の紹介**
4. **学習リソース集**

### 役割分担

- **プロジェクトリーダー**：全体の進行管理
- **デザイナー**：HTML/CSS
- **開発者**：JavaScript（オプション）
- **ドキュメント担当**：README、企画書

### ワークフロー

#### 1. 企画フェーズ（5分）

- どんなサイトを作るか話し合い
- ページ構成を決める
- 役割分担を決める

#### 2. 準備フェーズ（5分）

- リポジトリ作成
- 基本構成を作成
- issue を作成（タスク管理）

#### 3. 開発フェーズ（25分）

各自がブランチを作成して開発

```bash
git switch -c feature/[機能名]
# 開発
git add .
git commit -m "実装内容"
git push -u origin feature/[機能名]
# プルリクエスト作成
```

#### 4. 統合フェーズ（5分）

- プルリクエストをマージ
- 全体の動作確認
- 簡単な発表準備

---

## 運営側の準備

### 事前準備

1. **リポジトリの作成**
   - `community-site`
   - `team-project`
   - `conflict-practice`

2. **参加者をコラボレーター招待**
   - GitHubのSettings > Collaborators

3. **テンプレートファイルの準備**
   - 各演習用の初期ファイル

### 当日の進行

1. **演習1**（16:50-17:05）
   - 個人演習
   - プルリクエストの作成まで

2. **演習2**（オプション）
   - ペアワーク
   - コンフリクト解決

3. **演習3**（オプション）
   - グループワーク
   - より実践的なチーム開発

---

## よくある質問と対処

### Q: コンフリクトが発生したらどうすればいい？

**A:** 講師がサポートします。むしろ良い学習機会です！

### Q: GitHubのコラボレーター招待が届かない

**A:** 迷惑メールフォルダを確認してください

### Q: プッシュ時に権限エラーが出る

**A:** コラボレーターに追加されているか確認

---

## 学習効果

### この演習で身につくこと

- ✅ 実際のチーム開発フロー
- ✅ プルリクエストの作成とレビュー
- ✅ コンフリクトの解決方法
- ✅ issue を使ったタスク管理
- ✅ チームでのコミュニケーション

### ハッカソンへの準備

この演習を経験することで、
実際のハッカソンに参加する際の不安が大きく軽減されます。

---

## まとめ

実践演習を通じて、以下を体験しました：

1. **個人開発** → 自分のペースで
2. **ペア開発** → コラボレーションの基礎
3. **チーム開発** → 実際のプロジェクトに近い形

**次のステップ：**
実際のハッカソンやオープンソースプロジェクトに参加してみましょう！
