// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  const newAlpha = "xoyqmcgrukswaflnthdjpzibev";

  it("should return false is substitution alphabet is missing", () => {
    expect(substitution(newAlpha)).to.equal(false);
  });
  it("should return false if it doesn't have 26 characters", () => {
    expect(substitution("message", "short", "long")).to.equal(false);
  });

  it("should return false if alphabet contains duplicate characters", () => {
    expect(substitution("message", "xoyqmxgruksswwaflntthdjjpzibev")).to.equal(
      false
    );
  });

  it("should encode message", () => {
    expect(substitution("message", newAlpha)).to.equal("amddxgm");
  });

  it("should should leave spaces alone", () => {
    expect(substitution("my message", newAlpha)).to.equal("ae amddxgm");
  });

  it("should work with any kind of unique characters or symbols", () => {
    expect(substitution("ckww.hk", newAlpha)).to.equal("ysii.rs");
  });

  it("should decode message", () => {
    expect(substitution("cjhhuwj", newAlpha)).to.equal("ykrrpik");
  });
});
