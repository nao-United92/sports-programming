
import { jsonToCsv } from './json-to-csv-utils.js';

describe('jsonToCsv', () => {
  it('should convert a basic JSON to CSV with header', () => {
    const json = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
    const expectedCsv = `name,age\nJohn,30\nJane,25\n`;
    expect(jsonToCsv(json)).toBe(expectedCsv);
  });

  it('should convert a JSON to CSV without header', () => {
    const json = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
    const expectedCsv = `John,30\nJane,25\n`;
    expect(jsonToCsv(json, { header: false })).toBe(expectedCsv);
  });

  it('should handle a different delimiter', () => {
    const json = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
    const expectedCsv = `name;age\nJohn;30\nJane;25\n`;
    expect(jsonToCsv(json, { delimiter: ';' })).toBe(expectedCsv);
  });

  it('should handle an empty JSON array', () => {
    const json = '[]';
    const expectedCsv = '';
    expect(jsonToCsv(json)).toBe(expectedCsv);
  });

  it('should handle JSON with different keys in objects', () => {
    const json = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', city: 'New York' }]);
    const expectedCsv = `name,age\nJohn,30\nJane,\n`;
    expect(jsonToCsv(json)).toBe(expectedCsv);
  });
});
