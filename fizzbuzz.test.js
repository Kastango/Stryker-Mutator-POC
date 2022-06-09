const fizzbuzz = require('./fizzbuzz');

test('Se o número for divisível por 3: "Fizz"', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
  expect(fizzbuzz(6)).toBe('Fizz');
  expect(fizzbuzz(9)).toBe('Fizz');
  expect(fizzbuzz(21)).toBe('Fizz');
});

test('Se o número for divisível por 5: "Buzz"', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
  expect(fizzbuzz(10)).toBe('Buzz');
  expect(fizzbuzz(50)).toBe('Buzz');
  expect(fizzbuzz(100)).toBe('Buzz');
});

test('Se for divisível por 3 e por 5: "FizzBuzz"', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz'); 
  expect(fizzbuzz(30)).toBe('FizzBuzz');
  expect(fizzbuzz(45)).toBe('FizzBuzz');
  expect(fizzbuzz(90)).toBe('FizzBuzz');
});

test('No geral, o número em forma de string', () => {
  expect(fizzbuzz(1)).toBe('1');
  expect(fizzbuzz(2)).toBe('2');
  expect(fizzbuzz(4)).toBe('4');
  expect(fizzbuzz(7)).toBe('7');
});

test('aceite valores de 1 a 100', () => {
  expect(fizzbuzz(0)).toBe('invalid input');
  expect(fizzbuzz(101)).toBe('invalid input');
});