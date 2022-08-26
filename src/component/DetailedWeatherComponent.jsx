import React from "react";
import "../component_style/DetailedWeatherComponent.css";

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export default function DetailedWeatherComponent({
    forecast,
    name
}) {
    return (
        <div className={"outer-container"}>
            <div className="weather-detail">
                <div className="desc">
                    <div className="wd">
                        <div className="wd-title">Weather in {name}</div>
                        <div className="wd-degree">{Math.floor(forecast[0].main["feels_like"])}°C</div>
                        <div className="wd-prop-name">Feels like</div>
                    </div>
                    <div className="wd-icon">
                        <img
                            src={require(`./icons/${forecast[0].weather[0].main.toLowerCase()}.png`)}
                            alt="weather icon"
                        />
                    </div>
                </div>
                <div className="row">
                    <span className="label">Pressure:</span>
                    <span className="value">{forecast[0].main.pressure} hPa</span>
                </div>
                <div className="row">
                    <span className="label">Wind:</span>
                    <span className="value">{forecast[0].wind.speed} m/s</span>
                </div>
                <div className="row">
                    <span className="label">Humidity:</span>
                    <span className="value">{forecast[0].main.humidity}%</span>
                </div>
                <div className="row">
                    <span className="label">High / Low:</span>
                    <span className="value">
                        {forecast[0].main.temp_max}°C / {forecast[0].main.temp_min}°C
                    </span>
                </div>
                <div className="row">
                    <span className="label">Visibility:</span>
                    <span className="value">{forecast[0].visibility} m</span>
                </div>
                <div className="daily-weather">
                    {getCells(forecast)}
                </div>
            </div>
        </div>
    );
}

function getCells(forecast) {
    let counter = 324;
    const jsxArr = [];
    let currDay = (new Date(forecast[0]["dt_txt"])).getDay();
    let currStr = "Today";
    for (const item in forecast) {
        jsxArr.push(
                <div className="cell" key={++counter}>
                    <div className="day-info">{currStr}</div>
                    <img src={require(`./icons/${forecast[item].weather[0].main.toLowerCase()}.png`)} alt="weather icon" />
                    <div className="day-degree">{Math.floor(forecast[item].main["temp_max"])}°C / {Math.floor(forecast[item].main["temp_min"])}°C</div>
                </div>
        );
        currStr = days[(++currDay) % 7];
    }

    return jsxArr;
}
