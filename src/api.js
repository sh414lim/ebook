import axios from "axios";

const api =axios.create({
    baseURL: "http://ws.audioscrobbler.com",
    params:{
        api_key:"cb9958658816b27c365ce55031623418",
        format:"json"
    }
})


export const ChartApi={
   allApi:(method = " ")=>api.get("/2.0/",{
        params:{
            method:method,
        }
    }),
    search:(term)=>api.get("?method=artist.search&artist=cher",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}




export default api;