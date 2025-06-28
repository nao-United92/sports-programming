const innerWidth = setInterval(() => {
  if (window.innerWidth < 500) {
    clearInterval(innerWidth);
    console.log('Inner Width check stopped');
  }
});
