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

//insert test
describe("method insert:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("insert method should insert element to an empty list", () => {
    example.insert("a", 0);
    expect(example.get(0)).toBe("a");
    expect(example.size()).toBe(1);
  });

  test("insert method should insert element to an non-empty list", () => {
    example.append("a");
    example.append("b");
    example.append("c");
    example.insert("d", 1);
    expect(example.get(1)).toBe("d");
    expect(example.size()).toBe(4);
  });

  test("insert method shouldn't insert element with invalid type", () => {
    example.insert("abc", 0);
    example.insert(1, 0);
    example.insert(true, 0);
    example.insert(null, 0);
    example.insert(undefined, 0);
    example.insert(Symbol(), 0);

    expect(example.get(0)).toBe(undefined);
    expect(example.size()).toBe(0);
  });

  test("insert method should throw error for element with invalid index", () => {
    expect(() => example.insert("a", -1)).toThrow("Invalid index");
    expect(() => example.insert("b", 10)).toThrow("Invalid index");
    expect(() => example.insert("a", "abc")).toThrow("Invalid index");
    expect(() => example.insert("b", true)).toThrow("Invalid index");
    expect(() => example.insert("c", null)).toThrow("Invalid index");
    expect(() => example.insert("d", Symbol())).toThrow("Invalid index");
  });
});

//delete test
describe("method delete:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("delete method should delete element", () => {
    example.delete(1);
    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("c");
    expect(example.size()).toBe(2);
  });

  test("delete method should return deleted element", () => {
    expect(example.delete(0)).toBe("a");
    expect(example.delete(0)).toBe("b");
    expect(example.delete(0)).toBe("c");
  });

  test("delete method should throw error for element with invalid index", () => {
    expect(() => example.delete(-1)).toThrow("Invalid index");
    expect(() => example.delete(3)).toThrow("Invalid index");
    expect(() => example.delete("abc")).toThrow("Invalid index");
    expect(() => example.delete(true)).toThrow("Invalid index");
    expect(() => example.delete(null)).toThrow("Invalid index");
    expect(() => example.delete(Symbol())).toThrow("Invalid index");
  });
});

//deleteAll test
describe("method deleteAll:", () => {
  let example;

  beforeEach(() => {
    example = new List();
  });

  test("deleteAll method should delete elements with same value", () => {
    example.append("a");
    example.append("b");
    example.append("a");
    example.append("c");
    example.append("a");

    example.deleteAll("a");

    expect(example.size()).toBe(2);
    expect(example.get(0)).toBe("b");
    expect(example.get(1)).toBe("c");
  });

  test("deleteAll method should do nothing if list is empty", () => {
    example.deleteAll("d");

    expect(example.get(0)).toBe(undefined);
    expect(example.size()).toBe(0);
  });

  test("deleteAll method shouldn't delete elements with wrong value", () => {
    example.append("a");
    example.append("b");

    example.deleteAll("d");
    expect(example.size()).toBe(2);
  });
});

//get test
describe("method get:", () => {
  let example;

  beforeEach(() => {
    example = new List();
    example.append("a");
    example.append("b");
    example.append("c");
  });

  test("get method should return element by index", () => {
    expect(example.get(0)).toBe("a");
    expect(example.get(1)).toBe("b");
    expect(example.get(2)).toBe("c");
  });

  test("get method should throw error for element with invalid index", () => {
    expect(() => example.get(-1)).toThrow("Invalid index");
    expect(() => example.get(3)).toThrow("Invalid index");
    expect(() => example.get("abc")).toThrow("Invalid index");
    expect(() => example.get(true)).toThrow("Invalid index");
    expect(() => example.get(null)).toThrow("Invalid index");
    expect(() => example.get(undefined)).toThrow("Invalid index");
    expect(() => example.get(Symbol())).toThrow("Invalid index");
  });
});
