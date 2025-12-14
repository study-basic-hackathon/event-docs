# Git ハンズオン教材

## 目次

1. [ハンズオン ①：Git 基本操作](#ハンズオン①git基本操作)
2. [ハンズオン ②：GitHub 連携](#ハンズオン②github連携)
3. [ハンズオン ③：ブランチ操作](#ハンズオン③ブランチ操作)

---

## ハンズオン ①：Git 基本操作

### 学習目標

- ローカルリポジトリを作成できる
- ファイルの変更をコミットできる
- コミット履歴を確認できる

### 所要時間：45 分

---

### Step 1: 作業用ディレクトリの作成

まず、Git で管理するためのフォルダを作成します。

**Windows（PowerShell）:**

```powershell
# ドキュメントフォルダに移動
cd ~/Documents

# 新しいフォルダを作成
mkdir git-handson

# 作成したフォルダに移動
cd git-handson
```

**macOS / Linux:**

```bash
# ドキュメントフォルダに移動
cd ~/Documents

# 新しいフォルダを作成
mkdir git-handson

# 作成したフォルダに移動
cd git-handson
```

**確認方法:**

```bash
# 現在いる場所を確認
pwd
```

👉 `~/Documents/git-handson` のようなパスが表示されれば OK！

---

### Step 2: Git リポジトリの初期化

このフォルダを Git で管理できるようにします。

```bash
git init
```

**実行結果の例:**

```
Initialized empty Git repository in /Users/yourname/Documents/git-handson/.git/
```

✅ これで、このフォルダが Git リポジトリになりました！

**💡 豆知識:**

- `git init` を実行すると、`.git` という隠しフォルダが作成されます
- このフォルダに Git の管理情報が保存されています

---

### Step 3: 最初のファイルを作成

`README.md` というファイルを作成しましょう。

**方法 1: エディタを使う**

1. VS Code などのエディタで `git-handson` フォルダを開く
2. 新規ファイル `README.md` を作成
3. 以下の内容を入力

```markdown
# 私の Git ハンズオンプロジェクト

これは Git の練習用リポジトリです。

## やったこと

- Git の基本操作を学習中
```

**方法 2: コマンドで作成（簡易版）**

```bash
echo "# 私のGitハンズオンプロジェクト" > README.md
```

---

### Step 4: ファイルの状態を確認

Git から見たファイルの状態を確認します。

```bash
git status
```

**実行結果:**

```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

**解説:**

- `Untracked files`: Git がまだ追跡していないファイル
- `README.md` が赤色で表示される（未追跡状態）

---

### Step 5: ステージングエリアに追加

ファイルをコミットするための準備をします。

```bash
git add README.md
```

**再度状態を確認:**

```bash
git status
```

**実行結果:**

```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

✅ `README.md` が緑色で表示される（ステージング状態）

**💡 豆知識:**

- `git add` は「このファイルの変更をコミットに含める」という指示
- ステージングエリア = コミット待ちの場所

---

### Step 6: 最初のコミット

変更をコミット（記録）します。

```bash
git commit -m "初回コミット: READMEファイルを追加"
```

**実行結果:**

```
[main (root-commit) a1b2c3d] 初回コミット: READMEファイルを追加
 1 file changed, 7 insertions(+)
 create mode 100644 README.md
```

✅ 最初のコミットが完了しました！

**💡 コミットメッセージのポイント:**

- 何をしたか分かるように具体的に書く
- 「〇〇を追加」「〇〇を修正」のような形式が一般的

---

### Step 7: コミット履歴の確認

これまでのコミット履歴を見てみましょう。

```bash
git log
```

**実行結果:**

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Your Name <your.email@example.com>
Date:   Sat Dec 14 14:30:00 2025 +0900

    初回コミット: READMEファイルを追加
```

**見やすい形式で表示:**

```bash
git log --oneline
```

**実行結果:**

```
a1b2c3d 初回コミット: READMEファイルを追加
```

---

### Step 8: ファイルを編集して再度コミット

1. `README.md` を開いて、内容を追加

```markdown
# 私の Git ハンズオンプロジェクト

これは Git の練習用リポジトリです。

## やったこと

- Git の基本操作を学習中
- git init でリポジトリを初期化
- git add と git commit でファイルを記録

## 学んだコマンド

- `git init` - リポジトリ初期化
- `git add` - ステージング
- `git commit` - コミット
- `git status` - 状態確認
- `git log` - 履歴確認
```

2. 変更を確認

```bash
git status
```

**実行結果:**

```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   README.md
```

3. 変更内容を確認（詳細）

```bash
git diff
```

👉 追加した行が `+` で表示されます

4. ステージングとコミット

```bash
git add README.md
git commit -m "READMEに学んだコマンドのセクションを追加"
```

5. 履歴を確認

```bash
git log --oneline
```

**実行結果:**

```
b2c3d4e READMEに学んだコマンドのセクションを追加
a1b2c3d 初回コミット: READMEファイルを追加
```

✅ 2 つのコミットが記録されました！

---

### Step 9: 複数ファイルの操作

新しいファイルを追加してみましょう。

1. `hello.txt` を作成

```bash
echo "Hello, Git!" > hello.txt
```

2. もう一つファイルを作成

```bash
echo "Learning Git is fun!" > memo.txt
```

3. 状態を確認

```bash
git status
```

4. 複数ファイルを一度にステージング

```bash
# すべてのファイルを追加
git add .
```

**💡 豆知識:**

- `git add .` は現在のディレクトリ以下のすべての変更を追加
- 特定のファイルだけなら `git add ファイル名`

5. コミット

```bash
git commit -m "テキストファイル2つを追加"
```

---

### 練習問題 📝

1. `practice.md` という新しいファイルを作成してください
2. 好きな内容を書いてください
3. `git add` と `git commit` でコミットしてください
4. `git log` で履歴を確認してください

**ヒント:**

```bash
# ファイル作成（エディタでもOK）
echo "Git練習中です！" > practice.md

# ステージング
git add practice.md

# コミット
git commit -m "練習用ファイルを追加"

# 確認
git log --oneline
```

---

### まとめ：ハンズオン ①

**学んだコマンド:**

- `git init` - リポジトリの初期化
- `git status` - ファイルの状態確認
- `git add <file>` - ステージングエリアに追加
- `git add .` - すべての変更を追加
- `git commit -m "message"` - コミット
- `git log` - コミット履歴の表示
- `git log --oneline` - 履歴を簡潔に表示
- `git diff` - 変更内容の確認

**理解できたこと:**

- Git はファイルの変更履歴を記録するシステム
- ステージング → コミット の流れ
- コミットメッセージの重要性

---

## ハンズオン ②：GitHub 連携

### 学習目標

- リモートリポジトリの概念を理解する
- ローカルの変更を GitHub にプッシュできる
- GitHub から変更を取得できる

### 所要時間：45 分

---

### Step 1: GitHub でリポジトリを作成

1. [GitHub](https://github.com/) にログイン
2. 右上の「+」→「New repository」をクリック
3. 以下のように設定:
   - **Repository name**: `git-handson`
   - **Description**: `Gitハンズオンの練習用リポジトリ`
   - **Public / Private**: どちらでも OK
   - ⚠️ **他のオプションはすべてチェックなし**（README、.gitignore、ライセンスは追加しない）
4. 「Create repository」をクリック

✅ 空のリポジトリが作成されました！

---

### Step 2: リモートリポジトリと接続

GitHub の画面に表示されているコマンドを使います。

**画面に表示されている内容（例）:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/git-handson.git
git branch -M main
git push -u origin main
```

**実行するコマンド:**

1. リモートリポジトリを登録

```bash
git remote add origin https://github.com/YOUR_USERNAME/git-handson.git
```

👉 `YOUR_USERNAME` は自分の GitHub ユーザー名に置き換えてください

**確認:**

```bash
git remote -v
```

**実行結果:**

```
origin  https://github.com/YOUR_USERNAME/git-handson.git (fetch)
origin  https://github.com/YOUR_USERNAME/git-handson.git (push)
```

**💡 豆知識:**

- `origin` はリモートリポジトリの別名（慣習的にこの名前を使う）
- リモート = ネット上のリポジトリ

---

### Step 3: ブランチ名を確認・変更

GitHub の標準ブランチ名は `main` です。

```bash
# 現在のブランチ名を確認
git branch

# main に変更（古いGitでは master がデフォルトのため）
git branch -M main
```

---

### Step 4: GitHub にプッシュ

ローカルのコミットを GitHub にアップロードします。

```bash
git push -u origin main
```

**初回は認証が必要:**

**Windows の場合:**

- GitHub 認証画面が表示されるので、ログイン
- または Personal Access Token を入力

**macOS の場合:**

- ユーザー名とパスワード（Personal Access Token）を入力

**実行結果:**

```
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (9/9), 876 bytes | 876.00 KiB/s, done.
Total 9 (delta 1), reused 0 (delta 0)
To https://github.com/YOUR_USERNAME/git-handson.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ プッシュ成功！

**💡 豆知識:**

- `push` = ローカルの変更をリモートに送信
- `-u origin main` は初回のみ必要（次回からは `git push` だけで OK）

---

### Step 5: GitHub で確認

1. ブラウザで GitHub のリポジトリページを開く
2. ファイル一覧が表示されているか確認
   - `README.md`
   - `hello.txt`
   - `memo.txt`
   - `practice.md`
3. コミット履歴も確認（「Commits」リンクをクリック）

🎉 ローカルの内容が GitHub に反映されました！

---

### Step 6: GitHub の Web 画面でファイルを編集

GitHub から直接ファイルを編集してみましょう。

1. GitHub のリポジトリページで `README.md` をクリック
2. 右上の鉛筆アイコン（Edit this file）をクリック
3. 以下の内容を追加

```markdown
## GitHub から編集

この行は GitHub の Web 画面から追加しました。
```

4. ページ下部の「Commit changes」をクリック
5. コミットメッセージを入力（例：「GitHub から追記」）
6. 「Commit changes」ボタンをクリック

✅ GitHub で直接コミットが作成されました！

---

### Step 7: 変更をローカルに取得（pull）

GitHub での変更をローカルに反映します。

```bash
git pull origin main
```

**実行結果:**

```
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/YOUR_USERNAME/git-handson
 * branch            main       -> FETCH_HEAD
Updating a1b2c3d..d4e5f6g
Fast-forward
 README.md | 3 +++
 1 file changed, 3 insertions(+)
```

**確認:**

```bash
# ファイルの内容を確認
cat README.md
```

👉 GitHub で追加した内容が表示されれば OK！

**💡 豆知識:**

- `pull` = リモートの変更をローカルに取り込む
- チームで開発する時は、作業前に必ず `git pull` する習慣をつける

---

### Step 8: ローカルで編集してプッシュ

1. ローカルで `hello.txt` を編集

```bash
echo "Hello from local!" >> hello.txt
```

2. 変更を確認

```bash
git status
git diff
```

3. ステージング&コミット

```bash
git add hello.txt
git commit -m "hello.txtにメッセージを追加"
```

4. プッシュ（今回は短い形式で）

```bash
git push
```

5. GitHub のページで確認

---

### 練習問題 📝

以下の流れを実践してください：

1. ローカルで新しいファイル `today.md` を作成
2. 今日の日付と感想を書く
3. コミット
4. GitHub にプッシュ
5. GitHub の Web 画面で `today.md` を編集
6. ローカルに pull

**ヒント:**

```bash
# 1. ファイル作成
echo "# 2025/12/14 の学習記録" > today.md

# 2. コミット
git add today.md
git commit -m "今日の学習記録を追加"

# 3. プッシュ
git push

# 4. GitHubで編集後...

# 5. pull
git pull
```

---

### まとめ：ハンズオン ②

**学んだコマンド:**

- `git remote add origin <url>` - リモートリポジトリの登録
- `git remote -v` - リモートリポジトリの確認
- `git push -u origin main` - 初回プッシュ
- `git push` - プッシュ（2 回目以降）
- `git pull` - プル（リモートの変更を取得）

**理解できたこと:**

- ローカルとリモート（GitHub）の関係
- push（送信）と pull（受信）の概念
- GitHub はコードの保管場所でもあり、共有の場でもある

---

## ハンズオン ③：ブランチ操作

### 学習目標

- ブランチの概念と必要性を理解する
- ブランチを作成して切り替えられる
- ブランチをマージできる

### 所要時間：35 分

---

### ブランチとは？

**例えで理解:**

- 本の執筆で、複数のパターンを試したい時
- パターン A とパターン B を並行で書き進めたい
- ブランチはそれを可能にする「並行世界」のようなもの

**実際の開発で:**

- `main` ブランチ = 本番用の安定版
- `feature/login` ブランチ = ログイン機能の開発
- `feature/payment` ブランチ = 決済機能の開発

💡 複数人で同時に違う機能を開発できる！

---

### Step 1: 現在のブランチを確認

```bash
git branch
```

**実行結果:**

```
* main
```

👉 `*` がついているのが現在のブランチ

---

### Step 2: 新しいブランチを作成

新機能の開発用ブランチを作成します。

```bash
git branch feature/add-profile
```

**確認:**

```bash
git branch
```

**実行結果:**

```
  feature/add-profile
* main
```

✅ ブランチが作成されましたが、まだ `main` にいます

---

### Step 3: ブランチを切り替え

作成したブランチに移動します。

```bash
git checkout feature/add-profile
```

または、新しいコマンド:

```bash
git switch feature/add-profile
```

**実行結果:**

```
Switched to branch 'feature/add-profile'
```

**確認:**

```bash
git branch
```

**実行結果:**

```
* feature/add-profile
  main
```

✅ ブランチが切り替わりました！

**💡 ショートカット:**

```bash
# 作成と切り替えを同時に
git checkout -b feature/new-feature
# または
git switch -c feature/new-feature
```

---

### Step 4: 新しいブランチで作業

1. `profile.md` を作成

```markdown
# プロフィール

## 名前

山田太郎

## スキル

- Git
- GitHub
- バージョン管理

## 学習中

- ブランチ操作
```

2. コミット

```bash
git add profile.md
git commit -m "プロフィールページを追加"
```

3. 履歴を確認

```bash
git log --oneline
```

---

### Step 5: main ブランチに戻る

```bash
git checkout main
# または
git switch main
```

**ファイルを確認:**

```bash
ls
```

👉 `profile.md` がないことを確認

```bash
cat profile.md
# または
ls | grep profile.md
```

**実行結果:**

```
cat: profile.md: No such file or directory
```

✅ これが正常です！ブランチを切り替えると、ファイルも切り替わります。

---

### Step 6: main ブランチでも作業

main ブランチで別の作業をしてみます。

1. `README.md` に追記

```markdown
## ブランチについて

ブランチを使うと、並行して複数の機能を開発できます。
```

2. コミット

```bash
git add README.md
git commit -m "READMEにブランチの説明を追加"
```

**現在の状態:**

- `main` ブランチ: README.md が更新されている
- `feature/add-profile` ブランチ: profile.md がある

---

### Step 7: ブランチをマージ

`feature/add-profile` の変更を `main` に取り込みます。

**前提:** `main` ブランチにいることを確認

```bash
git branch
# * main になっていることを確認
```

**マージ実行:**

```bash
git merge feature/add-profile
```

**実行結果:**

```
Updating a1b2c3d..e4f5g6h
Fast-forward
 profile.md | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
 create mode 100644 profile.md
```

**確認:**

```bash
ls
```

👉 `profile.md` が表示されれば OK！

✅ マージ成功！

**💡 豆知識:**

- `Fast-forward` = 競合がなく、単純に進められるマージ

---

### Step 8: マージ後のブランチ削除

マージが完了したブランチは削除できます。

```bash
git branch -d feature/add-profile
```

**実行結果:**

```
Deleted branch feature/add-profile (was e4f5g6h).
```

**確認:**

```bash
git branch
```

**実行結果:**

```
* main
```

---

### Step 9: GitHub にプッシュ

```bash
git push
```

GitHub のページで `profile.md` が追加されていることを確認しましょう。

---

### Step 10: ブランチを GitHub にもプッシュ（応用）

新しいブランチを作って、GitHub にもプッシュしてみます。

1. 新しいブランチを作成・切り替え

```bash
git switch -c feature/update-profile
```

2. `profile.md` を編集

```markdown
## 趣味

- プログラミング
- 読書
```

3. コミット

```bash
git add profile.md
git commit -m "プロフィールに趣味を追加"
```

4. **ブランチごと GitHub にプッシュ**

```bash
git push -u origin feature/update-profile
```

5. GitHub で確認
   - ブランチの切り替えボタンをクリック
   - `feature/update-profile` を選択
   - 変更が反映されているか確認

---

### 練習問題 📝

以下の流れを実践してください：

1. `feature/add-contact` ブランチを作成・切り替え
2. `contact.md` を作成して、連絡先情報を書く
3. コミット
4. `main` ブランチに戻る
5. `feature/add-contact` を `main` にマージ
6. ブランチを削除
7. GitHub にプッシュ

**ヒント:**

```bash
# 1. ブランチ作成・切り替え
git switch -c feature/add-contact

# 2. ファイル作成
echo "# 連絡先" > contact.md
echo "Email: example@example.com" >> contact.md

# 3. コミット
git add contact.md
git commit -m "連絡先ページを追加"

# 4. mainに戻る
git switch main

# 5. マージ
git merge feature/add-contact

# 6. ブランチ削除
git branch -d feature/add-contact

# 7. プッシュ
git push
```

---

### まとめ：ハンズオン ③

**学んだコマンド:**

- `git branch` - ブランチ一覧表示
- `git branch <name>` - ブランチ作成
- `git checkout <name>` - ブランチ切り替え
- `git switch <name>` - ブランチ切り替え（新しいコマンド）
- `git switch -c <name>` - ブランチ作成＋切り替え
- `git merge <branch>` - ブランチをマージ
- `git branch -d <name>` - ブランチ削除
- `git push -u origin <branch>` - ブランチをリモートにプッシュ

**理解できたこと:**

- ブランチは並行開発を可能にする
- main（master）ブランチは安定版として管理
- feature ブランチで機能開発を行う
- 完成したら main にマージする

---

## 全体のまとめ

### 今日学んだこと

**1. Git の基本:**

- バージョン管理システムとしての Git
- ローカルリポジトリでの変更管理

**2. GitHub との連携:**

- リモートリポジトリの概念
- push/pull での同期

**3. ブランチ:**

- 並行開発の実現
- マージによる統合

### 次のステップ

**さらに学ぶと良いこと:**

- プルリクエスト（Pull Request）の使い方
- コンフリクト（競合）の解決方法
- `.gitignore` の使い方
- チーム開発のワークフロー（GitHub Flow など）

**おすすめの学習リソース:**

- [Pro Git（日本語版）](https://git-scm.com/book/ja/v2) - 無料の公式ドキュメント
- [GitHub Skills](https://skills.github.com/) - インタラクティブな学習
- [Learn Git Branching](https://learngitbranching.js.org/?locale=ja) - ビジュアルで学ぶブランチ

### 困った時は

- [GitHub コミュニティ](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/)
- 「プログラミング初学者の会」のもくもく会やハッカソンに参加

---

## よく使うコマンドチートシート

```bash
# 初期設定
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# リポジトリの作成
git init                        # 新規リポジトリ作成
git clone <url>                 # 既存リポジトリをクローン

# 基本操作
git status                      # 状態確認
git add <file>                  # ステージング
git add .                       # すべての変更をステージング
git commit -m "message"         # コミット
git log                         # 履歴表示
git log --oneline               # 簡潔な履歴表示

# リモート操作
git remote add origin <url>     # リモート登録
git push -u origin main         # 初回プッシュ
git push                        # プッシュ
git pull                        # プル

# ブランチ操作
git branch                      # ブランチ一覧
git branch <name>               # ブランチ作成
git checkout <name>             # ブランチ切り替え
git switch <name>               # ブランチ切り替え（新）
git switch -c <name>            # 作成＋切り替え
git merge <branch>              # マージ
git branch -d <name>            # ブランチ削除

# その他便利なコマンド
git diff                        # 変更内容の確認
git diff --staged               # ステージング済みの変更確認
git reset <file>                # ステージング解除
git restore <file>              # ファイルの変更を取り消す
```

---

お疲れ様でした！🎉
<br/>
Git の基本操作を習得できました。今後もどんどん使って慣れていきましょう！
