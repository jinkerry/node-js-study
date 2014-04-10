var request = require("request");
var cheerio = require("cheerio");
 
request({
    uri: "http://www.baidu.com",
}, function(error, response, body) {
    var $ = cheerio.load(body);

    console.log($("#lg > img").attr("src"));
});