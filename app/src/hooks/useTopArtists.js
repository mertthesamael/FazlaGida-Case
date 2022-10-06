import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios"


const fetchData = async ({ pageParam = 1 }) => {
    return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&limit=10&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)

}


export const useTopArtists = (onSuccess, onError) =>{

return useInfiniteQuery(["top-artists"], fetchData,
{
    staleTime: 30000,
    refetchOnWindowFocus: true,
    refetchInterval: 10000,
    select:  (data) => {
        const topArtists = data.pages.map((group, i) =>  group)
    
        return topArtists
    },
    getNextPageParam: (_lastPage, pages) => {
        if(pages.length < 5){
            return pages.length +1
        }else {
            return undefined
        }
    },
})

}