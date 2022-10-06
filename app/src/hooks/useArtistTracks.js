import { useQuery } from "react-query";
import axios from "axios";

const fetchArtistTracks = (artistId) => {
    
    return axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artistId}&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)

}

export const useArtistTracks = (artistId) => {

    return useQuery(["Artist Tracks", artistId] ,() => fetchArtistTracks(artistId),{
        select: (data) => data.data.toptracks,
        staleTime: 30000,
        refetchOnWindowFocus: true,
        refetchInterval: 10000,
    })

}

