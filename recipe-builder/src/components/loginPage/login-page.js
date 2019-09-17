import React, { useState } from "react";

import "./login-page.css"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup, { InputGroupText } from "react-bootstrap/InputGroup";
import FromControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";

function StatusSection(props) {
  const [isActive, setIsActive] = useState(false);
  const [iserror, setIsError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  let class_name = "";

  if(!isActive) {
    return null;
  }
  else {
    class_name = "success";

    setStatusMessage("Login Successfull");
    setIsError(false);

    if(props.isError) {
      class_name = "error";
      setIsActive(true);
      setStatusMessage(props.message);
    }
    else {
      setIsActive(true);
    }
  }

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <font className={class_name}></font>
        </Col>
      </Row>
      <br />
    </React.Fragment>
  );
}

function BSFormInput() {
  return(
    <React.Fragment>
      <StatusSection isActive={false} isError={false} message="" />
      <Row className="justify-content-lg-center">
        <Col lg={true}>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="user-email-icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FromControl type="text"
                          placeholder="Enter Email"
                          aria-label="Email"
                          aria-describedby="user-email-icon"></FromControl>
            <InputGroup.Append>
              <Button variant="secondary">forgot</Button>
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
                          aria-describedby="user-password-icon"></FromControl>
            <InputGroup.Append>
              <Button variant="secondary">forgot</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-lg-center">
        <Col id="btn-login-container" lg="auto">
          <Button id="btn-login" className="u-font-light u-font-c-light u-font-oswald" variant="outline-primary">SIGN IN</Button>
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