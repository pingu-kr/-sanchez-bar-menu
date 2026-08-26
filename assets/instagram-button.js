(() => {
  const notice = document.getElementById('notice');
  if (!notice || document.getElementById('instagram-link')) return;

  const link = document.createElement('a');
  link.id = 'instagram-link';
  link.href = 'https://www.instagram.com/sanchez_makgeolli/';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Sanchez Makgeolli Instagram');
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.7" r="1"></circle></svg>';
  notice.append(link);

  const style = document.createElement('style');
  style.textContent = '#instagram-link{position:absolute;top:18px;right:18px;width:46px;height:46px;display:grid;place-items:center;border:1px solid #fff7;border-radius:50%;background:#08242e8a;color:#fffaf0;backdrop-filter:blur(10px);box-shadow:0 6px 18px #0004}#instagram-link svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.8}';
  document.head.append(style);
})();
