/**
 *
 * @param target
 * @param value
 */
export function circulate<T>(target: Array<T>, value: number): Array<T> {
  const arr = target.concat();

  if(value === 0) {
    return arr;
  }

  let startIndex: number = (value > 0 ? 0 : value);
  let spliceCount: number = (value > 0 ? value : value * -1);
  let spliced: Array<T> = arr.splice(startIndex, spliceCount);

  return (value > 0 ? arr.concat(spliced) : spliced.concat(arr));
}
