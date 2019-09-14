import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Body} from "./components/body/body"; 

function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn}/>
      <Body />
    </React.Fragment>
  );
}

export default App;
