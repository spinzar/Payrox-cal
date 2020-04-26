"use strict";
const payrox = require("../index");
const chai = require("chai");
chai.should();

describe("index.js", () => {
    it("payrox-1", () => {
        payrox.add(1000, 9, 1, 4, false, 0).should.equal(10000);
    });
    it("payrox-2", () => {
        payrox.add(1245, 12, 2, 2, true, 2).should.equal(20792);
    });
});
