/**
 * Example of use:
 * var download = ImageDownloader.download;
 * var options = {
 *    url: pageURL,
 *    class: '.imageClass',
 *    max: 1
 * }
 * download(options, function(err, data){
 *  //results go here
  * });
 */


var ImageDownloader = require('./src/ImageDownloader');

module.exports = ImageDownloader.download;