import React, { useEffect } from 'react';

const Weathercard = ({temperatureInfo}) => {
    const [weatherState, setweatherState] = React.useState("");
    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset,
    } = temperatureInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}:${date.getSeconds()}`;
    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setweatherState("wi-day-cloudy");                    
                    break;
                case "Haze":
                    setweatherState("wi-fog");                    
                    break;
                case "Clear":
                    setweatherState("wi-day-sunny");                    
                    break;
                case "Mist":
                    setweatherState("wi-night-fog");                    
                    break;
            
                default:
                    setweatherState("wi-day-sunny");                    
                    break;
            }
        }
    }, [weathermood])

    return (
        <>
            <section className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{ new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timestr} PM <br /> Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity} <br /> Humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{pressure} <br /> Pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed} <br /> Wind</p>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Weathercard;
