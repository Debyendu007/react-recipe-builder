import {ACTION_LOGIN} from "./../action-list";

const initialLoginState = {
  logginValidationFailed: false,
  loggingIn: false,
  loggedIn: false,
  logInFailed: false,
  userInfo: null,
  loginReqMessage: ""
};

const loginReducer = (state=initialLoginState, action) => {
  switch(action.type) {
    case ACTION_LOGIN.LOGGIN_IN_VALIDATION_FAILED:
      return {
        loginValidationFailed: true,
        loggingIn: true,
        loggedIn: false,
        logInFailed: false,
        userInfo: null,
        loginReqMessage: ""
      };
    case ACTION_LOGIN.LOGGING_IN:
      return {
        loginValidationFailed: false,
        loggingIn: true,
        loggedIn: false,
        logInFailed: false,
        userInfo: null,
        loginReqMessage: ""
      };
    case ACTION_LOGIN.LOGIN_SUCCESS:
      return {
        loginValidationFailed: false,
        loggingIn: false,
        loggedIn: true,
        logInFailed: false,
        userInfo: action.userInfo,
        loginReqMessage: action.message
      };
      case ACTION_LOGIN.LOGIN_FAILED:
        return {
          loginValidationFailed: false,
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