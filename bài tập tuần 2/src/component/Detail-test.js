import React from "react";
import '../css/Detail.css'

function Detailtest (props){
    return(
        <div className="Detail">
                    <div className="Detail__img">
                        <img src={require(`../image/${props.image}`).default} alt="HTML" />
                    </div>
                    <div className="Detail__information">
                        <div className = "Detail__information--name">
                            <h1>{props.Name}</h1> 
                        </div>
                        <div className="Detail__information--author">
                            <span> {props.author} </span>
                        </div>
                        <div className="Detail__information--content">
                            {props.content}
                        </div>
                    </div>
                </div>
    );
}

export default  Detailtest;