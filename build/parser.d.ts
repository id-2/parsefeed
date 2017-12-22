/// <reference types="feedparser" />
import * as feedparser from "feedparser";
/**
 * parse feed and return items (async)
 * @param URL feed url
 */
export declare function parseFeed(URL: string): Promise<feedparser.Item[]>;
