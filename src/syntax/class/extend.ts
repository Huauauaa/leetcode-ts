/**
 * 类初始化的顺序，就像在 JavaScript 中定义的那样：
 *
 * 基类字段初始化
 * 基类构造函数运行
 * 派生类字段初始化
 * 派生类构造函数运行
 */
export class Base {
  name = 'base';
  constructor() {
    console.log('base init', this.name);
  }
}

export class Derived extends Base {
  name = 'derived';

  constructor() {
    super();
    console.log('derived', this.name);
  }
}
