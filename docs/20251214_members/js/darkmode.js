// ダークモード切替スクリプト
(function () {
  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }

  function updateToggleButton(button, theme) {
    if (!button) return;
    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.querySelector(".icon").textContent = isDark ? "☀️" : "🌙";
    button.querySelector(".label").textContent = isDark ? "ライト" : "ダーク";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    let theme = getCurrentTheme();
    updateToggleButton(btn, theme);

    if (btn) {
      btn.addEventListener("click", () => {
        theme = getCurrentTheme() === "dark" ? "light" : "dark";
        applyTheme(theme);
        saveTheme(theme);
        updateToggleButton(btn, theme);
      });

      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
    }
  });
})();
