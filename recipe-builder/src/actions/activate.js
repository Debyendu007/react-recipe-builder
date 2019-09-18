import {ACTION_ACTIVATION} from "../action-list";
import {Utility} from "./../common/utils";
import {RESPONSE_CODE} from "./../common/response-code";

const Activating = () => {
  return (dispatch) => {
    type: ACTION_ACTIVATION.ACTIVATE_GADGET
  }
}

const handleActivateGadgetResponse = (response) => {
  let action = ACTION_ACTIVATION.GADGET_ACTIVATED;

  if(Utility.isNullOrEmpty(response) || RESPONSE_CODE.SUCCESS != response.body.result) {
    action = ACTION_ACTIVATION.ACTIVATION_FAILED;
  }

  return (dispatch) => {
    type: action
  };
}

export {Activating};