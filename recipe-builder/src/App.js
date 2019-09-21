import React from 'react';
import {useSelector} from "react-redux";
import {Header} from "./components/header/header";
import {Body} from "./components/body/body";

function App() {
  const activationState = useSelector(state => state.activateGadgetReducer);
  const loginState = useSelector(state => state.loginReducer);
  
  return (
    <React.Fragment>
      <Header loggedIn={loginState.loggedIn}/>
      <Body activated={activationState.activated}
            loggedIn={loginState.loggedIn}
            activating={activationState.activating}
            activationFailed={activationState.activationFailed} />
    </React.Fragment>
  );
}

export default App;
