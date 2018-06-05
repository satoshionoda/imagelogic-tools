export function circulate<T>(target: Array<T>, value: number): Array<T> {
  if(value === 0) {
    return target.concat();
  }

  let startIndex: number = (value > 0 ? 0 : value);
  let spliceCount: number = (value > 0 ? value : value * -1);
  let spliced: Array<T> = target.splice(startIndex, spliceCount);

  return (value > 0 ? target.concat(spliced) : spliced.concat(target));
}
