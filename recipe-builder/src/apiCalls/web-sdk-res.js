import {Activated} from "../actions/activate";
import {ACTION_ACTIVATION} from "../action-list";
import {Utility} from "./../common/utils";
import {RESPONSE_CODE} from "./../common/response-code";

const RegisterActivateResponse = (dispatch) => {
  window.handleActivateGadgetResponse = (response) => {
    // const dispatch = useDispatch();
    let action = ACTION_ACTIVATION.GADGET_ACTIVATED;
  
    if(Utility.isUndefinedOrEmptyObject(response) || RESPONSE_CODE.SUCCESS != response.body.result) {
      action = ACTION_ACTIVATION.ACTIVATION_FAILED;
    }
  
    dispatch(Activated(action));
  };
}

export {RegisterActivateResponse};