import React from "react";
import "./body.css";
import {useDispatch} from "react-redux";

import {LoginPage} from "../loginPage/login-page";
import {LandingPage} from "../landingPage/landing-page";
import Container from "react-bootstrap/Container";
import LoadingOverlay from 'react-loading-overlay';
import {Activating} from "./../../actions/activate";
import {ViewModal} from "./../../common/utils";

function BodySection(props) {
  const dispatch = useDispatch();

  if(props.isActivated) {
    if(props.isActivationFailed) {
      let header = "Gadget Activation error";
      let body="Some error occured while activating your gadget";
      let iconPath="/assets/icons/warning.png";

      return ViewModal.ShowAlert(header, body, iconPath);
    }
    else {
      if(props.isLoggedIn) {
        return <LandingPage />
      }
      else {
        return <LoginPage />
      }
    }
  }
  else {
    let text = "Activating Recipe Builder";

    if(!props.isActivating) {
      text = "Starting Recipe Builder"
      dispatch(Activating());
    }

    return (
      <LoadingOverlay
        className="page-loader"
        active={true}
        spinner
        text={text}>
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