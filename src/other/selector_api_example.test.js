/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './selector_api_example.html'), 'utf8');

describe('Selector API Examples after script execution', () => {
  beforeEach(() => {
    jest.resetModules();
    document.documentElement.innerHTML = html.toString();
    global.console = { log: jest.fn() };
    require('./selector_api_example.js');
  });

  test('should have modified the title and intro paragraphs correctly', () => {
    const titleElement = document.querySelector('.title');
    expect(titleElement.textContent).toBe('Title Changed by Selector API');
    expect(titleElement.classList.contains('main-heading')).toBe(true);

    const introParagraphs = document.querySelectorAll('.intro');
    introParagraphs.forEach(p => {
      expect(p.classList.contains('highlight')).toBe(true);
      expect(p.style.fontStyle).toBe('italic');
    });
  });

  test('should have added a new paragraph at the end', () => {
    const contentArea = document.querySelector('#content-area');
    const lastParagraph = contentArea.lastElementChild;
    expect(lastParagraph.textContent).toBe('This paragraph was added using querySelector.');
  });

  test('should have applied bold style to the first original paragraph', () => {
    const firstP = document.querySelector('#content-area > p');
    expect(firstP.style.fontWeight).toBe('bold');
  });

  test('should have added a border to the closest div ancestor', () => {
    const contentArea = document.querySelector('#content-area');
    expect(contentArea.style.border).toBe('2px solid red');
  });

  test('should have logged correct messages to the console via matches()', () => {
    expect(console.log).toHaveBeenCalledWith('The title element matches the ".title" selector.');
    expect(console.log).toHaveBeenCalledWith('Found a paragraph that matches ".intro":', 'First paragraph.');
    expect(console.log).toHaveBeenCalledWith('Found a paragraph that matches ".intro":', 'Second paragraph.');
  });
});