import { siblings, parents } from './dom-traversal-utils.js';

describe('siblings', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="parent">
        <div id="child1" class="child"></div>
        <div id="child2" class="child"></div>
        <div id="child3" class="child"></div>
      </div>
    `;
  });

  test('should return all sibling elements', () => {
    const child2 = document.getElementById('child2');
    const siblingElements = siblings(child2);
    expect(siblingElements.length).toBe(2);
    expect(siblingElements.map(el => el.id)).toEqual(['child1', 'child3']);
  });
});

describe('parents', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="grandparent" class="level1">
        <div id="parent" class="level2">
          <div id="child"></div>
        </div>
      </div>
    `;
  });

  test('should return all parent elements that match the selector', () => {
    const child = document.getElementById('child');
    const parentElements = parents(child, '.level1');
    expect(parentElements.length).toBe(1);
    expect(parentElements[0].id).toBe('grandparent');
  });

  test('should return all parent elements that match the selector', () => {
    const child = document.getElementById('child');
    const parentElements = parents(child, 'div');
    expect(parentElements.length).toBe(2);
    expect(parentElements.map(el => el.id)).toEqual(['parent', 'grandparent']);
  });
});
