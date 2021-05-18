import axios from "axios";

const api =axios.create({
    baseURL: "http://ws.audioscrobbler.com",
    params:{
        api_key:"cb9958658816b27c365ce55031623418",
        format:"json"
    }
})
export const AlbumApi={
    toptags:()=>api.get("?method=album.gettoptags&artist=radiohead&album=the%20bends"),
    search:(term)=>api.get("?method=album.search&album=believe",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}

export const ArtistApi={
    TopArtist:()=>api.get("?method=chart.gettopartists"),
    Track:()=>api.get("?method=artist.gettoptracks&artist=cher"),
    search:(term)=>api.get("?method=artist.search&artist=cher",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}

export const SongApi={
    TopTrack: (method = "") => api.get("/2.0/", {
        params: {
            method:method
        }
    }),
    search:(term)=>api.get("?method=track.search&track=Believe",{
        params:{
            query:encodeURIComponent(term)
        }
    })
}






export default api;