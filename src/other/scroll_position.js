let position = localStorage.getItem('position'); // localStorageからpositionを取得
position = JSON.parse(position); // 取得値をオブジェクトへ変換

if (position === null) {
  // positionがnullの場合、初期値をセット
  position = { x: 0, y: 0 };
} else {
  window.scroll({ top: position.y, left: position.x, behavior: 'smooth' }); // 取得値までスクロール
}

const intervalId = setInterval(() => {
  // スクロール位置を1秒ごとに監視・localStorageに保存
  position.x = window.scrollX;
  position.y = window.scrollY;
  localStorage.setItem('position', JSON.stringify(position));
}, 1000);
