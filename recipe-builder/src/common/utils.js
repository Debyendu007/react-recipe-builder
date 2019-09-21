import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import WarningIcon from "./../assets/icons/warning.png";

const Utility = {
  isUndefinedOrEmptyObject : (object) => {
    if(typeof object ===	typeof undefined || null === object || object.length === 0) {
      return true;
    }
    
    return false;
  },
  isWebSDKInitiated : () => {
    let _socket = window.garudapro.webapi.scylla.connnection.socket;
	
	  return ( !Utility.isUndefinedOrEmptyObject(_socket) );
  },
  isNullOrEmpty : (data) => {
    console.log(typeof data)
    if(typeof undefined === typeof data  || null === data || "" === data || "" === data.trim()) {
      return true;
    }
    
    return false;
  }
}

const ViewModal = {
  ShowAlert : (header=null, body=null, icon=null, show=true) => {
    return (
      <MyModal
      header={header}
      body={body}
      icon={icon}
      />
    )
  }
}

const MyModal = (props) => {
  
  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);

  return (
    <Modal
    show={show}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    animation={false}
    centered
    onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          <img src={WarningIcon}></img>
          &nbsp;&nbsp;
          <font>{props.body}</font>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export {Utility, ViewModal};