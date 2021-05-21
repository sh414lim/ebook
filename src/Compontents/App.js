import React from "react";
import Globalstyle from "./Globalstyle";
import Router from "./Router";
import {firestore} from "../firebase_config";

class App extends React.Component{
  render(){
    return(
      <>
      <Router/>
      <Globalstyle/>
      </>
    )
  }
}

export default App;