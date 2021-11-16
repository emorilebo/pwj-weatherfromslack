
import "./App.css";
import instance from "./axios";
import React, { useState } from "react";

/**
 * 1 check for city and temperature when conditionally rendering
 * 2 make the app look nice
 * 3 display other weather data you find useful
 * 4 post in slack
 */

const APIkey = 'c6105ea9603d94baa65e2f823f08e5a0'

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  const getWeather = async ()=>{
    const response = await instance.get(`/weather?q=${city}&appid=${APIkey}&units=imperial`)
    setTemperature(response.data.main.temp)
  }

  console.log(city)
  return (
    <div className="App">
      {temperature ? (
        <h2>Hello {city} temperature is {temperature}</h2>
      ):(
        <h1>Hello World</h1>
      )}
      <input
        placeholder={"Type in a city..."}
        value={city}
        onChange={(e) => setCity(e.target.value)}

      />
      <button onClick={()=>getWeather()}>Get weather</button>
    </div>
  );
}

export default App;
