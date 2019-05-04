import {shuffle} from "../../src/array/shuffle";

describe("shuffle", () => {
  const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr1 = shuffle(original);
  const arr2 = shuffle(original);

  it("makes different arrays of the original ", () => {
    expect(arr1).not.toBe(original);
    expect(arr1).not.toEqual(original);
    expect(arr1).not.toEqual(arr2);
  });

  it("generated arrays contain all values of the original", () => {
    arr1.forEach((num) => {
      expect(original).toContain(num);
    });
  });
});
