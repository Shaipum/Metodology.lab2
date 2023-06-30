const List = require("./main.js");

//length test
describe("method size:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("size method should return 0 for empty list", () => {
    expect(example.size()).toBe(0);
  });

  test("size method should return count of elements", () => {
    example.append("a");
    example.append("b");
    example.append("c");
    example.append("d");

    expect(example.size()).toBe(4);
  });
});

//append test
describe("method append:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("append method should add element to an empty list", () => {
    example.append("a");

    expect(example.get(0)).toBe("a");
    expect(example.size()).toBe(1);
  });

  test("append method should add element to an non-empty list", () => {
    example.append("a");
    example.append("b");

    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("b");
    expect(example.size()).toBe(2);
  });

  test("append method shouldn't add element with invalid type", () => {
    example.append("abc");
    example.append(1);
    example.append(true);
    example.append(null);
    example.append(undefined);
    example.append(Symbol());

    expect(example.size()).toBe(0);
  });
});
