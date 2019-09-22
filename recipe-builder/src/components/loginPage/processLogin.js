import React from "react";
import {useDispatch} from "react-redux";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {LoggingIn, LoginFailed, LoginSuccess} from "./../../actions/login";
import {Utility} from "./../../common/utils";

const LoginButton = (props) => {
  const dispatch = useDispatch();

  const dispatchLoggingEvent = () => {    
    dispatch(LoggingIn())
  }

  const makeLoginRequest = () => {
    if(Utility.isNullOrEmpty(props.username)) {

    }
  }

  const userNameError = () => {
    
  }

  if(props.loggingIn) {
    return (
      <Button id="btn-login"
              className="u-font-light u-font-c-light u-font-oswald"
              variant="outline-primary"
              disabled>
                <FontAwesomeIcon
                icon={faCog}
                spin />
                &nbsp;&nbsp;SIGNING IN
      </Button>
    );
  }
  else {
    return (
      <Button id="btn-login"
              className="u-font-light u-font-c-light u-font-oswald"
              variant="outline-primary"
              onClick={makeLoginRequest}>
              SIGN IN
      </Button>
    );
  }
}

export {
  LoginButton
};