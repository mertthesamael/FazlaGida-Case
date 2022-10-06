import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios"



export const useTopArtists = (onSuccess, onError) =>{
    const fetchData = async ({pageParam = 1}) => {
   
        return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&limit=8&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
        
    }
  

return useInfiniteQuery(['test'],  fetchData,
    {
        getNextPageParam: (_lastpage, pages) => {
            
            if(pages.length < 80){
                return pages.length + 1
            } else{
                return undefined
            }
        },
    })

}