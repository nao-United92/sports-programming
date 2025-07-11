/**
 * クラス状態シミュレーション問題を解く関数。
 * @param {string} input - 問題の入力文字列。
 * @returns {number} TARGET_CLASSを持つ要素の数。
 */
export function solveClassSimulation(input) {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);

  // 各要素のクラスを管理するための配列。各要素はSetオブジェクトでクラスを保持する。
  const elements = Array.from({ length: N }, () => new Set());

  // 操作を処理
  for (let i = 1; i <= M; i++) {
    const [operation, indexStr, className] = lines[i].split(' ');
    const index = Number(indexStr);
    const elementClasses = elements[index];

    switch (operation) {
      case 'ADD':
        elementClasses.add(className);
        break;
      case 'REMOVE':
        elementClasses.delete(className);
        break;
      case 'TOGGLE':
        if (elementClasses.has(className)) {
          elementClasses.delete(className);
        } else {
          elementClasses.add(className);
        }
        break;
    }
  }

  const targetClass = lines[M + 1];
  let count = 0;

  // TARGET_CLASSを持つ要素の数をカウント
  for (let i = 0; i < N; i++) {
    if (elements[i].has(targetClass)) {
      count++;
    }
  }

  return count;
}

