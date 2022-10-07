import {useInfiniteQuery } from "react-query";
import axios from "axios"



export const useTopArtists = (onSuccess, onError) =>{

    //Data fetch function (it's an infinite query so i set the pageParam)
    const fetchData = async ({pageParam = 1}) => {
   
        return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&limit=10&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
        
    }
 
    return useInfiniteQuery(['Top Artists'],  fetchData,
    {   keepPreviousData:true,
        getNextPageParam: (_lastpage, pages) => {
       
            if(pages.length < 80){
                return pages.length + 1
                
            } else{
                return undefined
            }
        },
    })

}