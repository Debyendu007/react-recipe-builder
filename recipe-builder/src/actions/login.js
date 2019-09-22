import {ACTION_LOGIN} from "../action-list";

const LoggingIn = () => {
  return ({
    type: ACTION_LOGIN.LOGIN,
    message: "Making Login Request"
  });
}

const LoginSuccess = (param=null) => {
  return ({
    type: ACTION_LOGIN.LOGIN_SUCCESS,
    message: "Logged in Successfully"
  });
}

const LoginFailed = (param=null) => {
  return ({
    type: ACTION_LOGIN.LOGIN_FAILED,
    message: "Login Failed"
  });
}

export {
  LoggingIn,
  LoginFailed,
  LoginSuccess
};