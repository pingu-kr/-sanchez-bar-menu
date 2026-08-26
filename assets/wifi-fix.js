(() => {
  const panel = document.getElementById('wifi-panel');
  const home = document.getElementById('wifi-home');
  const note = document.getElementById('wifi-note');
  if (!panel) return;

  panel.hidden = true;
  panel.style.display = 'none';
  home?.remove();

  const labels = { ko: '이용 안내로 돌아가기', en: 'Back to Welcome', ja: 'ご利用案内に戻る' };
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
