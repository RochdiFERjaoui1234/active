export function blockExternalRequests() {
  const allowedDomains = ['api.yourdomain.com'];//relpce with your allowed domain

  // Override fetch to block unauthorized domains
  const originalFetch = window.fetch;
  window.fetch = (...args) => {
    const url = args[0];
    if (!allowedDomains.some(domain => url.includes(domain))) {
      console.error('Blocked unauthorized request to:', url);
      return Promise.reject('Unauthorized domain');
    }
    return originalFetch.apply(this, args);
  };
}