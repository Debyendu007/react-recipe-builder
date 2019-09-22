import {ACTION_LOGIN} from "./../action-list";

const initialLoginState = {
  loggingIn: false,
  loggedIn: false,
  logInFailed: false,
  userInfo: null,
  loginReqMessage: ""
};

const loginReducer = (state=initialLoginState, action) => {
  switch(action.type) {
    case ACTION_LOGIN.LOGIN:
      return {
        loggingIn: true,
        loggedIn: false,
        logInFailed: false,
        userInfo: null,
        loginReqMessage: action.message
      };
    case ACTION_LOGIN.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        logInFailed: false,
        userInfo: action.userInfo,
        loginReqMessage: action.message
      };
      case ACTION_LOGIN.LOGIN_FAILED:
        return {
          loggingIn: false,
          loggedIn: false,
          logInFailed: true,
          userInfo: null,
          loginReqMessage: action.message
        };
      default: return state;
  }
}

export default loginReducer;