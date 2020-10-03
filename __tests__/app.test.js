const { add } = require("../app");

describe("Test add function", () => {
  test("First test case: ", () => {
    const sum = add(1, 1);
    expect(sum).toBe(2);
  });

  test("Second test case: ", () => {
    const sum = add(50, 50);
    expect(sum).toBe(100);
  });
});
