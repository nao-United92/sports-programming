import { csvToArray, csvToObjects } from './csv-parser-utils.js';

const csv = 'name,age,city\nJohn,30,New York\nJane,25,London';

describe('csvToArray', () => {
  it('should parse a CSV string to an array of arrays', () => {
    const expected = [
      ['name', 'age', 'city'],
      ['John', '30', 'New York'],
      ['Jane', '25', 'London']
    ];
    expect(csvToArray(csv)).toEqual(expected);
  });
});

describe('csvToObjects', () => {
  it('should parse a CSV string to an array of objects', () => {
    const expected = [
      { name: 'John', age: '30', city: 'New York' },
      { name: 'Jane', age: '25', city: 'London' }
    ];
    expect(csvToObjects(csv)).toEqual(expected);
  });
});