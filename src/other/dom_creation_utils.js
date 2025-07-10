/**
 * @file dom_creation_utils.js
 * @description DOM要素の作成に関するユーティリティ関数をまとめたファイルです。
 * このファイルは、プログラムによるDOM要素作成の様々な手法の概要として機能します。
 */

// グローバルスコープの汚染を避けるために、名前空間オブジェクトを使用します。
const DomCreationUtils = {

  /**
   * 指定されたオプションでDOM要素を作成します。これは、一般的な初期プロパティを持つ
   * あらゆる要素を作成するための、汎用性が高く強力なメソッドです。
   * 
   * @param {string} tagName - 要素のHTMLタグ (例: 'div', 'p', 'a')。
   * @param {object} [options={}] - 要素を設定するためのオブジェクト。
   * @param {string} [options.id] - 要素に設定するID。
   * @param {string | string[]} [options.classNames] - CSSクラス名の文字列または文字列の配列。
   * @param {string} [options.textContent] - 要素のテキストコンテンツ。
   * @param {string} [options.innerHTML] - 要素の内部HTMLコンテンツ。
   * @param {object} [options.attributes] - 設定する属性のオブジェクト (例: { href: '#', 'data-id': '123' })。
   * @param {object} [options.styles] - 適用するCSSスタイルのオブジェクト (例: { color: 'red', 'font-size': '16px' })。
   * @param {HTMLElement[]} [options.children] - この要素に追加する子要素の配列。
   * @returns {HTMLElement} 新しく作成されたDOM要素。
   *
   * @example
   * const myDiv = DomCreationUtils.createElement('div', {
   *   id: 'main-container',
   *   classNames: ['container', 'active'],
   *   styles: { border: '1px solid black', padding: '10px' },
   *   children: [
   *     DomCreationUtils.createElement('p', { textContent: 'Hello World!' })
   *   ]
   * });
   * document.body.appendChild(myDiv);
   */
  createElement(tagName, options = {}) {
    const element = document.createElement(tagName);

    if (options.id) {
      element.id = options.id;
    }

    if (options.classNames) {
      if (Array.isArray(options.classNames)) {
        element.classList.add(...options.classNames);
      } else {
        element.classList.add(options.classNames);
      }
    }

    if (options.textContent) {
      element.textContent = options.textContent;
    } else if (options.innerHTML) {
      element.innerHTML = options.innerHTML;
    }

    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        element.setAttribute(key, value);
      }
    }

    if (options.styles) {
      Object.assign(element.style, options.styles);
    }

    if (options.children) {
      options.children.forEach(child => {
        if (child instanceof HTMLElement) {
          element.appendChild(child);
        }
      });
    }

    return element;
  },

  /**
   * HTML文字列から要素を作成します。これは、テンプレート文字列から複雑なDOM構造を
   * 作成するのに便利です。注意: このメソッドは文字列を解析するために一時的な親要素を
   * 作成し、解析された文字列から *最初* の要素のみを返します。
   *
   * @param {string} htmlString - 解析するHTML文字列。
   * @returns {HTMLElement | null} 作成された要素、または文字列が空の場合はnull。
   *
   * @example
   * const myLink = DomCreationUtils.createFromHTML('<a href="#" class="my-link">Click Me</a>');
   * if (myLink) {
   *   document.body.appendChild(myLink);
   * }
   */
  createFromHTML(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
  },

  /**
   * 既存の要素を複製します。これは `cloneNode` のラッパーです。
   *
   * @param {HTMLElement} element - 複製する要素。
   * @param {boolean} [deep=true] - trueの場合、要素とそのすべての子孫を複製します。falseの場合、要素自体のみを複製します。
   * @returns {HTMLElement} 複製された要素。
   *
   * @example
   * const original = document.getElementById('my-div');
   * const shallowClone = DomCreationUtils.cloneElement(original, false); // divのみを複製
   * const deepClone = DomCreationUtils.cloneElement(original, true);    // divとそのコンテンツを複製
   */
  cloneElement(element, deep = true) {
    return element.cloneNode(deep);
  }
};

// ブラウザ環境で使用するために、このオブジェクトをwindowオブジェクトにアタッチしたり、
// プロジェクトがESモジュールで設定されている場合はモジュールとして使用したりできます。
// 例: window.DomCreationUtils = DomCreationUtils;
