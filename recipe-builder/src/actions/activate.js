import {ACTION_ACTIVATION} from "../action-list";
// import {Utility} from "./../common/utils";
// import {RESPONSE_CODE} from "./../common/response-code";

const Activating = () => {
  return ({
    type: ACTION_ACTIVATION.ACTIVATE_GADGET
  });
}

const Activated = (action) => {
  return ({
    type: action
  });
}

export {Activating, Activated};