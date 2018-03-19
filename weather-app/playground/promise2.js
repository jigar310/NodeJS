const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        const encodedAddress = encodeURIComponent(address);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB6MePzUPr1LDbmlG3UEa1lnOvkGNSvUOI&address=${encodedAddress}`,
    json: true
}, (error,response,body) => {
    if(error){
        reject('Unable to connect to google servers');
    }else if(body.status === 'ZERO_RESULTS') {
        reject(`Unable to find address: ${address}`);
    } else if (body.status === 'OK'){
        resolve({
            address: body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});
    });
}

geocodeAddress('1050 Markham Road').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage) => {
    console.log(errorMessage);
})