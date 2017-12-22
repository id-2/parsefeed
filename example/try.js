const { parseFeed } = require("../build/parser");

const rss = "http://www.ruanyifeng.com/blog/atom.xml";

(async () => {
    const items = await parseFeed(rss);
    for (const item of items) {
        console.log(item.title);
    }
})();