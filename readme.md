### Image downloader by selector

Use this to download X images from a URL that fits a css selector

```
var download = require('image-downloader-by-selector');

download({
    url: desiredURL,
    selector: "#cssSelector > img",
    attribute: "src",
    max: 1
    }, function (err, data) {
    console.log("error ", err);
    console.log("data ", data);
    });
```

It doesn't acctually download the images yet, but return an array of direct urls to them
