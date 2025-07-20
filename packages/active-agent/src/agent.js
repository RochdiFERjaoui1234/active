// active-agent/src/agent.js
(function () {
  // Block eval()
  window.eval = new Proxy(window.eval, {
    apply: () => {
      throw new Error('Eval blocked by ACTIVE.');
    },
  });

  // Enforce CSP
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = "default-src 'self'";
  document.head.appendChild(meta);
})();