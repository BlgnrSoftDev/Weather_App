import React from "react";
import "../component_style/App.css";
import Background from "./Background.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import {
    WEATHER_API_KEY,
    WEATHER_API_URL,
    WEATHER_API_OPTIONS,
    GEO_DB_API_OPTIONS,
    GEO_DB_API_URL,
    sampleData,
} from "../api/config";
import { useState } from "react";


export default function App(props) {
    const [state, setState] = useState(sampleData);

    const locationHandler = (ev) => {
        const str = ev.target.value;
        const optionField = document.querySelector(".option");

        
        if (str !== "" && str !== undefined) {
            if(str.length < 4) return;
            new Promise((resolve, reject) => {
                return setTimeout(() => {
                    resolve("");
                }, 1500);
            })
                .then((re) => {
                    return getLocationData(str);
                })
                .then((re) => {
                    console.log(re);
                    optionField.innerText = re.data[0].name;
                    optionField.value = `${re.data[0].name},${re.data[0].latitude},${re.data[0].longitude}`;
                    if (optionField.classList.contains("option-closer")) {
                        optionField.classList.remove("option-closer");
                    }
                })
        } else {
            if (!optionField.classList.contains("option-closer")) {
                optionField.classList.add("option-closer");
            }
        }
    };


    const updater = (e) => {
        const searchBar = document.querySelector(".search-bar");
        const optionField = document.querySelector(".option");
        const [name, lat, lon] = optionField.value.split(",");
        searchBar.value = name;
        optionField.classList.add("option-closer");
        getWeatherData({lat: lat, lon: lon})
            .then((re) => {
                setState(re);
            });
    }

    return (
        <div className="view">
            <Background main={state.list[0].weather[0].main} />
            <div className={"container"}>
                <Header updateWeatherAndLocation={updater} findLocation={locationHandler} />
                <Main
                    forecast={state.list}
                    name={state.city.name}
                    main={state.list[0].weather[0].main}
                    temp={state.list[0].main.temp}
                />
            </div>
        </div>
    );
}


async function getLocationData(namePrefix) {
    console.log(`${GEO_DB_API_URL}namePrefix=${namePrefix}&minPopulation=100&limit=1`);
    return (await fetch(`${GEO_DB_API_URL}namePrefix=${namePrefix}&minPopulation=200&limit=1&countryIds=tr`, GEO_DB_API_OPTIONS)).json();
}

async function getWeatherData(loc) {
    return (await fetch(
        `${WEATHER_API_URL}lat=${loc.lat}&lon=${loc.lon}&units=metric&cnt=5&appid=${WEATHER_API_KEY}`,
        WEATHER_API_OPTIONS
    )).json();
}
