import React, {useEffect, useState} from "react";
import "./body.css";
import {useDispatch} from "react-redux";

import {LoginPage} from "../loginPage/login-page";
import {LandingPage} from "../landingPage/landing-page";
import Container from "react-bootstrap/Container";
import LoadingOverlay from 'react-loading-overlay';
import {Activating} from "./../../actions/activate";
import {ViewModal} from "./../../common/utils";
import {RegisterActivateResponse} from "./../../apiCalls/web-sdk-res";

function BodySection(props) {
  const dispatch = useDispatch();
  let loaderText = "";

  if(props.activated) {
    if(props.loggedIn) {
      return <LandingPage />
    }
    else {
      return <LoginPage />
    }
  }
  else {
    if(props.activationFailed) {
      let header = "Gadget Activation error";
      let body="Some error occured while activating your gadget";
      let iconPath="./../../assets/icons/warning.png";

      return ViewModal.ShowAlert(header, body, iconPath);
    }
    else {
      if(!props.activating) {
        dispatch(Activating());
        RegisterActivateResponse(dispatch);

        loaderText = "Activating Recipe builder";
      }
      else {
        loaderText = "Loading Recipe Player";
      }

      return (
        <CustomLoader
          show={true}
          text={loaderText}>
        </CustomLoader>
      )
    }
  }
}

function CustomLoader(props) {
  // const dispatch = useDispatch();
  let show = props.show;

  return (
    <LoadingOverlay
      className="page-loader"
      active={show}
      spinner
      text={props.text}>
    </LoadingOverlay>
  );
}

function Body(props) {
  return (
    <Container className="mt-62" fluid={true}>
      <BodySection activated={props.activated}
            loggedIn={props.loggedIn}
            activating={props.activating}
            activationFailed={props.activationFailed} />
    </Container>
  );
}

export {Body};