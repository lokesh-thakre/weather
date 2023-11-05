import React, {useState} from 'react'
import './App.css'
function App() {
  const apiKey = "5579ef6b543086c15cefb49095b1a8eb";

  // Define weatherData state and its updater function using useState
  const [weatherData, setWeatherData] = useState({});

  // Define city state and its updater function using useState
  const [city, setCity] = useState("");

  // Function to handle weather retrieval when the Enter key is pressed
  const getWeather = (event) => {
    if (event.key === "Enter") {
      // Fetch weather data from the OpenWeatherMap API
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(
        response => response.json() // Convert the response to JSON format
      ).then(
        data => {
          // data represents the JavaScript object parsed from the JSON response
          // Update the weatherData state with the retrieved weather data
          setWeatherData(data);
          // Clear the city input field
          setCity("");
        }
      );
    }
  };

  return (
    <div className='container'>
      <input className='input' placeholder='Enter City' onChange={e => setCity(e.target.value)} value={city} onKeyDown={getWeather}/>
    {typeof weatherData.main==="undefined" ?
    (
      <div>
        <p>Welcome to the weather App.Enter city to get the weather info</p>
      </div>
    ):
    (
      <div className='weather-data'>
        <p className="city">{weatherData.name}</p>
        <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
        <p className='weather'>{weatherData.weather[0].main}</p>
        {/* accesses the main property of the first item in the weather array within the weatherData object. */}
      </div>
    )}
    {weatherData.cod==="404" ? (
      <p>City Not Found</p>
    ):
    (
      <></>
    )}
    </div>
  )
}
export default App; 


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }


//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor} 
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App;