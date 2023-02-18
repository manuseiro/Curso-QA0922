const { add, subtract, multiply, divide } = require('./calc');

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe('subtract function', () => {
  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('subtracts 2 - 5 to equal -3', () => {
    expect(subtract(2, 5)).toBe(-3);
  });
});

describe('multiply function', () => {
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies -2 * 3 to equal -6', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});

describe('divide function', () => {
  test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow();
  });
});
