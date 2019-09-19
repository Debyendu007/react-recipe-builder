import {ACTION_ACTIVATION} from "../action-list";
// import {Utility} from "./../common/utils";
// import {RESPONSE_CODE} from "./../common/response-code";
import {useDispatch} from "react-redux";

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

// window.handleActivateGadgetResponse = (response) => store => {
//   // const dispatch = useDispatch();
//   let action = ACTION_ACTIVATION.GADGET_ACTIVATED;

//   if(Utility.isUndefinedOrEmptyObject(response) || RESPONSE_CODE.SUCCESS != response.body.result) {
//     action = ACTION_ACTIVATION.ACTIVATION_FAILED;
//   }

//   store.dispatch(Activated(action));

// };

export {Activating, Activated};