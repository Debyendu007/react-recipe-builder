import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import GarudaLogo from "./../../assets/icons/icon.png";

function HeaderOptions(props) {
  if(!props.isLoggedIn) {
    return null;
  }

  return (
    <Navbar.Collapse id="garuda-responsive-navbar-nav">
      <Nav id="header-nav-links" className="justify-content-end">
        <Nav.Link>
          <FontAwesomeIcon icon={faHome} className="u-font-oswald" />
          &nbsp;
          <Navbar.Text className="u-font-light u-font-c-light u-font-oswald">MY RECIPES</Navbar.Text>
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faPlus} className="u-font-oswald" />
          &nbsp;
          <Navbar.Text className="u-font-light u-font-c-light u-font-oswald">CREATE RECIPE</Navbar.Text>
        </Nav.Link>
        <Nav.Link>
          <div>
            <NavDropdown id="garuda-header-dropdown" title="User Name">
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}

function Header(props) {
  return(
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="garuda-navbar-top">
      <Navbar.Brand>
        <img id="header-icon"
                className="pull-left"
                src={GarudaLogo}
                alt="GARUDA" />
        <font className="u-font-light u-font-c-light u-font-oswald header-font">{"RECIPE BUILDER"}</font>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsice-navbar-nav" />
      <HeaderOptions isLoggedIn={props.isLoggedIn} />
    </Navbar>
  );
}

export {Header};