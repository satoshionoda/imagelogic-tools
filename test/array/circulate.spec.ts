import {circulate} from "../../src/array/circulate";

describe("circulate", () => {
  it("should work", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(circulate(arr, 0)[0]).toBe(1);
    expect(circulate(arr, 1)[0]).toBe(2);
    expect(circulate(arr, 1)[0]).toBe(2);
    expect(circulate(arr, 6)[0]).toBe(1);
    expect(circulate(arr, -1)[0]).toBe(5);
    expect(circulate(arr, -6)[0]).toBe(1);
  });
});
