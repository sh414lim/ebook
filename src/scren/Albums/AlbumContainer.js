import React from "react";
import {  ChartApi } from "../../api";
import AlbumPresenter from "./AlbumPresenter";

export default class extends React.Component{
    state={
        toptags:null,
        error:null,
        loading:true,
    }

    async componentDidMount(){
        try{
           const toptags=await ChartApi.allApi("album.gettoptags","radiohead","the%20bends")
           console.log(toptags);
           

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
        const {toptags,error,loading}=this.state;
        return(
                <AlbumPresenter
                toptags={toptags}
                error={error}
                loading={loading}
                />
        )
    }
}