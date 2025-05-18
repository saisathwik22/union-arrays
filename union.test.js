const union = require("./index.js");

describe("union()", () => {
  test("handles primitive numbers", () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("handles strings", () => {
    expect(union(["a"], ["b"])).toEqual(["a", "b"]);
  });

  test("handles number and string as different", () => {
    expect(union([1], ["1", 1])).toEqual([1, "1"]);
  });

  test("handles objects", () => {
    expect(union([{ a: { b: 10 } }], [{ a: { b: 20 } }])).toEqual([
      { a: { b: 10 } },
      { a: { b: 20 } },
    ]);
  });

  test("handles deeply nested objects", () => {
    const obj1 = { b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } };
    const obj2 = { b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } };
    expect(union([obj1, 2], [obj2, "2"])).toEqual([obj1, 2, "2"]);
  });

  test("handles arrays of arrays", () => {
    expect(union([[1, 2]], [[1, 2], [3]])).toEqual([[1, 2], [3]]);
  });

  test("handles empty arrays", () => {
    expect(union([], [])).toEqual([]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [1, 2])).toEqual([1, 2]);
  });
});
