/**
 * 指定されたDOM要素のクラスを切り替えます。
 * @param {HTMLElement} element - クラスを切り替えるDOM要素。
 * @param {string} className - 切り替えるクラス名。
 * @param {boolean} [force] - trueの場合、クラスを追加します。falseの場合、クラスを削除します。省略された場合、クラスの有無に応じて追加/削除します。
 */
export function toggleClass(element, className, force) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to toggleClass.', element);
    return;
  }
  element.classList.toggle(className, force);
}
