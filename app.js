const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lamboard%20street%20philadelphia',
    json: true
}, function(error,response,body){
    console.log(body);
});

console.log("im first");