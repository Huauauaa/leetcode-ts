export function add(a: string, b: string): string;

export function add(a: number, b: number): number;

export function add(
  a: string | number,
  b: string | number
): string | number | void {
  if (typeof a === "string" && typeof b === "string") {
    return a + "-" + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}
