import {ACTION_ACTIVATION} from "../action-list";

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