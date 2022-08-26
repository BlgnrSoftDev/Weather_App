import React, { useState } from "react";
import "../component_style/Main.css";
import WeatherComponent from "./WeatherComponent";
import DetailedWeatherComponent from "./DetailedWeatherComponent.jsx";

export default function Main(props) {

    return (
        <div className="Main">
            <WeatherComponent
                name={props.name}
                main={props.main}
                temp={props.temp}
                sliderHandler={sliderHandler}
            />
            <DetailedWeatherComponent
                name={props.name}
                forecast={props.forecast}
                sliderHandler={sliderHandler}
            />
        </div>
    );
}


function sliderHandler(e){
    const container = document.querySelector(".container");
    container.classList.toggle("flex-start");
    const weatherComponent = document.querySelector(".bottom-info");
    weatherComponent.classList.toggle("bottom-info-closer");
    const secondWeatherComponent = document.querySelector(".outer-container");
    secondWeatherComponent.classList.toggle("outer-container-show"); 
}
