import { Account } from '../Account';

test('chain trigger', () => {
  const a = new Account(1, 'a');

  expect(a.getName()).toBe('a');

  a.setId(2).setName('b');

  expect(a.getId()).toBe(2);
  expect(a.getName()).toBe('b');
});
