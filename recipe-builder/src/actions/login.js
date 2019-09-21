import {ACTION_LOGIN} from "../action-list";

const LoggingIn = () => {
  return ({
    type: ACTION_LOGIN.LOGGING_IN,
    message: "Making Login Request"
  });
}

const LoginSuccess = (action) => {
  return ({
    type: ACTION_LOGIN.LOGIN_SUCCESS
  });
}

const LoginFailed = (action) => {
  return ({
    type: ACTION_LOGIN.LOGIN_FAILED
  });
}

export {
  LoggingIn,
  LoginFailed,
  LoginSuccess
};