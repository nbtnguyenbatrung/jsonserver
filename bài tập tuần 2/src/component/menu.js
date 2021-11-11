import React from "react";
import {NavLink} from 'react-router-dom';
function Menu(props){
    return (
        <NavLink  activeStyle={{
            backgroundColor : 'white',
            color : 'red'
        }}  to={"/" + props.name }><p> {props.name} </p> </NavLink >
    )
}

export default Menu;