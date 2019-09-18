import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Header} from "./components/header/header";
import {Body} from "./components/body/body";

function App() {
  const isActivated = useSelector(state => state.activated);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const isActivating = useSelector(state => state.activating);
  const isActivationFailed = useSelector(state => state.activationFailed);
  
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn}/>
      <Body isActivated={isActivated}
            isLoggedIn={isLoggedIn}
            isActivating={isActivating}
            isActivationFailed={isActivationFailed} />
    </React.Fragment>
  );
}

export default App;
