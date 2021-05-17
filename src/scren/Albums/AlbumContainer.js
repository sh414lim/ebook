import React from "react";
import AlbumPresenter from "./AlbumPresenter";

export default class extends React.Component{
    state={
        TopAlbum:null,
        error:null,
        loading:true,
    }

    render(){
        const {TopAlbum,error,loading}=this.state;
        return(
                <AlbumPresenter
                TopAlbum={TopAlbum}
                error={error}
                loading={loading}
                />
        )
    }
}