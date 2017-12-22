"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedparser = require("feedparser");
const request = require("request");
/**
 * parse feed and return items (async)
 * @param URL feed url
 */
function parseFeed(URL) {
    return new Promise((resolve, reject) => {
        const items = [];
        let res;
        try {
            res = request({ url: URL, timeout: 20000 });
        }
        catch (e) {
            reject(e);
            return;
        }
        const fp = new feedparser({});
        fp.on("readable", () => {
            while (true) {
                const item = fp.read();
                if (!item) {
                    break;
                }
                items.push(item);
            }
        });
        fp.on("end", () => resolve(items));
        fp.on("error", (err) => reject(err));
        res.on("error", (err) => reject(err));
        res.pipe(fp);
    });
}
exports.parseFeed = parseFeed;
