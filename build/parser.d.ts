/// <reference types="got" />
/// <reference types="feedparser" />
import * as feedparser from "feedparser";
import * as got from "got";
/**
 * parse feed and return items (async)
 * @param URL feed url
 */
export declare function parseFeed(URL: string, option?: got.GotOptions<string | null>): Promise<feedparser.Item[]>;
