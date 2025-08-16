/**
 * 指定されたDOM要素の表示状態を切り替えます。
 * 要素が非表示の場合は表示し、表示されている場合は非表示にします。
 * @param {HTMLElement} element - 表示状態を切り替えるDOM要素。
 * @param {string} [displayStyle='block'] - 要素を表示する際に適用するdisplayスタイル。デフォルトは'block'。
 */
export function toggle(element, displayStyle = 'block') {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to toggle.', element);
    return;
  }

  if (element.style.display === 'none') {
    element.style.display = displayStyle;
  } else {
    element.style.display = 'none';
  }
}

/**
 * Shows a DOM element by setting its display style.
 * @param {HTMLElement} element - The DOM element to show.
 * @param {string} [displayStyle='block'] - The display style to apply. Defaults to 'block'.
 */
export function show(element, displayStyle = 'block') {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to show.', element);
    return;
  }
  element.style.display = displayStyle;
}

/**
 * Hides a DOM element by setting its display style to 'none'.
 * @param {HTMLElement} element - The DOM element to hide.
 */
export function hide(element) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to hide.', element);
    return;
  }
  element.style.display = 'none';
}
