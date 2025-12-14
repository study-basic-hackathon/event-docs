// メンバー情報を管理するJavaScriptファイル

// メンバーデータの配列
const members = [
  // サンプルデータ（参考用）
  {
    name: "いぐっちゃん",
    icon: "🐓",
    location: "東京都",
    experience: "7年",
    language: "Python",
    goal: "Gitを使いこなせるようになりたい！",
    hobbies: ["プログラミング", "もつ焼き探索"],
    message: "東京たのちぃ。。よろしくお願いします！",
  },


  // 下記に自分の情報を追加してください。

 
  {
    name: "いぐいぐ2",
    icon: "🐓",
    location: "東京都",
    experience: "10年",
    language: "Python",
    goal: "Gitを使いこなせるようになりたい！",
    hobbies: ["プログラミング", "もつ焼き探索",  "ギター"],
    message: "東京たのちぃ。。よろしくお願いします！",
  },
  { 
    name: "テクテク⭐️アキレス腱治療中",
    icon: "🩼",
    location: "東京都",
    experience: "0.5年",
    language: "JavaScript",
    goal: "GitとGitHubを使いこなせるようになりたいのです",
    hobbies: ["AIいぢり〜", "生ホッケを食すこと"],
    message: "無職透明なおとこです",
  },

  {
    name: "てらちゃん",
    icon: "🐥",
    location: "埼玉県",
    experience: "2ヶ月",
    language: "Java",
    goal: "Gitを理解できるようになりたい！",
    hobbies: ["ゲーム" , "ホラー映画鑑賞"],
    message: "東京は人多いぃ。。よろしくお願いします！",
  },
  {
    name: "euporia25",
    icon: "🦜",
    location: "千葉県",
    experience: "０年",
    language: "Python",
    goal: "Gitを知ること",
    hobbies: ["画像生成", "タバコ"],
    message: "タバコは酸素",
  }
 // 下記に自分の情報を追加してください。
  // 例：
  // {
  //     name: "あなたの名前",
  //     icon: "😊", // 好きな絵文字
  //     location: "あなたの地域",
  //     experience: "プログラミング歴",
  //     language: "好きな言語",
  //     goal: "今日の目標",
  //     hobbies: ["趣味1", "趣味2"],
  //     message: "一言メッセージ"
  // },
];

// 現在のフィルター状態
let activeFilter = null;

// すべてのタグを取得する関数
function getAllTags() {
  const tagSet = new Set();
  members.forEach(member => {
    tagSet.add(member.language);
    member.hobbies.forEach(hobby => tagSet.add(hobby));
  });
  return Array.from(tagSet).sort();
}

// タグボタンを生成する関数
function generateTagButtons() {
  const tagButtonsContainer = document.getElementById("tag-buttons");
  if (!tagButtonsContainer) return;

  const tags = getAllTags();
  tagButtonsContainer.innerHTML = "";

  tags.forEach(tag => {
    const button = document.createElement("button");
    button.className = "tag-button";
    button.textContent = tag;
    button.addEventListener("click", () => filterMembers(tag));
    tagButtonsContainer.appendChild(button);
  });
}

// メンバーをフィルタリングする関数
function filterMembers(tag) {
  activeFilter = tag;

  // ボタンのアクティブ状態を更新
  const buttons = document.querySelectorAll(".tag-button");
  buttons.forEach(button => {
    if (button.textContent === tag) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  displayMembers();
}

// フィルターを解除する関数
function clearFilter() {
  activeFilter = null;

  // ボタンのアクティブ状態を解除
  const buttons = document.querySelectorAll(".tag-button");
  buttons.forEach(button => button.classList.remove("active"));

  displayMembers();
}
/**
 * メンバーカードのHTMLを生成する関数
 * @param {Object} member - メンバー情報オブジェクト
 * @returns {string} - HTMLマークアップ
 */

function createMemberCard(member) {
  const hobbiesList = member.hobbies
    .map((hobby) => `<li>${hobby}</li>`)
    .join("");

  // タグを生成（言語と趣味）
  const tags = [member.language, ...member.hobbies];
  const tagsHtml = tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  return `
        <div class="member-card">
            <div class="member-header">
                <div class="member-icon">${member.icon}</div>
                <h3>${member.name}</h3>
            </div>
            <div class="member-tags">
                ${tagsHtml}
            </div>
            <div class="member-info">
                <p><strong>📍 地域:</strong> ${member.location}</p>
                <p><strong>💻 経験:</strong> ${member.experience}</p>
                <p><strong>❤️ 好きな言語:</strong> ${member.language}</p>
            </div>
            <div class="member-goal">
                <p><strong>🎯 目標:</strong></p>
                <p>${member.goal}</p>
            </div>
            <div class="member-hobbies">
                <p><strong>🎨 趣味:</strong></p>
                <ul>
                    ${hobbiesList}
                </ul>
            </div>
            <div class="member-message">
                <p><em>"${member.message}"</em></p>
            </div>
        </div>
    `;
}

/**
 * すべてのメンバーカードを表示する関数
 */
function displayMembers() {
  const membersContainer = document.getElementById("members");

  if (!membersContainer) {
    console.error("メンバーコンテナが見つかりません");
    return;
  }

  // 既存のコンテンツをクリア
  membersContainer.innerHTML = "";

  // フィルタリングされたメンバーを取得
  const filteredMembers = activeFilter
    ? members.filter(member =>
        member.language === activeFilter ||
        member.hobbies.includes(activeFilter)
      )
    : members;

  // メンバーが0人の場合のメッセージ
  if (filteredMembers.length === 0) {
    membersContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 10px;">
                <h3 style="color: #667eea; margin-bottom: 1rem;">該当するメンバーが見つかりません</h3>
                <p>他のタグをお試しください。</p>
            </div>
        `;
    return;
  }

  // 各メンバーのカードを生成して追加
  filteredMembers.forEach((member) => {
    membersContainer.innerHTML += createMemberCard(member);
  });

  // アニメーションの遅延を設定（順番に表示）
  const cards = membersContainer.querySelectorAll(".member-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

/**
 * 新しいメンバーを追加する関数（参考用）
 * @param {Object} member - 追加するメンバー情報
 */
function addMember(member) {
  members.push(member);
  displayMembers();
}

/**
 * メンバー数を表示する関数
 */
function updateMemberCount() {
  const introSection = document.querySelector(".intro p");
  if (introSection && members.length > 0) {
    introSection.textContent = `今日のセミナーに参加してくれた ${members.length} 人の仲間たちです！`;
  }
}

// ページ読み込み時にメンバーを表示
document.addEventListener("DOMContentLoaded", () => {
  generateTagButtons();
  displayMembers();
  updateMemberCount();

  // フィルター解除ボタンのイベントリスナー
  const clearFilterButton = document.getElementById("clear-filter");
  if (clearFilterButton) {
    clearFilterButton.addEventListener("click", clearFilter);
  }

  // おみくじのイベントリスナーを追加
  const drawButton = document.getElementById("draw-omikuji");
  const resultDiv = document.getElementById("omikuji-result");

  if (drawButton && resultDiv) {
    drawButton.addEventListener("click", () => {
      const fortunes = ["大吉", "中吉", "小吉", "吉", "凶"];
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      resultDiv.textContent = `今日の運勢: ${randomFortune}`;
    });
  }
});

// 開発者向け：コンソールで簡単にメンバーを追加できるようにする
window.addMember = addMember;

console.log("👋 メンバー管理システム準備完了！");
console.log(`現在のメンバー数: ${members.length}`);
