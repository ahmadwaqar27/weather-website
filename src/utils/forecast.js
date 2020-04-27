const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=110e12830fcd9cb8c13b6d119066c15a&query=' + latitude + '&' + longitude+'&units=f'
   //const url = 'http://api.openweathermap.org/data/2.5/uvi/forecast?appid=a38cd5a6e3805baa6827424afb155312&' + latitude + '&' + longitude+''
    // const url = 'http://api.openweathermap.org/data/2.5/onecall?' + latitude + '&' + longitude + '&appid=a38cd5a6e3805baa6827424afb155312'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect the weather server', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+". It is currently "+body.current.temperature+" Degree out, Its feel like "+body.current.feelslike+" Degrees out" )
        }
    })
}

module.exports = forecast