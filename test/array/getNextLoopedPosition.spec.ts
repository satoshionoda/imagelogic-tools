import {getNextLoopedPosition} from "../../src/array/getNextLoopedPosition";

describe("getNextLoopedPosition", () => {
  it("should work", () => {
    const arr = [0, 1, 2, 3, 4];
    expect(getNextLoopedPosition(arr, 0)).toBe(0);
    expect(getNextLoopedPosition(arr, 1)).toBe(1);
    expect(getNextLoopedPosition(arr, 2)).toBe(2);
    expect(getNextLoopedPosition(arr, 3)).toBe(3);
    expect(getNextLoopedPosition(arr, 4)).toBe(4);
    expect(getNextLoopedPosition(arr, 5)).toBe(0);
    expect(getNextLoopedPosition(arr, 0)).toBe(0);
    expect(getNextLoopedPosition(arr, -1)).toBe(4);
    expect(getNextLoopedPosition(arr, -2)).toBe(3);
  });
});
