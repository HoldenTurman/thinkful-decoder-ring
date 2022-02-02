// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode message", () => {
    expect(polybius("message")).to.equal("23513434112251");
  });

  it("should decode message", () => {
    expect(polybius("message")).to.equal("23513434112251");
  });

  it("should leave spaces as is", () => {
    expect(polybius("my message")).to.equal("2345 23513434112251");
  });

  it("should translate i or j into 42", () => {
    expect(polybius("this message")).to.equal("44324234 23513434112251");
  });

  it("should return false if all numbers are odd", () => {
    expect(polybius("12345", false)).to.equal(false);
  });

  it("should ignore alternate characters", () => {
    expect(polybius("message!?")).to.equal("23513434112251");
  });

  it("should translate 42 into both i and j", () => {
    expect(polybius("this message")).to.equal("44324234 23513434112251");
  });

  it("should ignore capital letters", () => {
    expect(polybius("Message")).to.equal("23513434112251");
  });
});
