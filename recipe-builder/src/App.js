import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Header} from "./components/header/header";
import {Body} from "./components/body/body";

function App() {
  const isActivated = useSelector(state => state.activated);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn}/>
      <Body isActivated={isActivated}
            isLoggedIn={isLoggedIn} />
    </React.Fragment>
  );
}

export default App;
