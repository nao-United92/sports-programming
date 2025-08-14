/**
 * イベントの伝播（バブリングまたはキャプチャリング）を停止します。
 * @param {Event} event - 伝播を停止するイベントオブジェクト。
 */
export function stopPropagation(event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
}
