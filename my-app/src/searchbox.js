import React, {useState} from "react"
import "./searchbox.css"
import GetWeather from "./callweather.js"
export default function Searchbox(){
let [city, setCity] = useState(` `)
let [city1, setCity1] = useState(` `)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Temperature in ${city} is...`)
        setCity1(city);
        
    }
        
return(
    <div>
        <form className="searchbox" onSubmit={handleSubmit}>
            <input className="input"type="text" name="name" placeholder="Enter a city..." onChange = { (e) => setCity(e.target.value)} />
            <input className="button"type="submit" value="Search" /></form>
            
              <GetWeather city={city1}/>
          
    </div>
            

)
}