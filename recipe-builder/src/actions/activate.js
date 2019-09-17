import {ACTION_ACTIVATION} from "../action-list";

const Activating = () => {
  console.log(ACTION_ACTIVATION)
  return {
    type: ACTION_ACTIVATION.ACTION_ACTIVATE_GADGET
  }
}

export {Activating};