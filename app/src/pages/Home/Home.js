import { Fragment, useContext } from "react";
import Artist from "../../components/MainCard/MainCard";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroller"
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";
import { useTopArtists } from "../../hooks/useTopArtists";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

const fetchData = async ({ pageParam = 1 }) => {
    return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&limit=10&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)

}

const Home = (props) => {
    
    const ctx = useContext(ThemeContext)
    
    const {data:queryData, isLoading, isError, error, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery(['test'], fetchData,
    {
        getNextPageParam: (_lastpage, pages) => {
            if(pages.length < 5){
                return pages.length + 1
            } else{
                return undefined
            }
        },
    }
    )
    




console.log(queryData?.pages)


// const fetchMore =() =>{
//     setPage(page + 1)
// }
//        const scroll = (e) => {
//         let element = e.target;
//         var a = element.scrollTop;
//         var b = element.scrollHeight - element.clientHeight;
//         var c = a / b;
//         console.log(c)
//         if(c >= 0.90){
//             e.preventDefault()
//             fetchMore()
//         }
//        }

if(isLoading){
    return <Loading></Loading>
}
if(isError){
    return <h2>{error.message}</h2>
}
    return(
        
        
        <div data-testid='border' className="artists-wrapper">

                <div className="artists-section" >
                <InfiniteScrolll useWindow={false} hasMore={true} loadMore={fetchNextPage}>
                   

                    {queryData?.pages.map((page) => 
                                    
                                        page.data.artists.artist.map( artist => <NavLink key={artist.name} onClick={() => ctx.onCurrentArtist(artist)} className={'artist-card'} to={artist.mbid}> <Artist title='Artist' img={artist.image[1]['#text']} artist={artist.name} playcount={artist.playcount} listeners={artist.listeners}/></NavLink>)
                                    
                        )
                    }
                    
                    
                {/* //    <NavLink key={artist.name} onClick={() => ctx.onCurrentArtist(artist)} className={'artist-card'} to={artist.mbid}> <Artist title='Artist' img={artist.image[1]['#text']} artist={artist.name} playcount={artist.playcount} listeners={artist.listeners}/></NavLink> */}

                    </InfiniteScrolll>
                </div>
                <button onClick={fetchNextPage}></button>
            
            </div>


    )

}

export default Home;