import React, { useState } from "react";

import "./login-page.css"

import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FromControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";

import {FORGOT_USERNAME, FORGOT_PASSWORD} from "./../../common/external-links";
import {LIMITS} from "./../../common/constants";
import {LoginButton} from "./processLogin";

function StatusSection(props) {
  let class_name = "";

  if(!props.isActive) {
    return null;
  }
  else {
    class_name = "success";

    if(props.isError) {
      class_name = "error";
    }
  }

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <font className={class_name}>{props.message}</font>
        </Col>
      </Row>
      <br />
    </React.Fragment>
  );
}

function BSFormInput() {
  const loginState = useSelector(state => state.loginReducer);

  const redirectToForgotUserName = () => {
    window.open(FORGOT_USERNAME, "_blank");
  }

  const redirectToForgotPassword = () => {
    window.open(FORGOT_PASSWORD, "_blank");
  }

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (e) => {
    setUserName(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  return(
    <React.Fragment>
      <StatusSection isActive={false} isError={false} message={loginState.loginReqMessage} />
      <Row className="justify-content-lg-center">
        <Col lg={true}>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="user-email-icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FromControl type="email"
                          placeholder="Enter Email"
                          aria-label="Email"
                          aria-describedby="user-email-icon"
                          maxLength={LIMITS.USERNAME.MAX}
                          onChange={updateUserName}></FromControl>
            <InputGroup.Append>
              <Button variant="secondary" onClick={redirectToForgotUserName}>forgot</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row>
      <Col lg={true}>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="user-password-icon">
                <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FromControl type="password"
                          placeholder="Enter Password"
                          aria-label="Password"
                          aria-describedby="user-password-icon"
                          onChange={updatePassword}></FromControl>
            <InputGroup.Append>
              <Button variant="secondary" onClick={redirectToForgotPassword}>forgot</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-lg-center">
        <Col id="btn-login-container" lg="auto">
          <LoginButton loggingIn={loginState.loggingIn} username={username} password={password} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

function Card() {
  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <FontAwesomeIcon className="u-font-c-light" icon={faUser} size="4x"></FontAwesomeIcon>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <b><h3 className="u-font-oswald">SIGN IN HERE</h3></b>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col md="auto">
        <font className="sign-in-page-text">
          Sign in to Recipe Builder with your Garuda User account or Garuda Developer account
        </font>
        </Col>
      </Row>
      <br />
      <BSFormInput />
    </Container>
  );
}

function LoginPage() {
  return (
    <Container id="login-card" className="card-center" fluid={false}>
      <Row className="justify-content-md-center card-body-content">
        <Col md="auto">
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export {LoginPage};