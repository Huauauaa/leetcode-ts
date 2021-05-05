export function repeat<T>(content: T, times: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < times; i++) {
    result.push(content);
  }

  return result;
}

interface iLength {
  length: number;
}

export function getLength<T extends iLength>(something: T) {
  return something.length;
}
