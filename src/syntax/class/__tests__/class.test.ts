import { test } from '@jest/globals';

import Point from '../Point';
import { Point1, Point2 } from '../overloadPoint';
import { Derived } from '../extend';

test('extend', () => {
  const d = new Derived();
  console.log(d);
});

test('class', () => {
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;
  pt.z = 'foo';

  /**
   * Type 'string' is not assignable to type 'number'
   */
  // pt.m = '1';

  /**
   * Cannot assign to 'name' because it is a read-only property
   */
  // pt.name = 'aa';

  console.log(pt, pt.x, pt.z, pt.foo);
  /**
   * 如果 get 存在而 set 不存在，属性会被自动设置为 readonly
   */
  // pt.foo = 2;
  pt.bar = 11;
  console.log('pt.bar', pt.bar);
});

test('Point1', () => {
  const op0 = new Point1();
  const op1 = new Point1(1);
  const op2 = new Point1(1, 2);

  console.log(op0, op1, op2);
});

test('Point2', () => {
  const op0 = new Point2();
  console.log(op0);
  const op1 = new Point2(1);
  console.log(op1);
  const op2 = new Point2(1, 2);
  console.log(op2);
  /**
   * Expected 0-2 arguments, but got 3
   */
  // const op3 = new Point2(1, 2, 3);
});
