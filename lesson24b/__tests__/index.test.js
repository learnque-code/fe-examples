import { add, multiply } from '../index';

describe('Arithmetic operations', () => {
    it('Adds two numbers', () => {
        const result = add(2, 5);

        expect(result).toEqual(7);
        expect(result).not.toEqual(10);
    });

    it('Multiply two numbers', () => {
        const result = multiply(2, 5);

        expect(result).toEqual(10);
        expect(result).not.toEqual(7);
    });
});
