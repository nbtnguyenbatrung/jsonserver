import React from "react";
import '../css/container.css';
import {Link} from 'react-router-dom';
function Container (props){
    return(
        <div className = "box">
            <div className="box__img">
                <img src={require(`../image/${props.img}`).default} alt="HTML" />
            </div>
            <div className="box__name">
                <span> {props.name} </span>
            </div>
            <div className="box__author">
                <span> {props.author} </span>
            </div>
            <div className="box__button">
                <button > 
                <Link to={"/Book/"+ props.id }><p> DETAIL </p> </Link> 
                </button>
            </div>
        </div>
    );
}

export default  Container;