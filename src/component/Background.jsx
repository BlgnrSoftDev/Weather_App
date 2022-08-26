import React from "react";
import "../component_style/Background.css";

export default function Background(props) {
    return (
        <div className="backdrop-parent">
            <div className="backdrop"></div>
            <img className="background-pic" src={require(`./images/background/${props.main}.jpg`)} alt="background" />
        </div>
    );
}
