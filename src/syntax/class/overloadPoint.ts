/**
 * with optional arguments
 */
export class Point1 {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }
}

/**
 * using declared overloads and common constructor
 */
export class Point2 {
  x: number;
  y: number;
  public constructor();
  public constructor(a: number);
  public constructor(a: number, b: number);

  public constructor(...args: any[]) {
    switch (args.length) {
      case 0:
        break;
      case 1:
        this.x = args[0];
        break;
      case 2:
        this.x = args[0];
        this.y = args[1];
        break;
      default:
        throw Error('more args');
    }
  }
}
