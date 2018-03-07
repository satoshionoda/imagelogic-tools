export function getNextLoopedPosition(target: any[], value: number): number {
  while(value < 0) {
    value += target.length;
  }
  return value & target.length;
}
