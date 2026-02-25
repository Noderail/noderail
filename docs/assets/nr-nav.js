// NodeRail shared nav + footer injector
(function() {
  const path = window.location.pathname;
  const isRoot = path === '/' || path.endsWith('index.html');

  function active(href) {
    if (href === '/' && isRoot) return ' active';
    if (href !== '/' && path.includes(href.replace('.html',''))) return ' active';
    return '';
  }

  const nav = `
<nav class="nr-nav">
  <div class="nr-nav-inner">
    <a href="/" class="nr-nav-logo">
      <img src="/assets/logo.png" alt="NodeRail mark">
      NodeRail
    </a>
    <div class="nr-nav-links">
      <a href="/how-it-works.html"${active('/how-it-works')}>How it works</a>
      <a href="/why-noderail.html"${active('/why-noderail')}>Why NodeRail</a>
      <a href="/use-cases.html"${active('/use-cases')}>Use cases</a>
      <a href="/reference.html"${active('/reference')}>Reference</a>
      <a href="/#/how" onclick="loadDocs('/how'); return false;">Docs</a>
      <a href="/access.html" class="nr-nav-cta"${active('/access')}>Request Access</a>
    </div>
  </div>
</nav>`;

  const footer = `
<footer class="nr-footer">
  <div class="nr-footer-inner">
    <div>
      <div class="nr-footer-logo">NodeRail</div>
      <p style="font-size:0.82rem;margin-top:0.25rem;">Infrastructure for Intellectual Continuity</p>
      <p style="font-size:0.78rem;margin-top:1rem;color:#aaa;">DOI: <a href="https://doi.org/10.5281/zenodo.18764766" target="_blank" style="color:#aaa;">10.5281/zenodo.18764766</a> &nbsp;·&nbsp; v0.1 &nbsp;·&nbsp; &copy; 2026 NodeRail</p>
    </div>
    <div class="nr-footer-links">
      <a href="/how-it-works.html">How it works</a>
      <a href="/why-noderail.html">Why NodeRail</a>
      <a href="/use-cases.html">Use cases</a>
      <a href="/reference.html">Reference</a>
      <a href="/access.html">Request Access</a>
    </div>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', function() {
    const navEl = document.getElementById('nr-nav-placeholder');
    const footerEl = document.getElementById('nr-footer-placeholder');
    if (navEl) navEl.outerHTML = nav;
    if (footerEl) footerEl.outerHTML = footer;
  });
})();
