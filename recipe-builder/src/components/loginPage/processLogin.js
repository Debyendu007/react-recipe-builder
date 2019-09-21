import {useDispatch} from "react-redux";

const LoginButton = (props) => {
  const dispatch = useDispatch();

  if(props.loggingIn) {
    return (
      <Button id="btn-login"
              className="u-font-light u-font-c-light u-font-oswald"
              variant="outline-primary"
              disabled>
                <FontAwesomeIcon
                icon={faCog}
                spin />
                &nbsp;&nbsp;SIGNING IN
      </Button>
    );
  }
  else {
    return (
      <Button id="btn-login"
              className="u-font-light u-font-c-light u-font-oswald"
              variant="outline-primary"
              onClick={dispatch(LoggingIn())}>SIGN IN</Button>
    );
  }
}

export {
  LoginButton
};