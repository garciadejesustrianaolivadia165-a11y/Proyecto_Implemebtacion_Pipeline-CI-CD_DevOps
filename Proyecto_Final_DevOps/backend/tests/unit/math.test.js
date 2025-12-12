const { add, subtract, multiply, divide } = require('../../src/utils/math');

describe('Math Utils', () => {
  describe('add', () => {
    test('suma dos números positivos correctamente', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('suma números negativos correctamente', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('suma cero correctamente', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('resta dos números correctamente', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('resta con resultado negativo', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplica dos números correctamente', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplica por cero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divide dos números correctamente', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('lanza error al dividir por cero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
});
