import React from "react";
import { AlbumApi } from "../../api";
import AlbumPresenter from "./AlbumPresenter";

export default class extends React.Component{
    state={
        toptags:null,
        error:null,
        loading:true,
    }

    async componentDidMount(){
        try{
            const {data:{toptags:{tag:toptags}}} =await AlbumApi.toptags();
            this.setState({
                toptags,
            })

        }catch{
                this.setState({
                    error:"Can't Find...."
                })
        }finally{
            this.setState({
                loading:false
            })
        }
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