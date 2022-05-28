function foo(a: number, ...args: any[]) {
  console.log(a, args);
}

test('type', () => {
  foo(1);
  foo(2, false, 'false');
});
