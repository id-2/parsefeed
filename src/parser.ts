import * as feedparser from "feedparser";
import * as request from "request";

/**
 * parse feed and return items (async)
 * @param URL feed url
 */
module.exports = function parseFeed(URL: string): Promise<feedparser.Item[]> {
    return new Promise((resolve, reject) => {
        const items: feedparser.Item[] = [];
        let res: request.Request;
        try {
            res = request({url: URL, timeout: 20000});
        } catch (e) {
            reject(e);
            return ;
        }
        const fp = new feedparser({});
        fp.on("readable", () => {
            while (true) {
                const item = fp.read();
                if (! item) { break; }
                items.push(item);
            }
        });
        fp.on("end", () => resolve(items));
        fp.on("error", (err: Error) => reject(err));
        res.on("error", (err: Error) => reject(err));
        res.pipe(fp);
    });
}
