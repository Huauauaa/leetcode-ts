class Point {
  // 类型注解是可选的，如果没有指定，会隐式的设置为 any。
  x: number;
  y: number;
  z;
  m = 1;
  readonly name: string = 'world';

  constructor() {
    this.name = 'world1';
  }

  err() {
    /**
     * Cannot assign to 'name' because it is a read-only property
     */
    // this.name = 'world2';
  }

  get foo() {
    return this.m;
  }

  set bar(x) {
    this.m = x;
  }

  get bar() {
    return this.m;
  }
}

export default Point;
