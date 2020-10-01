import { add } from "../app";

describe("Test add function", () => {
  test("First test case: ", () => {
    const sum = add(1, 2);
    expect(sum).toBe(3);
  });

  test("Second test case: ", () => {
    const sum = add(50, 50);
    expect(sum).toBe(100);
  });
});
