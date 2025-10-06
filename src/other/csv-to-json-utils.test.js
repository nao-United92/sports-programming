
import { csvToJson } from './csv-to-json-utils.js';

describe('csvToJson', () => {
  it('should convert a basic CSV with header to JSON', () => {
    const csv = `name,age\nJohn,30\nJane,25`;
    const expectedJson = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
    expect(csvToJson(csv)).toBe(expectedJson);
  });

  it('should convert a CSV without header to JSON', () => {
    const csv = `John,30\nJane,25`;
    const expectedJson = JSON.stringify([{ '0': 'John', '1': '30' }, { '0': 'Jane', '1': '25' }]);
    expect(csvToJson(csv, { header: false })).toBe(expectedJson);
  });

  it('should handle a different delimiter', () => {
    const csv = `name;age\nJohn;30\nJane;25`;
    const expectedJson = JSON.stringify([{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }]);
    expect(csvToJson(csv, { delimiter: ';' })).toBe(expectedJson);
  });

  it('should handle an empty CSV string', () => {
    const csv = '';
    const expectedJson = JSON.stringify([]);
    expect(csvToJson(csv)).toBe(expectedJson);
  });

  it('should handle CSV with empty lines', () => {
    const csv = `name,age\n\nJohn,30\n\nJane,25`;
    const expectedJson = JSON.stringify([ { name: undefined, age: undefined }, { name: 'John', age: '30' }, { name: undefined, age: undefined }, { name: 'Jane', age: '25' }]);
    expect(csvToJson(csv)).toBe(expectedJson);
  });
});
