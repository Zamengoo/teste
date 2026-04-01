const calc = require('./index');

test('soma simples', () => {
  expect(calc.somar(1, 2)).toBe(3);
});

test('subtração simples', () => {
  expect(calc.subtrair(5, 2)).toBe(3);
});

test('multiplicacao simples', () => {
    expect(calc.multiplicar(5, 2)).toBe(10);
})