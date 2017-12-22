the easy way to parse a feed/rss with promise/async function, powers by [feedparser]("https://www.npmjs.com/package/feedparser")

# Installation

```
npm i parsefeed
```

# How to use

```javascript
const parseFeed = require("parsefeed");

parseFeed("http://example.com/feed").then((items) => {
    for (const item of items) {
        console.log(item.title);
        console.log(item.meta);
    }
});

(async () => {
    const items = await parseFeed("http://example.com/feed");
    for (const item of items) {
        console.log(item.title);
        console.log(item.meta);
    }
})()
```

# List of item properties
- `title`
- `description` (frequently, the full article content)
- `summary` (frequently, an excerpt of the article content)
- `link`
- `origlink` (when FeedBurner or Pheedo puts a special tracking url in the link property, origlink contains the original link)
- `permalink` (when an RSS feed has a guid field and the isPermalink attribute is not set to false, permalink contains the value of guid)
- `date` (most recent update)
- `pubdate` (original published date)
- `author`
- `guid` (a unique identifier for the article)
- `comments` (a link to the article's comments section)
- `image` (an Object containing url and title properties)
- `categories` (an Array of Strings)
- `source` (an Object containing url and title properties pointing to the original source for an article; see the RSS Spec for an explanation of this element)
- `enclosures` (an Array of Objects, each representing a podcast or other enclosure and having a url property and possibly type and length properties)
- `meta` (an Object containing all the feed meta properties; especially handy when using the EventEmitter interface to listen to article emissions)

    - `title`
    - `description`
    - `link` (website link)
    - `xmlurl` (the canonical link to the feed, as specified by the feed)
    - `date` (most recent update)
    - `pubdate` (original published date)
    - `author`
    - `language`
    - `image` (an Object containing url and title properties)
    - `favicon` (a link to the favicon -- only provided by Atom feeds)
    - `copyright`
    - `generator`
    - `categories` (an Array of Strings)

(refer: [feedparser's document](https://www.npmjs.com/package/feedparser#list-of-meta-properties))