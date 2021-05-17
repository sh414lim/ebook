import React from "react";
import {HashRouter as Router,Route,Redirect} from "react-router-dom"
import Artist from "../scren/Artist";
import Song from "../scren/Song";
import Albums from "../scren/Albums";
import Header from "./Header";
import Search from "../scren/Search";
import Login from "../scren/Login";

export default ()=>{
        return(
            <>
            <Router>
                <Header/>
                <Route path="/" exact component={Song}/>
                <Route path="/albums" component={Albums}/>
                <Route path="/artist" component={Artist}/>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <Redirect from="*" to="/"/>
            </Router>
            </>
        )
    }

