const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')

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

    console.log(JSON.stringify(results, undefined, 2))
});



