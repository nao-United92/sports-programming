/**
 * イベントデリゲーションを設定します。
 * 親要素にイベントリスナーを設定し、指定されたセレクタにマッチする子要素からのイベントを処理します。
 * @param {HTMLElement} parentElement - イベントリスナーを設定する親要素。
 * @param {string} selector - イベントを処理する子要素のセレクタ。
 * @param {string} eventType - リッスンするイベントのタイプ（例: 'click'）。
 * @param {Function} handler - イベント発生時に呼び出されるハンドラ関数。
 * @returns {Function} 設定されたイベントリスナー関数。これをremoveEventListenerに渡して解除できます。
 */
export function delegate(parentElement, selector, eventType, handler) {
  if (!(parentElement instanceof HTMLElement)) {
    console.warn('Invalid parentElement provided to delegate.', parentElement);
    return null;
  }
  if (typeof selector !== 'string' || selector.length === 0) {
    console.warn('Invalid selector provided to delegate.', selector);
    return null;
  }
  if (typeof eventType !== 'string' || eventType.length === 0) {
    console.warn('Invalid eventType provided to delegate.', eventType);
    return null;
  }
  if (typeof handler !== 'function') {
    console.warn('Invalid handler provided to delegate.', handler);
    return null;
  }

  const delegatedHandler = function(event) {
    const target = event.target;
    // closest() メソッドは、要素自身またはその祖先をたどって、指定されたセレクタに最も近い祖先要素を返します。
    // target が selector にマッチするか、target の祖先が selector にマッチする場合に、その要素を返します。
    const matchingElement = target.closest(selector);

    if (matchingElement && parentElement.contains(matchingElement)) {
      // イベントのターゲットがセレクタにマッチし、かつ親要素の子孫である場合のみハンドラを実行
      handler.call(matchingElement, event);
    }
  };

  parentElement.addEventListener(eventType, delegatedHandler);

  return delegatedHandler;
}
