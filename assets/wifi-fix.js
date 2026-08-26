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
  style.textContent = '.notice-card p{font-size:17px!important;font-weight:600}.wifi-return{border:0;border-radius:999px;padding:11px 18px;background:#ffd782;color:#173b43;font:800 17px "Noto Sans KR",sans-serif;cursor:pointer}';
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
