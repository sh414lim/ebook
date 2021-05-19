import React from "react";
import {HashRouter as Router,Route,Redirect} from "react-router-dom"
import Artist from "../scren/Artist";
import Song from "../scren/Song";
import Albums from "../scren/Albums";
import Header from "./Header";
import Search from "../scren/Search";
import Login from "../scren/Login";
import PosterList from "../scren/Poster/PostListPage";
import postRead from "../scren/Poster/PostRead";
import postWrite from "../scren/Poster/PostWrite";
import Register from "../scren/Register";

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
                <Route path="/register" component={Register}/>
                <Route path="/poster" exact component={PosterList}/>
                <Route path="/poster/page" exact component={postRead}/>
                <Route path="/poster/write" exact component={postWrite}/>
                <Redirect from="*" to="/"/>
            </Router>
            </>
        )
    }

