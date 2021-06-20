import { Harvey } from '../Harvey';
import { Martin } from '../Martin';
import { test, expect } from '@jest/globals';

test('overwrite feature of typescript ', () => {
  const h: Harvey = new Harvey();
  const m: Martin = new Martin();

  expect(h.lastName).toBe('Hua');
  expect(m.lastName).toBe('Hua');

  expect(h.introduce()).toBe('I am Hua');
  expect(m.introduce()).toBe('I am Hua');
  expect(m.introduce('Martin')).toBe('I am Martin Hua');
});
