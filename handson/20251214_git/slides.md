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

# 【東京】今さら聞けない！Gitハンズオン

## プログラミング初学者向けGit基礎講座

2025年12月14日（土）
プログラミング初学者の会

---

<!-- ## 本日のアジェンダ

| 時間 | 内容 |
|------|------|
| 13:00-13:15 | **オープニング・自己紹介** |
| 13:15-13:45 | **Gitとは？基礎講義** |
| 13:45-14:30 | **環境構築・初期設定** |
| 14:30-14:45 | 休憩 ☕️ |
| 14:45-15:30 | **ハンズオン①：Git基本操作** |
| 15:30-16:15 | **ハンズオン②：GitHub連携** |
| 16:15-16:40 | **ハンズオン③：ブランチ操作** |
| 16:40-16:55 | **実践演習：チーム開発体験** |
| 16:55-17:00 | **まとめ・質疑応答** |

--- -->

<!--
_class: lead
-->

# Part 1
## オープニング

---

## 簡単なアンケート

**Gitの経験レベル**を教えてください

### Gitの経験レベルの目安

- 🔰 **レベル0**: 触ったことがない
- 🌱 **レベル1**: 聞いたことはあるけど使ったことない
- 🌿 **レベル2**: 一度試したけど挫折した
- 🌳 **レベル3**: 基本コマンドは使える

※ どのレベルでも大丈夫です！

---

## 本日のゴール

### 全員ができるようになること

1. ✅ Gitの基本コマンドを理解する
2. ✅ ローカルでコミットができる
3. ✅ GitHubにコードをプッシュできる
4. ✅ ブランチの概念を理解する

**質問は随時OK！** 🙋
遠慮なく手を挙げてください

---

<!--
_class: lead
-->

# Part 2
## Gitとは？基礎講義

---

## Gitとは？

**分散型バージョン管理システム**

### 特徴

- 🌍 **世界中で使われている**（デファクトスタンダード）
- 💻 **ローカルで動作**（ネットがなくても使える）
- 🔀 **複数人での開発に強い**
- 📈 **変更履歴を完全に記録**

### 誕生

2005年、Linus Torvalds（Linuxの生みの親）が開発

---

## Git と GitHub の違い

よくある誤解：「Git = GitHub」❌

### Git
- **ソフトウェア**
- ローカルPCで動作
- フォルダの中身の記録を取ったり、状態を瞬時に切り替えたりする

### GitHub
- **Webサイト**
- Gitを使ってソースコードをアップロード・ダウンロードすることに特化
- とは言え一応Web上でもアップしたソースコードが閲覧できる

---

## Gitの雑な基本概念

### 📦 リポジトリ（Repository）
フォルダのこと（安直にフォルダと呼ばないのがモダン）

### 📝 コミット（Commit）
巻き戻すためのセーブポイント

### 🌿 ブランチ（Branch）
皆が使う共有ファイルを操作するときに「壊して変なことになったらあかんから」
と言ってコピーを作って安心するアレ（重要）

<!-- ---

## Gitのワークフロー

```
作業ディレクトリ  →  ステージング  →  リポジトリ
（編集中）         （準備完了）      （記録済み）
                     ↓ git add       ↓ git commit
                   確定前の          履歴に
                   準備エリア        記録
```

### 3つのエリア

1. **作業ディレクトリ**: ファイルを編集する場所
2. **ステージングエリア**: コミット前の準備場所
3. **リポジトリ**: 変更が記録される場所 -->

---

## なぜGitが必要なのか？

### 個人開発でも

- ✅ 過去のバージョンに戻せる
- ✅ 変更履歴が残る
- ✅ 実験的な機能を安全に試せる

### チーム開発では・・・

---

## みんなが使ってるから必要やねん！

---

<!--
_class: lead
-->

# Part 3
## 環境構築・初期設定

---

## 環境構築の確認

### ✅ 確認すること

1. Git がインストールされているか
2. GitHubアカウントがあるか
3. テキストエディタが使えるか

**まだの方は今から一緒に進めましょう！**

---

## Git インストール確認

### Windows

PowerShellまたはコマンドプロンプトを開いて：

```powershell
git --version
```

### macOS / Linux

ターミナルを開いて：

```bash
git --version
```
---

### 表示例
```
git version 2.40.0
```

👉 バージョンが表示されればOK！

---

## Git インストール（Windowsの場合）

### まだインストールしていない方

次ページ以降を見て自分でやってください。

---

1. https://gitforwindows.org/ にアクセス
2. 「Download」をクリック
3. インストーラーを実行

ウィザードが出てくるので、いくつか注意しながら進める。

---

#### 注意1

VSCodeを使う設定にする（Vimは魔界の入り口なので**このハンズオンでは**非推奨）

![画像](./image/image2.avif)

引用：https://qiita.com/takeru-hirai/items/4fbe6593d42f9a844b1c

---

#### 注意2

ここでは2つ目の選択肢を選んで、mainを入力する。

![画像](./image/image3.avif)

引用：https://qiita.com/takeru-hirai/items/4fbe6593d42f9a844b1c

---

#### 注意3

2つ目を選択して、VSCodeで改行コードに「LF」を使うように設定する

![画像](./image/image4.avif)

引用：https://qiita.com/takeru-hirai/items/4fbe6593d42f9a844b1c

---

#### 注意4

ここでは2つチェックする

![画像](./image/image5.avif)

引用：https://qiita.com/takeru-hirai/items/4fbe6593d42f9a844b1c

---

### インストール後

PowerShellを再起動して `git --version` を実行

### 表示例
```
git version 2.40.0
```

👉 バージョンが表示されればOK！

---

## Git インストール（macOSの場合）

### 方法1: Xcode Command Line Tools（推奨）

ターミナルで：
```bash
git --version
```

👉 初めての場合、自動でインストールダイアログが表示される

### 方法2: Homebrew

```bash
brew install git
```

設定は各自でよろしく

---

## Git初期設定

### ユーザー情報の設定（必須）

```bash
git config --global user.name "あなたの名前"
git config --global user.email "your.email@example.com"
```

### 確認

```bash
git config --global user.name
git config --global user.email
```

**💡 注意：この情報は（大体はうっかりによって）世界に公開されます！**

---

## GitHubアカウント確認

### すでにアカウントをお持ちの方
- ログインできるか確認してください

### まだの方

次ページ以降を見て自分でやってください。

---

1. https://github.com/ にアクセス
2. 「Sign up」をクリック
3. 必要事項を入力
   - メールアドレス
   - パスワード
   - ユーザー名
4. **メール認証を完了させる**

---

## テキストエディタの確認

### Visual Studio Code（推奨）

- まだの方：https://code.visualstudio.com/
- すでにお持ちの方：起動できるか確認

### その他のエディタでもOK
- Sublime Text
- Atom
- Vim / Emacs

---

## 準備完了の確認

### ✅ チェックリスト

- [ ] Git がインストールされている
- [ ] `git --version` でバージョンが表示される
- [ ] GitHubにログインできる
- [ ] テキストエディタが起動する
- [ ] Git の user.name と user.email が設定済み

**全部OKの方？** 🙋

---

<!--
_class: lead
-->

# Part 4
## ハンズオンの準備①：Git基本操作

---

## このPartの目標

見て学ぶ

### 学ぶこと

- リポジトリを作成する
- ファイルをコミットする
- コミット履歴を確認する

---

## Step 1: 作業用フォルダの作成

### Windows（PowerShell）

```
mkdir git-handson
cd git-handson
```

### macOS / Linux

```
mkdir git-handson
cd git-handson
```

### 確認

```
pwd
```

---

## Step 2: Gitリポジトリの初期化

### コマンド実行

```
git init
```

### 実行結果

```
Initialized empty Git repository in 
/Users/yourname/Documents/git-handson/.git/
```

✅ これでこのフォルダがGitリポジトリになりました！

**💡 `.git` という隠しフォルダが作成されます**

---

## Step 3: 最初のファイルを作成

### VS Codeでフォルダを開く

```bash
code .
```

### `README.md` を作成

```markdown
# 私のGitハンズオンプロジェクト

これはGitの練習用リポジトリです。

## やったこと
- Gitの基本操作を学習中
```

---

## Step 4: ファイルの状態を確認

### コマンド

```bash
git status
```

### 実行結果

```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
```

**赤色**で表示される = Gitが追跡していない状態

---

## Step 5: ステージングエリアに追加

### コマンド

```bash
git add README.md
```

### 確認

```bash
git status
```

### 実行結果

```
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

**緑色**で表示される = コミット準備完了

---

## Step 6: 最初のコミット

### コマンド

```bash
git commit -m "初回コミット: READMEファイルを追加"
```

### 実行結果

```
[main (root-commit) a1b2c3d] 初回コミット: READMEファイルを追加
 1 file changed, 7 insertions(+)
 create mode 100644 README.md
```

✅ **最初のコミット完了！** 🎉

---

## Step 7: コミット履歴の確認

### コマンド

```bash
git log
```

### 実行結果

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Your Name <your.email@example.com>
Date:   Sat Dec 14 14:30:00 2025 +0900

    初回コミット: READMEファイルを追加
```

### 簡潔に表示

```bash
git log --oneline
```

---

## Step 8: ファイルを編集してコミット

### README.mdに追記

```markdown
## 学んだコマンド
- `git init` - リポジトリ初期化
- `git add` - ステージング
- `git commit` - コミット
- `git status` - 状態確認
- `git log` - 履歴確認
```

---

## 変更を確認してコミット

### 変更内容を確認

```bash
git diff
```

### ステージング＆コミット

```bash
git add README.md
git commit -m "READMEに学んだコマンドを追加"
```

### 履歴確認

```bash
git log --oneline
```

---

## ハンズオン準備①：まとめ

### 学んだコマンド

| コマンド | 説明 |
|---------|------|
| `git init` | リポジトリの初期化 |
| `git status` | ファイルの状態確認 |
| `git add <file>` | ステージングに追加 |
| `git commit -m "message"` | コミット |
| `git log` | 履歴表示 |
| `git diff` | 変更内容の確認 |

---

<!--
_class: lead
-->

# Part 5
## ハンズオン準備②：GitHub連携

---

## ハンズオン準備②の目標

見て学ぶ

### 学ぶこと

- リモートリポジトリを作成する
- ローカルの変更をGitHubにプッシュする
- GitHubから変更を取得する

---

## Step 1: GitHubでリポジトリ作成

### 手順

1. https://github.com/ にログイン
2. 右上の「+」→「New repository」
3. 設定：
   - **Repository name**: `git-handson`
   - **Description**: `Gitハンズオンの練習用`
   - **Public / Private**: どちらでもOK
   - **他のオプションはチェックなし**
4. 「Create repository」をクリック

---

## Step 2: リモートリポジトリと接続

### GitHubに表示されているコマンドをコピー

```bash
git remote add origin https://github.com/YOUR_USERNAME/git-handson.git
```

👉 `YOUR_USERNAME` を自分のユーザー名に置き換える

### 確認

```bash
git remote -v
```

**💡 `origin` はリモートリポジトリの別名**

---

## Step 3: ブランチ名の確認

### 確認

```bash
git branch
```

### mainに変更（必要な場合）

```bash
git branch -M main
```

---

## Step 4: GitHubにプッシュ

### コマンド

```bash
git push -u origin main
```

### 初回は認証が必要

- **Windows**: GitHub認証画面が表示される
- **macOS**: ユーザー名とパスワード入力

### 成功すると

```
To https://github.com/YOUR_USERNAME/git-handson.git
 * [new branch]      main -> main
```

---

## Step 5: GitHubで確認

### ブラウザで確認

1. GitHubのリポジトリページを開く
2. ファイル一覧が表示されているか確認
   - `README.md` ✅
3. コミット履歴も確認（「Commits」リンク）

🎉 **ローカルの内容がGitHubに反映されました！**

---

## Step 6: GitHubのWeb画面で編集

### 手順

1. GitHubで `README.md` をクリック
2. 右上の鉛筆アイコン（Edit）をクリック
3. 内容を追記

```markdown
## GitHubから編集

この行はGitHubのWeb画面から追加しました。
```

4. 「Commit changes」をクリック
5. コミットメッセージを入力して「Commit」

---

## Step 7: 変更をローカルに取得（pull）

### コマンド

```bash
git pull origin main
```

### 実行結果

```
remote: Enumerating objects: 5, done.
...
Updating a1b2c3d..d4e5f6g
Fast-forward
 README.md | 3 +++
 1 file changed, 3 insertions(+)
```

### 確認

```bash
cat README.md
```

👉 GitHubで追加した内容が表示される

---

## push と pull のイメージ

```
ローカル          リモート（GitHub）
   |                    |
   | -- git push -->    |  変更をアップロード
   |                    |
   | <-- git pull ---   |  変更をダウンロード
   |                    |
```

### 覚え方

- **push** = 押し出す（送信）
- **pull** = 引っ張る（受信）

---

## ハンズオン準備②：まとめ

### 学んだコマンド

| コマンド | 説明 |
|---------|------|
| `git remote add origin <url>` | リモート登録 |
| `git push -u origin main` | 初回プッシュ |
| `git push` | プッシュ |
| `git pull` | プル |

### 理解したこと

- ローカルとリモートの関係
- push / pull の概念

---

<!--
_class: lead
-->

# Part 6
## ハンズオン準備③：ブランチ操作

---

## ハンズオン準備③の目標

見て学ぶ

### 学ぶこと

- ブランチの概念を理解する
- ブランチを作成・切り替える
- ブランチをマージする

---

## ブランチとは？

### 例え話：本の執筆

- **メインストーリー**（mainブランチ）
- **パターンA**の展開を試したい（featureブランチ）
- **パターンB**も試したい（別のfeatureブランチ）

👉 並行して複数の「世界線」を進められる

---

## Step 1: 現在のブランチを確認

### コマンド

```bash
git branch
```

### 実行結果

```
* main
```

👉 `*` がついているのが現在のブランチ

---

## Step 2: 新しいブランチを作成

### コマンド

```bash
git branch branch1
```

### 確認

```bash
git branch
```

### 実行結果

```
  branch1
* main
```

✅ ブランチが作成された（まだmainにいる）

---

## Step 3: ブランチを切り替え

### コマンド

```bash
git checkout branch1
```

または

```bash
git switch branch1
```

### 確認

```bash
git branch
```

```
* branch1
  main
```

---

## ショートカット

### 作成＋切り替えを同時に

```bash
git checkout -b branch1
```

または

```bash
git switch -c branch1
```

**💡 `-c` は create の意味**

---

## Step 4: 新しいブランチで作業

### `profile.md` を作成

```markdown
# プロフィール

## 名前
山田太郎

## スキル
- Git
- GitHub
```

### コミット

```bash
git add profile.md
git commit -m "プロフィールページを追加"
```

---

## Step 5: mainブランチに戻る

### コマンド

```bash
git switch main
```

### ファイルを確認

```bash
ls
```

👉 `profile.md` が**ない**ことを確認

✅ これが正常！ブランチを切り替えるとファイルも切り替わる

---

## Step 6: ブランチをマージ

### mainブランチにいることを確認

```bash
git branch
# * main になっていることを確認
```

### マージ実行

```bash
git merge branch1
```

### 確認

```bash
ls
```

👉 `profile.md` が表示される ✅

---

## Step 7: マージ後のブランチ削除

### コマンド

```bash
git branch -d branch1
```

### 実行結果

```
Deleted branch branch1 (was e4f5g6h).
```

### 確認

```bash
git branch
```

```
* main
```

---

## Step 8: GitHubにプッシュ

### コマンド

```bash
git push
```

### GitHubで確認

`profile.md` が追加されていることを確認

---

## ハンズオン準備③：まとめ

### 学んだコマンド

| コマンド | 説明 |
|---------|------|
| `git branch` | ブランチ一覧 |
| `git branch <name>` | ブランチ作成 |
| `git switch <name>` | ブランチ切り替え |
| `git switch -c <name>` | 作成＋切り替え |
| `git merge <branch>` | マージ |
| `git branch -d <name>` | ブランチ削除 |

---

<!--
_class: lead
-->

# Part 7
## 実践演習：チーム開発体験

---

## 頑張ろう
