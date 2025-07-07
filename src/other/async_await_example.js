/**
 * 擬似的な非同期処理をシミュレートする関数
 * @param {number} ms - 待機するミリ秒数
 * @returns {Promise<string>} - 待機後に解決されるPromise
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(() => {
    console.log(`--- ${ms}ms 経過しました ---`);
    resolve(`処理が${ms}ms後に完了しました。`);
  }, ms));
}

/**
 * 擬似的なAPI呼び出しをシミュレートする関数
 * @param {boolean} success - 成功するかどうか
 * @returns {Promise<object>} - 成功または失敗のPromise
 */
function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: 'APIから取得したデータです。', status: 200 });
      } else {
        reject(new Error('APIからのデータ取得に失敗しました。'));
      }
    }, 1500); // 1.5秒後に結果を返す
  });
}

/**
 * async/await を使った非同期処理の実行例
 */
async function runAsyncOperations() {
  console.log('非同期処理を開始します...');

  try {
    // delay関数をawaitで待機
    const result1 = await delay(2000); // 2秒待機
    console.log('await delay(2000):', result1);

    // fetchData関数をawaitで待機（成功パターン）
    const data1 = await fetchData(true);
    console.log('await fetchData(true):', data1);

    // fetchData関数をawaitで待機（失敗パターン）
    // エラーが発生するため、catchブロックにジャンプします
    const data2 = await fetchData(false);
    console.log('await fetchData(false):', data2); // ここは実行されない
  } catch (error) {
    console.error('エラーが発生しました:', error.message);
  } finally {
    console.log('非同期処理が終了しました。');
  }
}

// 関数を実行
runAsyncOperations();

// DOM操作と組み合わせる例（例としてボタンクリックで非同期処理を実行）
// dom_selector.html にボタンを追加し、このスクリプトを読み込むことを想定
document.addEventListener('DOMContentLoaded', () => {
  const asyncButton = document.createElement('button');
  asyncButton.textContent = '非同期処理を実行';
  document.body.appendChild(asyncButton);

  asyncButton.addEventListener('click', async () => {
    console.log('ボタンがクリックされました。非同期処理を開始します...');
    try {
      const result = await delay(1000);
      console.log('ボタンクリック後の処理:', result);
      const data = await fetchData(true);
      console.log('ボタンクリック後のデータ取得:', data);
    } catch (error) {
      console.error('ボタンクリック後のエラー:', error.message);
    }
  });
});