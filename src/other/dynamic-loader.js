const loadScript = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve(document.querySelector(`script[src="${url}"]`));
      return;
    }

    const script = document.createElement('script');
    script.src = url;

    // Assign options to the script element
    for (const key in options) {
      if (key === 'async' || key === 'defer' || key === 'crossOrigin' || key === 'type') {
        script[key] = options[key];
      }
    }

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

    document.head.appendChild(script);
  });
};

const loadStyle = (url) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${url}"]`)) {
      resolve(document.querySelector(`link[href="${url}"]`));
      return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Failed to load style: ${url}`));

    document.head.appendChild(link);
  });
};

module.exports = { loadScript, loadStyle };
