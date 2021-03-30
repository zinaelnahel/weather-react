import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [announcement, setAnnouncement] = useState(null);
  function handleSubmit1(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2cea381e738c66dcff2a5021f253b186&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function formatDate(timestamp) {
    let date = new Date(timestamp);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
  }

  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setAnnouncement(
      <ul>
        <li>{city}</li>
        <li> {formatDate(response.data.dt * 1000)}</li>
        <div className="image">
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </div>
        <li>{Math.round(response.data.main.temp)} °C</li>
        <div className="conditions">
          <li>{response.data.weather[0].description}</li>
          <li>Wind: {Math.round(response.data.wind.speed)}</li>
          <li>Humidity: {Math.round(response.data.main.humidity)} %</li>
        </div>
        <li></li>
      </ul>
    );
  }

  return (
    <form onSubmit={handleSubmit1}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
      <h2>{announcement}</h2>
    </form>
  );
}
