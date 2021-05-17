import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state={
        error:null,
        loading:false
    }

    render(){
        return(
            <SearchPresenter/>
        )
    }
}