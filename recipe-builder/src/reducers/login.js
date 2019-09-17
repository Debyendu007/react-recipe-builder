import {ACTION_LOGIN} from "./../action-list";

const initialLoginState = {
  isLoginValidationFailed: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isLogInFailed: false,
  userInfo: null,
  loginReqMessage: ""
};

const loginReducer = (state=initialLoginState, action) => {
  switch(action.type) {
    case ACTION_LOGIN.LOGGIN_IN_VALIDATION_FAILED:
      return {
        isLoginValidationFailed: true,
        isLoggingIn: true,
        isLoggedIn: false,
        isLogInFailed: false,
        userInfo: null,
        loginReqMessage: ""
      };
    case ACTION_LOGIN.LOGGING_IN:
      return {
        isLoginValidationFailed: false,
        isLoggingIn: true,
        isLoggedIn: false,
        isLogInFailed: false,
        userInfo: null,
        loginReqMessage: ""
      };
    case ACTION_LOGIN.LOGIN_SUCCESS:
      return {
        isLoginValidationFailed: false,
        isLoggingIn: false,
        isLoggedIn: true,
        isLogInFailed: false,
        userInfo: action.userInfo,
        loginReqMessage: action.message
      };
      case ACTION_LOGIN.LOGIN_FAILED:
        return {
          isLoginValidationFailed: false,
          isLoggingIn: false,
          isLoggedIn: false,
          isLogInFailed: true,
          userInfo: null,
          loginReqMessage: action.message
        };
      default: return state;
  }
}

export default loginReducer;