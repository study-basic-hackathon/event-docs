/**
 * 合言葉チェックはここ（サーバー側）で行う。
 * doGet/doPost どちらから来ても、パスワードが合っていなければ
 * index.html（本体、約1.3MB）は一切返さず、ログインフォームだけを返す。
 */

var PROP_KEY = 'MOKUMOKU_PASSWORD'; // 名残の名前だが、既存プロジェクトで設定済みのパスワードをそのまま使うためキー名は変更していない

function doGet(e) {
  return renderGate_(e, false);
}

function doPost(e) {
  return renderGate_(e, true);
}

function renderGate_(e, isPost) {
  var expected = getExpectedPassword_();
  var supplied = (e && e.parameter && e.parameter.pw) || '';
  var attempted = isPost && supplied !== '';

  if (attempted && supplied === expected) {
    return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('イベントバナー ジェネレーター')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  return HtmlService.createHtmlOutput(gateHtml_(attempted))
    .setTitle('イベントバナー ジェネレーター')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getExpectedPassword_() {
  var pw = PropertiesService.getScriptProperties().getProperty(PROP_KEY);
  if (!pw) {
    throw new Error(
      'パスワード未設定です。Apps Scriptエディタでこのファイルの setPassword() の' +
      '中身を書き換えてから一度だけ実行してください（詳細はREADME参照）。'
    );
  }
  return pw;
}

/**
 * ★初回セットアップ用★
 * 1. 下の 'change-me-please' を実際に使いたいパスワードに書き換える
 * 2. Apps Scriptエディタでこの関数 (setPassword) を選択して「実行」ボタンを押す
 * 3. 実行が終わったら、書き換えた行は元の 'change-me-please' に戻すか削除してOK
 *    （パスワードは PropertiesService 側に保存され、以後はそちらが使われます。
 *    このファイル = Code.gs は編集権限を持つ人以外には見えないので、
 *    一時的に平文が書いてあっても実運用上のリスクは小さいですが、念のため
 *    実行後は戻しておくことを推奨します）
 */
function setPassword() {
  var newPassword = 'change-me-please'; // ここを書き換えてから実行する
  PropertiesService.getScriptProperties().setProperty(PROP_KEY, newPassword);
  Logger.log('パスワードを設定しました。');
}

function gateHtml_(showError) {
  var scriptUrl = ScriptApp.getService().getUrl();
  var errorMessage = showError ? 'パスワードが違います。' : '';
  return '<!DOCTYPE html>' +
    '<html lang="ja"><head><meta charset="UTF-8">' +
    '<title>イベントバナー ジェネレーター</title>' +
    '<style>' +
    'body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
    'background:#1c315e;font-family:"Noto Sans JP","Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;}' +
    '.gate-box{background:#fff;border-radius:12px;padding:32px 28px;width:300px;' +
    'max-width:calc(100vw - 48px);box-shadow:0 10px 40px rgba(0,0,0,0.3);text-align:center;}' +
    '.gate-box h2{font-size:16px;margin:0 0 16px;color:#1c315e;}' +
    '.gate-box input{width:100%;font-size:14px;padding:10px;border:1px solid #ccc;' +
    'border-radius:6px;margin-bottom:12px;box-sizing:border-box;}' +
    '.gate-box button{width:100%;font-size:14px;font-weight:700;color:#fff;background:#1c315e;' +
    'border:none;border-radius:6px;padding:10px;cursor:pointer;}' +
    '.gate-error{color:#ffb3c1;font-size:12px;min-height:16px;margin-top:8px;}' +
    '</style></head><body>' +
    '<form class="gate-box" method="post" action="' + scriptUrl + '">' +
    '<h2>合言葉を入力してください</h2>' +
    '<input type="password" name="pw" autocomplete="off" placeholder="パスワード" autofocus>' +
    '<button type="submit">入る</button>' +
    '<div class="gate-error">' + errorMessage + '</div>' +
    '</form></body></html>';
}
