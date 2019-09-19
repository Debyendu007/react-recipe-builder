import React, { useEffect } from "react";
import "./body.css";
import {useDispatch} from "react-redux";

import {LoginPage} from "../loginPage/login-page";
import {LandingPage} from "../landingPage/landing-page";
import Container from "react-bootstrap/Container";
import LoadingOverlay from 'react-loading-overlay';
import {Activating} from "./../../actions/activate";
import {ViewModal} from "./../../common/utils";

function BodySection(props) {
  console.log(props)
  if(props.isActivated) {
    if(props.isLoggedIn) {
      return <LandingPage />
    }
    else {
      return <LoginPage />
    }
  }
  else {
    if(props.isActivationFailed) {
      let header = "Gadget Activation error";
      let body="Some error occured while activating your gadget";
      let iconPath="/assets/icons/warning.png";

      return ViewModal.ShowAlert(header, body, iconPath);
    }
    else {
      return (
        <CustomLoader
          show={true}
          isActivating={props.isActivating}>
        </CustomLoader>
      )
    }
  }
}

function CustomLoader(props) {
  const dispatch = useDispatch();
  let show = props.show;

  useEffect(() => {
    dispatch(Activating());
  });

  let text = "Activating Recipe Builder";

  if(!props.isActivating) {
    text = "Starting Recipe Builder";
  }

  return (
    <LoadingOverlay
      className="page-loader"
      active={show}
      spinner
      text={text}>
    </LoadingOverlay>
  );
}

function Body(props) {
  return (
    <Container className="mt-62" fluid={true}>
      <BodySection isActivated={props.isActivated}
            isLoggedIn={props.isLoggedIn}
            isActivating={props.isActivating}
            isActivationFailed={props.isActivationFailed} />
    </Container>
  );
}

export {Body};