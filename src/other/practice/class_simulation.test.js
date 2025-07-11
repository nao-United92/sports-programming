import { solveClassSimulation } from './class_simulation.js';

describe('Class State Simulation Problem', () => {
  test('should return the correct count for the example case', () => {
    const input = `3 4
ADD 0 active
TOGGLE 1 active
ADD 0 highlight
REMOVE 1 active
active`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should handle multiple classes on the same element', () => {
    const input = `2 3
ADD 0 classA
ADD 0 classB
ADD 0 classC
classA`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should handle removing a non-existent class', () => {
    const input = `1 2
REMOVE 0 nonExistent
ADD 0 existing
existing`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should handle toggling a class multiple times', () => {
    const input = `1 3
TOGGLE 0 testClass
TOGGLE 0 testClass
TOGGLE 0 testClass
testClass`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should return 0 if no elements have the target class', () => {
    const input = `2 2
ADD 0 classA
ADD 1 classB
classC`;
    expect(solveClassSimulation(input)).toBe(0);
  });

  test('should handle large number of elements and operations', () => {
    let input = `1000 5000\n`;
    for (let i = 0; i < 5000; i++) {
      const opType = ['ADD', 'REMOVE', 'TOGGLE'][Math.floor(Math.random() * 3)];
      const index = Math.floor(Math.random() * 1000);
      const className = `class${Math.floor(Math.random() * 10)}`;
      input += `${opType} ${index} ${className}\n`;
    }
    input += `class5`;
    // This test is more about ensuring it runs without error and is reasonably performant
    // The exact output is hard to predict for random inputs, so we just check it's a number
    const result = solveClassSimulation(input);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1000);
  });

  // New test cases
  test('should count all elements if all have the target class', () => {
    const input = `5 5
ADD 0 target
ADD 1 target
ADD 2 target
ADD 3 target
ADD 4 target
target`;
    expect(solveClassSimulation(input)).toBe(5);
  });

  test('should handle empty string as class name', () => {
    const input = `1 2
ADD 0 ""
TOGGLE 0 ""
""`;
    expect(solveClassSimulation(input)).toBe(0);
  });

  test('should handle class names with special characters', () => {
    const input = `1 2
ADD 0 my-class-name
TOGGLE 0 another_class
my-class-name`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should correctly handle add then remove', () => {
    const input = `1 2
ADD 0 temp-class
REMOVE 0 temp-class
temp-class`;
    expect(solveClassSimulation(input)).toBe(0);
  });

  test('should correctly handle remove then add', () => {
    const input = `1 2
REMOVE 0 non-existent-class
ADD 0 new-class
new-class`;
    expect(solveClassSimulation(input)).toBe(1);
  });

  test('should handle single element operations', () => {
    const input = `1 3
ADD 0 single
REMOVE 0 single
ADD 0 single
single`;
    expect(solveClassSimulation(input)).toBe(1);
  });
});
