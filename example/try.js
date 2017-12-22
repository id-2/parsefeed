const parsefeed = require("../build/parser");

const rss = "http://www.ruanyifeng.com/blog/atom.xml";

(async () => {
    const items = await parsefeed(rss);
    for (const item of items) {
        console.log(item.title);
    }
    console.log(items[0].meta);
})();