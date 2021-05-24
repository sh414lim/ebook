import React from "react";
import Globalstyle from "./Globalstyle";
import Router from "./Router";
import firebase from "../fbase"
class App extends React.Component{
    constructor(){
      super();
      firebase();
    }
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