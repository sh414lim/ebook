import React from "react";
import Globalstyle from "./Globalstyle";
import Router from "./Router";

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