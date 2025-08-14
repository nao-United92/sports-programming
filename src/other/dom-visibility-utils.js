/**
 * 指定されたDOM要素の表示状態を切り替えます。
 * 要素が非表示の場合は表示し、表示されている場合は非表示にします。
 * @param {HTMLElement} element - 表示状態を切り替えるDOM要素。
 * @param {string} [displayStyle='block'] - 要素を表示する際に適用するdisplayスタイル。デフォルトは'block'。
 */
export function toggleVisibility(element, displayStyle = 'block') {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to toggleVisibility.', element);
    return;
  }

  if (element.style.display === 'none') {
    element.style.display = displayStyle;
  } else {
    element.style.display = 'none';
  }
}
