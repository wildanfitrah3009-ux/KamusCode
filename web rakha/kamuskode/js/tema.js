/*
 * KamusKode - pengalih tema gelap/terang.
 * Tema awal sudah dipasang oleh script inline di <head> (anti-FOUC).
 * File ini hanya menangani klik, penyimpanan, dan sinkronisasi dengan preferensi sistem.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'kamuskode:tema';
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  function current() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }

  function apply(tema) {
    root.setAttribute('data-theme', tema);
    btn.setAttribute('aria-pressed', String(tema === 'light'));
    btn.setAttribute('aria-label', tema === 'light' ? 'Aktifkan tema gelap' : 'Aktifkan tema terang');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', tema === 'light' ? '#ffffff' : '#09090b');
  }

  function save(tema) {
    try { localStorage.setItem(STORAGE_KEY, tema); } catch (e) { /* penyimpanan diblokir: tema berlaku selama halaman terbuka */ }
  }

  apply(current());

  btn.addEventListener('click', function () {
    var next = current() === 'light' ? 'dark' : 'light';
    apply(next);
    save(next);
  });

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var onChange = function (ev) {
      var saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
      if (!saved) apply(ev.matches ? 'light' : 'dark');
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();
