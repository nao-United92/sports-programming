localStorage.setItem('apple', 'りんご');
localStorage.setItem('banana', 'バナナ');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

localStorage.setItem('car', 'black');
sessionStorage.setItem('car', 'yellow');

localStorage.setItem('car', 'purple');
const car = sessionStorage.getItem('car') || localStorage.getItem('car');
sessionStorage.setItem('car', car);
console.log(`sessionStorage: ${sessionStorage.getItem('car')}`);
console.log(`car: ${car}`);
