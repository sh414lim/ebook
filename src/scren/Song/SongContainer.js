import React from "react";
import { SongApi } from "../../api";
import SongPresenter from "./SongPresenter";


export default class extends React.Component{
    state={
        TopTrack:null,
        error:null,
        loading:true
    }

    async componentDidMount(){
        try{
            const {data:{tracks:TopTrack}}= await SongApi.TopTrack();
            this.setState({
                TopTrack,
            })
            console.log(TopTrack);
        }catch{
            this.setState({
                error:"Can't Find Song...."
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {TopTrack,Track,error,loading}=this.state;
        return(
            <SongPresenter 
                TopTrack={TopTrack}
                Track={Track}
                error={error}
                loading={loading}
                />
        )
    }
}