// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

// isEmail tests
test('valid email', () => {
  expect(isEmail('jordan@gmail.com')).toBe(true);
});
test('valid email with underscore', () => {
  expect(isEmail('jordan_t@ucsd.edu')).toBe(true);
});
test('invalid email missing @', () => {
  expect(isEmail('jordangmail.com')).toBe(false);
});
test('invalid email missing domain', () => {
  expect(isEmail('jordan@')).toBe(false);
});

// isStrongPassword tests
test('valid strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('valid strong password with underscore', () => {
  expect(isStrongPassword('Pass_word1')).toBe(true);
});
test('invalid password starts with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});
test('invalid password too short', () => {
  expect(isStrongPassword('Hi1')).toBe(false);
});

// isDate tests
test('valid date', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('valid date single digit month and day', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('invalid date missing year', () => {
  expect(isDate('12/25/23')).toBe(false);
});
test('invalid date with dashes', () => {
  expect(isDate('12-25-2023')).toBe(false);
});

// isHexColor tests
test('valid 6 character hex color', () => {
  expect(isHexColor('#ff5733')).toBe(true);
});
test('valid 3 character hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('invalid hex color with invalid characters', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});
test('invalid hex color wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
});

// TODO - Part 2
