import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios"


const fetchData = async (page) => {
    return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=1&limit=10&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)

}


export const useTopArtists = (onSuccess, onError) =>{

return useQuery("top-artists", fetchData,
{
    staleTime: 30000,
    refetchOnWindowFocus: true,
    refetchInterval: 10000,
    select:  (data) => {
        const topArtists = data.data.artists?.artist
        return topArtists
    }
})

}