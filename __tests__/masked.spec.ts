import { mask } from "../src/index";

test("if value is masked to date", () => {
  const word = mask(`01022021`, "##/##/####");

  expect(word).toBe("01/02/2021");
});

test("if value is masked to brazilian document", () => {
  const word = mask(`98765432110`, "###.###.###-##");

  expect(word).toBe("987.654.321-10");
});
