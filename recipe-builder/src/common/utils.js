import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Utility = {
  isUndefinedOrEmptyObject : (object) => {
    if(typeof object ==	typeof undefined || null == object || object.length == 0) {
      return true;
    }
    
    return false;
  },
  isWebSDKInitiated : () => {
    let _socket = garudapro.webapi.scylla.connnection.socket;
	
	  return ( !this.isUndefinedOrEmptyObject(_socket) );
  },
  isNullOrEmpty : (data) => {
    if(typeof undefined == typeof data  || null == data || "" == data || "" == data.trim()) {
      return true;
    }
    
    return false;
  }
}

const ViewModal = {
  ShowAlert : (header=null, body=null, icon=null, show=true) => {
    return (
      <MyModal 
        show={show}
        header={header}
        body={body}
        icon={icon}/>
    )
  }
}

const MyModal = (props) => {
  return (
    <Modal
    show={props.show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>
          props.header
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.icon}></img>
        <br />
        <font>{props.body}</font>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => ViewModal.ShowAlert(!props.show)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export {Utility, ViewModal};