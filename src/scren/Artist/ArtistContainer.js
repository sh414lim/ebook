import React from "react";
import ArtistPresenter from "./ArtistPresenter";

export default class extends React.Component{
    state={
        TopArtist:null,
        Track:null,
        error:null,
        loading:true,
    }
    render(){
        const {TopArtist,Track,error,loading}=this.state;
        return(
            <ArtistPresenter
            TopArtist={TopArtist}
            Track={Track}
            error={error}
            loading={loading}
            />
        )
    }
}
