import React from 'react';
import {useSelector} from "react-redux";
import {Header} from "./components/header/header";
import {Body} from "./components/body/body";

function App() {
  const activationState = useSelector(state => state.activateGadgetReducer);
  const loginState = useSelector(state => state.loginReducer);

  console.log(activationState)
  
  return (
    <React.Fragment>
      <Header isLoggedIn={loginState.isLoggedIn}/>
      <Body isActivated={activationState.activated}
            isLoggedIn={loginState.isLoggedIn}
            isActivating={activationState.activating}
            isActivationFailed={activationState.activationFailed} />
    </React.Fragment>
  );
}

export default App;
