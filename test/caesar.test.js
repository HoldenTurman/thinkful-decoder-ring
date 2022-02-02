//Write your tests here!

const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false with 0 shift", () => {
    expect(caesar("message")).to.equal(false);
  });

  it("should return false if value is greater than 25", () => {
    expect(caesar("messsage")).to.equal(false);
  });

  it("should return false if value is less than -25", () => {
    expect(caesar("message")).to.equal(false);
  });

  it("should encode the message", () => {
    expect(caesar("message", 3)).to.equal("phvvdjh");
  });

  it("should decode the message", () => {
    expect(caesar("phvvdjh", -3)).to.equal("message");
  });

  it("should leave spaces and symbols as is", () => {
    expect(caesar("a message.", 3)).to.equal("d phvvdjh.");
  });

  it("should leave capital letters alone", () => {
    expect(caesar("Message", 3)).to.equal("phvvdjh");
  });

  it("should handle shifts at the end of alphabet", () => {
    expect(caesar("z", 2)).to.equal("b");
  });
});
