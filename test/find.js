/**
 * @project enfsfind-promise
 * @filename find.js
 * @description async methods for finding items inside directories with promises
 * @author Joao Parreira <joaofrparreira@gmail.com>
 * @copyright Copyright(c) 2016 Joao Parreira <joaofrparreira@gmail.com>
 * @licence Creative Commons Attribution 4.0 International License
 * @createdAt Created at 18-02-2016.
 * @version 0.0.1
 */

"use strict";

/* global describe, it*/

const nodePath = require("path");
const find = require("../");

describe("enfsfind-promise async", function () {
    const tmpPath = nodePath.join(__dirname, "..", "lib");
    it("should list files", function () {
        return find.findP(tmpPath).then(function (list) {
            list.length.should.be.equal(2);
        });
    });
    it("should list and filter files with regex", function () {
        return find.findP(tmpPath, /async/gi).then(function (list) {
            list.length.should.be.equal(0);
        });
    });
    it("should list and filter files with function", function () {
        return find.findP(tmpPath, (path) => /\.js/gi.test(path)).then(function (list) {
            list.length.should.be.equal(1);
        });
    });
    it("should list and filter files with regex", function () {
        return find.findP(tmpPath, /lib/).then(function (list) {
            list.length.should.be.equal(2);
        });
    });
});
