const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//options for user input
const argv = yargs.options({
    a: {
        demand: true, 
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;


geocode.geocodeAddress(argv.address, function(errorMessage, results){
    if (errorMessage){
        console.log(errorMessage);
    }
       
    console.log(results.address)

    weather.getWeather(results.latitude,results.longitude, function(errorMessage, weatherResults){
        if (errorMessage){
            console.log(errorMessage);
        } 
    
        console.log(`It is currently : ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
    });
});



