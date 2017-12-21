"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var feedparser = require("feedparser");
var request = require("request");
/**
 * parse feed and return items (async)
 * @param URL feed url
 */
function parseFeed(URL) {
    return new Promise(function (resolve, reject) {
        var items = [];
        var res;
        try {
            res = request({ url: URL, timeout: 20000 });
        }
        catch (e) {
            reject(e);
            return;
        }
        var fp = new feedparser({});
        fp.on("readable", function () {
            while (true) {
                var item = fp.read();
                if (!item) {
                    break;
                }
                items.push(item);
            }
        });
        fp.on("end", function () { return resolve(items); });
        fp.on("error", function (err) { return reject(err); });
        res.on("error", function (err) { return reject(err); });
        res.pipe(fp);
    });
}
exports.default = parseFeed;
