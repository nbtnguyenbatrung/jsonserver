import React from "react";
import Menu from "./menu";
import '../css/home.css';
import { Link } from "react-router-dom";
class home extends React.Component{
    render(){
        return(
            <div className="nav">
                <h3>
                    <Link to="/"> <i class="fas fa-book-open" /> </Link>
                </h3>
                
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