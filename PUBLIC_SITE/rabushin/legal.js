(() => {
  const cfg = window.RABUSHIN_SITE_CONFIG || {};
  document.querySelectorAll('[data-app-name]').forEach(e => e.textContent = cfg.appName || 'RabuShin AI Game Master');
  document.querySelectorAll('[data-operator]').forEach(e => e.textContent = cfg.operatorName || 'RabuShinAIGM');
  document.querySelectorAll('[data-effective-date]').forEach(e => e.textContent = cfg.effectiveDate || 'August 29, 2026');

  document.querySelectorAll('[data-support-link]').forEach(e => {
    const url = cfg.supportServerUrl || '';
    if (url && !url.includes('REPLACE_WITH')) {
      e.href = url;
      e.textContent = e.dataset.supportText || 'RabuShin Support Server';
    } else {
      e.removeAttribute('href');
      e.textContent = 'Support server invite must be configured before public release';
      e.classList.add('disabled-link');
    }
  });

  document.querySelectorAll('[data-support-email]').forEach(e => {
    if (cfg.supportEmail) {
      e.href = `mailto:${cfg.supportEmail}`;
      e.textContent = cfg.supportEmail;
    } else {
      e.textContent = 'Use the RabuShin Support Server';
      e.removeAttribute('href');
    }
  });
})();
