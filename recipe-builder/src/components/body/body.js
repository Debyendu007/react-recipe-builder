import React from "react";
import "./body.css";
import {LoginPage} from "../loginPage/login-page";
import {LandingPage} from "../landingPage/landing-page";
import Container from "react-bootstrap/Container";

function BodySection(props) {
  if(props.isLoggedIn) {
    return <LandingPage />
  }
  else {
    return <LoginPage />
  }
}

function Body(props) {
  return (
    <Container className="mt-62" fluid={true}>
      <BodySection isLoggedIn={props.isLoggedIn} />
    </Container>
  );
}

export {Body};