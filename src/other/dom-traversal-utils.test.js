import { getParent, getChildren, getSiblings } from './dom-traversal-utils';

describe('dom-traversal-utils', () => {
  let parent, child1, child2, child3;

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <div id="parent">
        <div id="child1"></div>
        <div id="child2"></div>
        <div id="child3"></div>
      </div>
    `;
    parent = document.getElementById('parent');
    child1 = document.getElementById('child1');
    child2 = document.getElementById('child2');
    child3 = document.getElementById('child3');
  });

  describe('getParent', () => {
    test('should return the parent of an element', () => {
      expect(getParent(child1)).toBe(parent);
    });

    test('should return null for an element with no parent', () => {
      const orphan = document.createElement('div');
      expect(getParent(orphan)).toBeNull();
    });

    test('should return null for a null input', () => {
      expect(getParent(null)).toBeNull();
    });
  });

  describe('getChildren', () => {
    test('should return an array of child elements', () => {
      expect(getChildren(parent)).toEqual([child1, child2, child3]);
    });

    test('should return an empty array for an element with no children', () => {
      expect(getChildren(child1)).toEqual([]);
    });

    test('should return an empty array for a null input', () => {
      expect(getChildren(null)).toEqual([]);
    });
  });

  describe('getSiblings', () => {
    test('should return an array of sibling elements', () => {
      expect(getSiblings(child2)).toEqual([child1, child3]);
    });

    test('should return an empty array for an element with no siblings', () => {
        document.body.innerHTML = `<div id="parent"><div id="child1"></div></div>`;
        const p = document.getElementById('parent');
        const c = document.getElementById('child1');
        expect(getSiblings(c)).toEqual([]);
    });

    test('should return an empty array for an element with no parent', () => {
      const orphan = document.createElement('div');
      expect(getSiblings(orphan)).toEqual([]);
    });

    test('should return an empty array for a null input', () => {
      expect(getSiblings(null)).toEqual([]);
    });
  });
});