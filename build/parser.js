"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedparser = require("feedparser");
const stream = require("stream");
const got = require("got");
/**
 * parse feed and return items (async)
 * @param URL feed url
 */
function parseFeed(URL, option) {
    return new Promise((resolve, reject) => {
        const items = [];
        const res = got.stream(encodeURI(URL), option);
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
/**
 * parse feed and return items (async)
 */
function parseXml(xml) {
    return new Promise((resolve, reject) => {
        const items = [];
        const s = new stream.Readable();
        s.push(xml);
        s.push(null);
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
        s.on("error", (err) => reject(err));
        s.pipe(fp);
    });
}
exports.parseXml = parseXml;
