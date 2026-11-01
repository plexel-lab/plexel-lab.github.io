// 招待コードは URL の # 以降にある（サーバーへは送られない）。
// 決まった形式（英数字 4〜64 文字）のときだけ、文字として表示する。
(function () {
  var code = location.hash.replace(/^#/, "");
  if (!/^[A-Za-z0-9]{4,64}$/.test(code)) {
    document.getElementById("invalid").hidden = false;
    return;
  }
  document.getElementById("code").textContent = code;
  document.getElementById("open").href = "catchlog://join?code=" + encodeURIComponent(code);
  var copy = document.getElementById("copy");
  copy.addEventListener("click", function () {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code).then(function () {
      copy.textContent = "コピーしました";
    });
  });
  document.getElementById("invite").hidden = false;
})();
