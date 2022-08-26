import React from "react";
import logo from  "./images/REMMSOFT.png";
import "../component_style/Header.css";

export default function Header(props){
    return (
    <header>     
        <img src={logo} alt="company logo" className="logo" onClick={() => {document.location.reload()}}/>
        <div className="sb-container">
            <input type="text" className="search-bar" placeholder="Enter any Location" onInput={(e) => {props.findLocation(e)}}/>
            <div className="option option-closer" onClick={(e) => { props.updateWeatherAndLocation(e) }}>Ankara</div>
        </div>
        <div className="nav"><a href="#">Privacy & Policy</a></div>
    </header>
    
    );
}