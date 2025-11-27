# 運営側準備マニュアル - 実践演習用リポジトリ

## 概要

実践演習「チーム開発体験」で使用するリポジトリの準備手順です。
セミナー開催の**1 週間前まで**に準備を完了してください。

---

## 準備するリポジトリ

### メインリポジトリ

**リポジトリ名**: `community-site`
**用途**: 参加者全員が自己紹介ページを追加する共通リポジトリ

---

## Step 1: リポジトリの作成

### GitHub での作業

1. https://github.com/ にログイン
2. 組織アカウント（study-basic-hackathon）でログイン
3. 「New repository」をクリック
4. 設定：
   - **Repository name**: `community-site`
   - **Description**: `Gitハンズオン実践演習用 - コミュニティメンバー紹介サイト`
   - **Public** を選択（参加者が見やすいように）
   - ✅ **Add a README file** をチェック
   - ✅ **Add .gitignore** → `None` で OK
   - **License**: MIT でも OK
5. 「Create repository」をクリック

---

## Step 2: 初期ファイルの作成

### ローカルにクローン

```bash
git clone https://github.com/study-basic-hackathon/community-site.git
cd community-site
```

### テンプレートファイルをコピー

事前に用意したテンプレートファイル（`templates/` フォルダ）をコピーします：

```bash
# templatesフォルダから必要なファイルをコピー
cp /path/to/templates/index.html .
cp /path/to/templates/README_TEMPLATE.md README.md
cp /path/to/templates/MEMBER_GUIDE.md .
cp -r /path/to/templates/css .
cp -r /path/to/templates/js .
```

または、手動でファイルを作成：

#### 1. `index.html` を作成

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>プログラミング初学者の会 - メンバー紹介</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header>
      <div class="container">
        <h1>🚀 プログラミング初学者の会</h1>
        <p class="subtitle">Gitハンズオンセミナー 2025/12/14</p>
      </div>
    </header>

    <main class="container">
      <section class="intro">
        <h2>メンバー紹介</h2>
        <p>今日のセミナーに参加してくれた仲間たちです！</p>
      </section>

      <section id="members" class="members-grid">
        <!-- ここに参加者のプロフィールカードが動的に追加されます -->
      </section>
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2025 プログラミング初学者の会 | Git Handson Seminar</p>
      </div>
    </footer>

    <script src="js/members.js"></script>
  </body>
</html>
```

#### 2. `css/style.css` を作成

スタイルシートファイルは、`templates/css/style.css` からコピーしてください。

#### 3. `js/members.js` を作成

JavaScript ファイルは、`templates/js/members.js` からコピーしてください。

**重要**: サンプルメンバーを 1 人残しておくと、参加者が参考にしやすくなります。

#### 4. `README.md` を作成

```markdown
# 🚀 プログラミング初学者の会 - メンバー紹介サイト

Git ハンズオンセミナー 2025/12/14 の実践演習用リポジトリです。

## 📖 プロジェクト概要

このプロジェクトは、Git ハンズオンセミナーの参加者が実際のチーム開発フローを体験するための Web サイトです。

参加者一人ひとりが自分のプロフィールカードを追加し、最終的に全員の紹介ページが完成します。

## 🚀 クイックスタート

詳しい手順は [MEMBER_GUIDE.md](MEMBER_GUIDE.md) をご覧ください。

### 簡単な流れ

1. リポジトリをクローン
2. ブランチを作成（`add-member-[あなたの名前]`）
3. `js/members.js` にプロフィールを追加
4. ローカルで確認（`index.html` をブラウザで開く）
5. コミット & プッシュ
6. プルリクエストを作成

## 🎯 学習目標

- ✅ リポジトリのクローン
- ✅ ブランチの作成と切り替え
- ✅ JavaScript ファイルの編集
- ✅ コミットとプッシュ
- ✅ プルリクエストの作成

## 📁 プロジェクト構成
```

community-site/
├── index.html # メインページ
├── css/
│ └── style.css # スタイルシート
├── js/
│ └── members.js # メンバーデータ(ここを編集)
├── README.md # このファイル
└── MEMBER_GUIDE.md # 詳細なガイド

```

## セミナー情報

- イベント名：【東京】今さら聞けない！Gitハンズオン
- 開催日：2025年12月14日（土）
- 主催：プログラミング初学者の会
```

#### 5. `MEMBER_GUIDE.md` を作成

参加者向けの詳細なガイドは、`templates/MEMBER_GUIDE.md` からコピーしてください。

### すべてコミット

```bash
git add .
git commit -m "初期セットアップ: Webサイトのベースファイルを追加"
git push origin main
```

---

## Step 3: 参加者をコラボレーターに招待

### 方法 1: 事前に招待（推奨）

**セミナー前日まで**に参加者の GitHub ユーザー名を収集し、招待します。

#### GitHub での操作

1. リポジトリページを開く
2. 「Settings」タブをクリック
3. 左メニューから「Collaborators」を選択
4. 「Add people」をクリック
5. 参加者の GitHub ユーザー名を入力
6. 「Add [username] to this repository」をクリック

#### 一括招待スクリプト（オプション）

```bash
# participants.txt に参加者のユーザー名を1行1人で記載
# 例:
# yamada-taro
# suzuki-hanako

while read username; do
  gh api \
    --method PUT \
    -H "Accept: application/vnd.github+json" \
    /repos/study-basic-hackathon/community-site/collaborators/$username
done < participants.txt
```

### 方法 2: 当日その場で招待

時間がかかる可能性があるため、事前招待を推奨します。

---

## Step 4: 動作確認

### 自分でテストする

1. 別のディレクトリにクローン
2. ブランチを作成
3. ファイルを追加
4. プッシュ
5. プルリクエストを作成
6. マージ

```bash
# テスト用
cd ~/Desktop
git clone https://github.com/study-basic-hackathon/community-site.git test-community
cd test-community
git switch -c add-member-test
echo "# テスト" > members/test.md
git add members/test.md
git commit -m "test: テストファイル追加"
git push -u origin add-member-test
```

GitHub でプルリクエストを作成し、マージしてテスト完了。

---

## Step 5: 当日の準備

### スライドに URL を記載

セミナー当日のスライドに以下を追記：

```markdown
## リポジトリ URL

https://github.com/study-basic-hackathon/community-site

※ この URL をコピーしてクローンしてください
```

### 短縮 URL の作成（オプション）

bit.ly などで短縮 URL を作成すると、参加者が入力しやすくなります。

例: `https://bit.ly/git-handson-2025`

---

## セミナー当日の運営

### タイムライン

#### 16:40 - 演習開始

1. スライドでリポジトリ URL を共有
2. グループ分け（3-4 人）
3. 手順を説明

#### 16:40-16:50 - 演習実施

- 各自が作業を進める
- 困っている人をサポート

#### 16:50-16:55 - プルリクエスト確認

- 提出されたプルリクエストを確認
- 問題なければマージ
- 参加者に「マージされました！」と伝える

### マージの手順

#### GitHub Web 画面で

1. 「Pull requests」タブを開く
2. 各プルリクエストを開く
3. ファイルの内容を確認
4. 「Merge pull request」をクリック
5. 「Confirm merge」をクリック
6. 「Delete branch」をクリック（任意）

#### 複数の PR を効率的に処理

```bash
# GitHub CLI を使用（事前にインストール必要）
gh pr list
gh pr merge [番号] --merge
```

---

## トラブルシューティング

### 問題 1: 参加者が招待を受け取っていない

**対処**:

- その場で招待を送る
- 迷惑メールフォルダを確認してもらう
- GitHub の Notifications を確認してもらう

### 問題 2: プッシュ時に権限エラー

**対処**:

- コラボレーターに追加されているか確認
- GitHub にログインしているか確認
- 認証情報が正しいか確認

### 問題 3: ブランチ名が被った

**対処**:

- ブランチ名を変更してもらう
  ```bash
  git branch -m add-member-yamada-2
  ```

### 問題 4: 同じファイル名で競合

**対処**:

- ファイル名を変更してもらう
  ```bash
  mv members/yamada.md members/yamada-taro.md
  ```

---

## 演習後の片付け

### セミナー終了後

1. すべてのプルリクエストをマージ
2. 参加者の成果物を確認
3. リポジトリをそのまま公開（参加者が後で見返せるように）

### 次回開催時

- 同じリポジトリを使いまわすか、新規作成するか検討
- 新規作成の場合は、前回の内容を `archive/` に移動

---

## チェックリスト

### 1 週間前まで

- [ ] リポジトリ作成
- [ ] 初期ファイル作成（README、CONTRIBUTING、example）
- [ ] 動作確認（テストプルリクエスト）

### 3 日前まで

- [ ] 参加者リスト取得
- [ ] コラボレーター招待送信

### 前日

- [ ] 招待が届いているか確認
- [ ] スライドに URL 記載
- [ ] 短縮 URL 作成（オプション）

### 当日

- [ ] リポジトリが正常にアクセスできるか確認
- [ ] 自分の PC でクローンテスト
- [ ] プルリクエストのマージ権限確認

---

## 参考情報

### GitHub Collaborators について

- **Read**: リポジトリの閲覧のみ
- **Write**: プッシュ、プルリクエスト作成が可能（今回はこれ）
- **Admin**: すべての権限

### プルリクエストのマージ戦略

- **Merge commit**: すべてのコミット履歴を保持（推奨）
- **Squash and merge**: 複数コミットを 1 つにまとめる
- **Rebase and merge**: 履歴を一直線にする

今回は **Merge commit** で問題ありません。

---

## まとめ

この準備により、参加者は以下を体験できます：

✅ 実際のチーム開発フロー
✅ プルリクエストの作成
✅ コラボレーション開発の雰囲気

**事前準備が成功の鍵です！**

お疲れ様でした 🚀
