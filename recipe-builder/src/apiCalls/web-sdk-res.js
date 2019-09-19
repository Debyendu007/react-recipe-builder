import {Activated} from "../actions/activate";
import {ACTION_ACTIVATION} from "../action-list";
import {Utility} from "./../common/utils";
import {RESPONSE_CODE} from "./../common/response-code";

const web_sdk_events_cb = store => {
  window.handleActivateGadgetResponse = (response) => {
    // const dispatch = useDispatch();
    let action = ACTION_ACTIVATION.GADGET_ACTIVATED;
  
    if(Utility.isUndefinedOrEmptyObject(response) || RESPONSE_CODE.SUCCESS != response.body.result) {
      action = ACTION_ACTIVATION.ACTIVATION_FAILED;
    }
  
    store.dispatch(Activated(action));
  };
}

export {web_sdk_events_cb};