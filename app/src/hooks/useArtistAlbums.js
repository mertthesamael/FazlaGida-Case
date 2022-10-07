import { useQuery } from "react-query";
import axios from "axios";

const fetchArtistAlbums = (artistId) => {
    
    return axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artistId}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)

}

export const useArtistAlbums = (artistId) => {

    return useQuery(["Artist Details", artistId] ,() => fetchArtistAlbums(artistId),{
        select: (data) => data.data.topalbums.album,
        staleTime: 30000,
        refetchOnWindowFocus: true,
        refetchInterval: 10000,
    })

}

