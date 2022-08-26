import React from "react";
import "../component_style/WeatherComponent.css";

export default function WeatherComponent(props){
    return (
        <div className={"bottom-info"}>
            <div className="curr-status">
                <div className="horizontal">
                    <div className="cell-2">
                    <div className="we-icon"><img src={require(`./icons/${props.main.toLowerCase()}.png`)}/></div>
                    </div>                    
                    <div className="cell-1">
                        <div className="province">{props.name}</div>
                        <div className="currDegree">{Math.floor(props.temp)}°C</div>
                    </div>
                </div>
                <div className="slider-link" onClick={props.sliderHandler}>show detail {'>>'} </div>
            </div>
            <div className="warning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio distinctio facilis iusto aspernatur voluptatem, vero consequuntur fuga praesentium ipsam vel exercitationem cumque minus porro inventore est maiores eum saepe hic ut autem, soluta quidem nisi! Architecto, magni? Consequatur delectus cumque natus ducimus et. Ea, dignissimos. Quidem non sed quo tempore quis fugiat a similique. Consequuntur aut velit accusamus eaque deleniti, numquam totam corporis, hic, amet illo quas nostrum quisquam itaque ab nulla quidem fuga quasi consectetur magni! Nulla quam cum adipisci dignissimos dolorem saepe quos, repellat iure animi maiores eum.
            </div>
        </div>
    );
}



