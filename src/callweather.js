import React, {useState} from "react"
import axios from "axios"

export default function GetWeather(props){
    const [temperature, setTemperature] = useState(" ")
    const [humidity, setHumidity] = useState(" ")
    const [precipitation, setPrecipitation] = useState(" ")
    const [imgurl, setImgurl] = useState(" ");
    
    let key = `baf054037a66413c8db15210241703`

let URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${props.city}`

axios.get(`${URL}`).then(function (response){
    setImgurl(response.data.current.condition.icon);
    setPrecipitation(`precipitation: ${Math.round(response.data.current.precip_mm)} mm`);
    setHumidity(`Humidity: ${response.data.current.humidity}%`);
    setTemperature(`Temperature in ${props.city} is ${Math.round(response.data.current.temp_c)}°C`);
})

return(<div><h1>{temperature}</h1>
<p>{humidity}</p>
<p>{precipitation}</p>
<img src={imgurl} alt='weather-icon'></img></div>)


}
