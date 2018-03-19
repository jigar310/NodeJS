const request = require('request');

var getWeather = (latitude,longitude, callback) => {
request({
    url:`https://api.darksky.net/forecast/6732a872059d000c7316ec6fab459935/${latitude},${longitude}`,
    json: true
}, (error,response,body) => {
    if(!error && response.statusCode === 200){
        callback(undefined,{
            apparentTemperature:body.currently.apparentTemperature,
            temperature:body.currently.temperature
        });
    }else {
        callback('Unable to fetch weather.');
    } 
});
};

module.exports = {
    getWeather
}