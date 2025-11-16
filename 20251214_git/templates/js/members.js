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

// 下記の関数は編集しないでください。
/**
 * メンバーカードのHTMLを生成する関数
 * @param {Object} member - メンバー情報オブジェクト
 * @returns {string} - HTMLマークアップ
 */

function createMemberCard(member) {
  const hobbiesList = member.hobbies
    .map((hobby) => `<li>${hobby}</li>`)
    .join("");

  return `
        <div class="member-card">
            <div class="member-header">
                <div class="member-icon">${member.icon}</div>
                <h3>${member.name}</h3>
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

  // メンバーが0人の場合のメッセージ
  if (members.length === 0) {
    membersContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 10px;">
                <h3 style="color: #667eea; margin-bottom: 1rem;">まだメンバーが登録されていません</h3>
                <p>あなたが最初のメンバーになりましょう！</p>
            </div>
        `;
    return;
  }

  // 各メンバーのカードを生成して追加
  members.forEach((member) => {
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
  displayMembers();
  updateMemberCount();
});

// 開発者向け：コンソールで簡単にメンバーを追加できるようにする
window.addMember = addMember;

console.log("👋 メンバー管理システム準備完了！");
console.log(`現在のメンバー数: ${members.length}`);
