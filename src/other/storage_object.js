localStorage.setItem('apple', 'りんご');
localStorage.setItem('banana', 'バナナ');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

localStorage.setItem('car', 'black');
sessionStorage.setItem('car', 'yellow');
