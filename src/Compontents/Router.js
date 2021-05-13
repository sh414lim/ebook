import React from "react";
import {HashRouter as Router,Route,Redirect} from "react-router-dom"
import Book from "../scren/Book";
import Comic from "../scren/Comic";
import Home from "../scren/Home";
import Header from "./Header";
import Search from "../scren/Search";

export default ()=>{
        return(
            <>
            <Router>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/book" component={Book}/>
                <Route path="/comic" component={Comic}/>
                <Route path="/search" component={Search}/>
                <Redirect path="*" to="/"/>
            </Router>
            </>
        )
    }

