import React from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GarudaLogo from "./../../assets/icons/icon.png";

function MenuItem(props) {
  return (
    <font className="u-font-oswald">props.name</font>
  );
}
function HeaderOptions(props) {
  let UList = <ul id="top_navbar_right" className="nav navbar-nav navbar-right"></ul>

  if(!props.isLoggedIn) {
    return null;
  }

  return (
    <UList>
      <li id="userName" className="dropdown">
        <a className="garuda-navbar-item">
          <MenuItem name="WELCOME" />
        </a>
      </li>
      <li id="topmenu_btn_all_recipe" className="dropdown">
        <a className="garuda-navbar-item"
            title="Show my Recipes">
          <FontAwesomeIcon icon="home"></FontAwesomeIcon>
          <MenuItem name="MY RECIPES" />
        </a>
      </li>
      <li id="topmenu_btn_create_recipe" className="dropdown">
        <a className="garuda-navbar-item"
            title="Create Recipe">
          <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
          <MenuItem name="CREATE RECIPE" />
        </a>
      </li>
      <li id="topmenu_btn_logout" className="dropdown">
        <a className="dropdown-toggle garuda-navbar-item u-font-oswald"
            data-toggle="dropdown"
            href="javascript:void(0)">
          <FontAwesomeIcon icon="user"></FontAwesomeIcon>
          <span id="loggedin-iserName"
                className="u-font-oswald user-firstname"></span>
          <FontAwesomeIcon icon="carretDown"></FontAwesomeIcon>
        </a>
        <ul className="dropdown-menu"
            role="menu"
            aria-labledBy="topmenu_dropdown_user">
          <li>
            <a id="loggedin-userName"
                href="javascript:void(0)"
                title="Logout">
              <FontAwesomeIcon icon="signOut"></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </li>
    </UList>
  );
}

function Header(props) {
  return(
    <Navbar fixed="top" className="garuda-navbar-top">
      <Container>
        <div className="navbad-header">
          <Navbar.Brand>
            <img id="header-icon"
                  className="pull-left"
                  src={GarudaLogo}
                  alt="GARUDA"></img>
            <font className="u-font-oswald">RECIPE BUILDER</font>
          </Navbar.Brand>
        </div>
        <Collapse id="bs-example-navbar-collapse-1" className="navbar-collapse">
          <HeaderOptions isLoggedIn={props.isLoggedIn} />
        </Collapse>
      </Container>
    </Navbar>
  );
}

export {Header};