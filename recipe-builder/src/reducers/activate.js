import {ACTION_ACTIVATION} from "../action-list";
import {useDispatch} from "react-redux";
import {ActivateGadget} from "./../apiCalls/web-sdk-req";
var dispatch = useDispatch();

const initialActivationState = {
  activating: false,
  activated: false,
  activationFailed: false
};

const activateGadgetReducer = (state=initialActivationState, action) => {
  switch(action.type) {
    case ACTION_ACTIVATION.ACTIVATE_GADGET:
      dispatch(ActivateGadget());
      return {
        activating: true,
        activated: false,
        activationFailed: false
      };
    case ACTION_ACTIVATION.GADGET_ACTIVATED:
      return {
        activating: false,
        activated: true,
        activationFailed: false
      };
    case ACTION_ACTIVATION.ACTIVATION_FAILED:
      return {
        activating: false,
        activated: false,
        activationFailed: true
      };
    default: return state
  }
}

export default activateGadgetReducer;