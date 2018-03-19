
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
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

geocode.geocodeAddress(argv.address,(errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        weather.getWeather(results.latitude, results.longitude, (weatherErrorMessage,weatherResults) => {
            if(weatherErrorMessage){
                console.log(weatherErrorMessage);
            }else{
                console.log(`Temperature at ${results.address} is ${weatherResults.temperature} but It feels like ${weatherResults.apparentTemperature}.`)
            }
        });
    }
});



