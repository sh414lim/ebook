import axios from "axios"


const api=axios.create({
    baseURL:"https://api.music.apple.com/v1/";
    params:{

    }
})
catalog/{storefront}/albums/{id}

export const MusicApi={
    catalog=api.get(`me/library/artists/${id}`)
}



