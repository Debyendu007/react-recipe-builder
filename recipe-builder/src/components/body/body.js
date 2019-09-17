import React from "react";
import "./body.css";
import {useDispatch} from "react-redux";

import {LoginPage} from "../loginPage/login-page";
import {LandingPage} from "../landingPage/landing-page";
import Container from "react-bootstrap/Container";
import LoadingOverlay from 'react-loading-overlay';
import {Activating} from "./../../actions/activate";

function BodySection(props) {
  const dispatch = useDispatch();

  if(props.isActivated) {
    if(props.isLoggedIn) {
      return <LandingPage />
    }
    else {
      return <LoginPage />
    }
  }
  else {

    dispatch(Activating());

    return (
      <LoadingOverlay
        className="page-loader"
        active={true}
        spinner
        text="Loading...">
      </LoadingOverlay>
    )
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