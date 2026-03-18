import { cube } from './math-cube-simple';
describe('cube', () => {
    test('cubes a number', () => {
        expect(cube(2)).toBe(8);
        expect(cube(-2)).toBe(-8);
    });
});