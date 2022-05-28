enum DAY {
  SUNDAY = 10,
  MONDAY,
  TUESDAY,
}

test('enum', () => {
  console.log(DAY.SUNDAY);
  expect(DAY.MONDAY).toBe(11);
});
