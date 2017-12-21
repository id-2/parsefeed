the easy way to parse a feed/rss with promise/async function.

```
npm i parsefeed
```

```javascript
const parseFeed = require("parsefeed");

parseFeed("http://example.com/feed").then((items) => {
    for (const item of items) {
        console.log(item.title);
    }
});

(async () => {
    const items = await parseFeed("http://example.com/feed");
    for (const item of items) {
        console.log(item.title);
    }
})()
```