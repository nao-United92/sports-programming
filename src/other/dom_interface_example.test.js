/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './dom_interface_example.html'), 'utf8');

describe('DOM Interface Examples after script execution', () => {
  beforeEach(() => {
    jest.resetModules();
    document.documentElement.innerHTML = html.toString();
    require('./dom_interface_example.js');
  });

  test('should have changed the main title and set its data-status attribute', () => {
    const mainTitle = document.getElementById('main-title');
    expect(mainTitle.textContent).toBe('Title Changed by DOM Interface');
    expect(mainTitle.getAttribute('data-status')).toBe('updated');
  });

  test('should have replaced the dynamically added paragraph with a new one', () => {
    const container = document.getElementById('container');
    const oldParagraph = container.querySelector('.new-content');
    const replacementParagraph = document.getElementById('replacement-p');

    expect(oldParagraph).toBeNull(); // The original added paragraph should be gone.
    expect(replacementParagraph).not.toBeNull(); // The replacement should be present.
    expect(replacementParagraph.textContent).toBe('This paragraph is a replacement.');
  });

  test('should have removed the original first paragraph', () => {
    const container = document.getElementById('container');
    const paragraphs = container.getElementsByTagName('p');
    // The only paragraph left should be the replacement paragraph.
    expect(paragraphs.length).toBe(1);
    expect(paragraphs[0].id).toBe('replacement-p');
  });

  test('should have added and styled new list items', () => {
    const listItems = document.getElementsByClassName('list-item');
    expect(listItems.length).toBe(3);
    expect(listItems[0].style.color).toBe('blue');
    expect(listItems[1].style.color).not.toBe('blue');
  });

  test('should have applied a border to the remaining paragraph', () => {
    const paragraph = document.getElementById('replacement-p');
    expect(paragraph.style.border).toBe('1px solid green');
  });
});