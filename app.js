function printNormal() {
  document.body.classList.remove('print-compact');
  window.print();
}

function printCompact() {
  document.body.classList.add('print-compact');
  window.print();
  setTimeout(function () {
    document.body.classList.remove('print-compact');
  }, 1000);
}

function setLang(lang) {
  // Só troca elementos sem filhos HTML (evita apagar <strong>)
  document.querySelectorAll('[data-pt]').forEach(function (el) {
    if (el.children.length === 0) {
      var val = el.getAttribute('data-' + lang);
      if (val) el.textContent = val;
    }
  });
  document.querySelectorAll('.pt-content').forEach(function (el) {
    el.style.display = lang === 'pt' ? '' : 'none';
  });
  document.querySelectorAll('.en-content').forEach(function (el) {
    el.style.display = lang === 'en' ? '' : 'none';
  });
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active',
      (lang === 'pt' && btn.textContent.indexOf('Português') !== -1) ||
      (lang === 'en' && btn.textContent.indexOf('English') !== -1)
    );
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  if (lang === 'en') {
    var enTitle = document.documentElement.getAttribute('data-en-title');
    if (enTitle) document.title = enTitle;
  } else {
    var titleEl = document.querySelector('title');
    if (titleEl) document.title = titleEl.textContent;
  }
}