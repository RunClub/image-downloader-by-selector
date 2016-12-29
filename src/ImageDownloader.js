var request = require('request');
var cheerio = require('cheerio');

var ImageDownloader = {};
    ImageDownloader.download = function ( options, cb ) {
        if (!options || !options.url || !options.selector) {
          return cb(new Error("Missing required params: options.url or options.class. \n Provided: ", options));
        }
        if(!options.max) {
          options.max = 10;
        }
        if(!options.attribute) {
          options.attribute = 'src';
        }

        request(options.url, function (err, response, html) {
          if (err || response.statusCode !== 200) {
            return cb(new Error("Error in http request for url "+options.url.toString()));
          }

          var results = [];
          var $ = cheerio.load(html);
          var elements = $(options.selector);

          console.log("Searching for ", options.selector);

          elements.each(function(i, element){
            console.log("i is "+(i+1)+" and max  is "+options.max);

            if(element && i+1 <= options.max){
              var imgURL = $(element).attr(options.attribute);
              results.push(imgURL);
            }

            if(i+1 === options.max || i+1 === elements.length) {
              console.log("Finish iterating for i ", i);
              cb(null, results);
              return false;
            } else {
              console.log("Didn't finish yet ", i);
              return true;
            }
          });
        });
    };

module.exports = ImageDownloader;