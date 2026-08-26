(() => {
  const panel = document.getElementById('wifi-panel');
  const home = document.getElementById('wifi-home');
  const note = document.getElementById('wifi-note');
  if (!panel) return;

  panel.hidden = true;
  panel.style.display = 'none';
  home?.remove();

  const labels = { ko: '이용 안내로 돌아가기', en: 'Back to Welcome', ja: 'ご利用案内に戻る' };
  const style = document.createElement('style');
  style.textContent = '.notice-card{min-height:390px;display:flex;flex-direction:column}.notice-card p{font-size:17px!important;font-weight:600}.notice-card #enter{margin-top:auto}.notice .choices button{height:40px;padding:0 6px!important;font-size:16px!important;font-weight:800!important;line-height:1.2}.wifi-link{padding:2px 11px!important;line-height:1.15;background:#f1b44d!important}.wifi-return{border:0;border-radius:999px;padding:11px 18px;background:#ffd782;color:#173b43;font:800 17px "Noto Sans KR",sans-serif;cursor:pointer}';
  document.head.append(style);
  const renderReturn = () => {
    note.innerHTML = `<button class="wifi-return">${labels[document.documentElement.lang] || labels.ko}</button>`;
  };
  renderReturn();

  document.addEventListener('click', event => {
    if (event.target.closest('[data-wifi]')) {
      panel.hidden = false;
      panel.style.display = 'grid';
      renderReturn();
    }
    if (event.target.closest('.wifi-return')) {
      panel.hidden = true;
      panel.style.display = 'none';
    }
  }, true);
})();
