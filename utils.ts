export function pluralize(noun: string, n: number) {
  if (n == 1) {
    return noun;
  }
  return noun + "s";
}
