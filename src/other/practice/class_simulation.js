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
        _addClass(elementClasses, className);
        break;
      case 'REMOVE':
        _removeClass(elementClasses, className);
        break;
      case 'TOGGLE':
        _toggleClass(elementClasses, className);
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

/**
 * 要素のクラスセットにクラスを追加します。
 * @param {Set<string>} elementClasses - 要素のクラスを保持するSetオブジェクト。
 * @param {string} className - 追加するクラス名。
 */
function _addClass(elementClasses, className) {
  elementClasses.add(className);
}

/**
 * 要素のクラスセットからクラスを削除します。
 * @param {Set<string>} elementClasses - 要素のクラスを保持するSetオブジェクト。
 * @param {string} className - 削除するクラス名。
 */
function _removeClass(elementClasses, className) {
  elementClasses.delete(className);
}

/**
 * 要素のクラスセットのクラスをトグルします。
 * @param {Set<string>} elementClasses - 要素のクラスを保持するSetオブジェクト。
 * @param {string} className - トグルするクラス名。
 */
function _toggleClass(elementClasses, className) {
  if (elementClasses.has(className)) {
    elementClasses.delete(className);
  } else {
    elementClasses.add(className);
  }
}

