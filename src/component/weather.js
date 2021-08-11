import React, { useState, useEffect } from 'react';
import Weathercard from "./weathercard";
import "./weather.css";

const Weather = () => {
    const [searchValue, setSearchValue] = useState("Pune");
    const [temperatureInfo, setTemperatureInfo] = useState({});

    const getWeatherApi = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=73f1cedc657c452edc7244031092a541`;

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main; 
            const {main: weathermood} = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const {country, sunset} = data.sys;

            const myAllWeatherReport = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset,
            };
            setTemperatureInfo(myAllWeatherReport);
            console.log(temp);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherApi();
    }, []);
    

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="Search" placeholder="Search" autoFocus id="search" className="searchTerm" value={searchValue} onKeyPress={event => {
                        if (event.key === 'Enter') {
                            getWeatherApi();
                        }
                    }} onChange={(e) => setSearchValue(e.target.value)}></input>
                    <button className="searchButton" type="button" onClick={getWeatherApi}>Search</button>
                </div>
            </div>
            < Weathercard temperatureInfo={temperatureInfo} />
        </>
    )
}

export default Weather;
