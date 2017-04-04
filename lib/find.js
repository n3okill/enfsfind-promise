/**
 * @project enfsfind-promise
 * @filename find.js
 * @description entry point for enfsfind module with promises
 * @author Joao Parreira <joaofrparreira@gmail.com>
 * @copyright Copyright(c) 2017 Joao Parreira <joaofrparreira@gmail.com>
 * @licence Creative Commons Attribution 4.0 International License
 * @createdAt Created at 24-02-2017.
 * @version 0.0.1
 */


"use strict";

const enfsfind = require("enfsfind");

module.exports = enfsfind;
module.exports.findP = function (path, opt) {
    return new Promise((resolve, reject) => {
        enfsfind.find(path, opt, (err, list) => {
            return err ? reject(err) : resolve(list);
        });
    });
};
