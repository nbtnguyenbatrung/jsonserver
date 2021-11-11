import React from "react";
import Menu from "./menu";
import '../css/home.css';
class home extends React.Component{
    render(){
        return(
            <div className="nav">
                <h3><a href="/"> Logo </a> </h3>
                <ul className="nav__link">
                    <li> <Menu name = "HTML"/> </li>
                    <li> <Menu name = "CSS"/> </li>
                    <li> <Menu name = "JavaScript"/> </li>
                    <li> <Menu name = "Reactjs"/> </li>
                    <li> <Menu name = "Nodejs"/> </li>
                </ul>
            </div>
        )
    }
}

export default home;