import React from "react";
import {  ChartApi } from "../../api";
import AlbumPresenter from "./AlbumPresenter";

export default class extends React.Component{
    state={
        toptags:null,
        error:null,
        loading:true,
    }

     getAlbum =async()=>{
        try{
            const {data:{toptags:{tag:toptags}}}=await ChartApi.allApi("album.gettoptags","Cher","Believe")
 
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
    componentDidMount(){
    this.getAlbum();
    }

    render(){
        const {toptags,error,loading}=this.state;
        console.log(this.state);
        return(
                <AlbumPresenter
                toptags={toptags}
                error={error}
                loading={loading}
                />
        )
    }
}