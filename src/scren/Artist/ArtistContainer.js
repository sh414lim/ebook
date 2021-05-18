import React from "react";
import { ChartApi } from "../../api";
import ArtistPresenter from "./ArtistPresenter";

export default class extends React.Component{
    state={
        TopArtist:null,
        Track:null,
        error:null,
        loading:true,
    }
    getArtist=async()=>{
        try{
        const {data:
        {artists:{artist:TopArtist }}}
        =await ChartApi.allApi("chart.gettopartists")
            this.setState({
                TopArtist,
            })
        }catch{
            this.setState({
                error:"Can;t Find...."
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    componentDidMount(){
        this.getArtist();
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
