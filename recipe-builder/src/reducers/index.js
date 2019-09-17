import activateGadgetReducer from "./../reducers/activate";
import loginReducer from "./../reducers/login";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  activateGadgetReducer,
  loginReducer
});

export default rootReducer;