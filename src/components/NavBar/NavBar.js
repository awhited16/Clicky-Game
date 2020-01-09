import React from "react";
import "./NavBar.css";

//stateless component
const NavBar = props => <div className="navbar">{props.children}</div>;

export default NavBar;