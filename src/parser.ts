import * as feedparser from "feedparser";
import * as got from "got";

/**
 * parse feed and return items (async)
 * @param URL feed url
 */
export function parseFeed(URL: string, option?: got.GotOptions<string|null>): Promise<feedparser.Item[]> {
    return new Promise((resolve, reject) => {
        const items: feedparser.Item[] = [];
        const res = got.stream(URL, option);
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