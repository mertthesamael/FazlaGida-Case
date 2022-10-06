import { Fragment, useContext, useState } from "react";
import Artist from "../../components/MainCard/MainCard";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroller"
import { NavLink } from "react-router-dom";
import { ArtistContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";
import { useTopArtists } from "../../hooks/useTopArtists";



const Home = (props) => {
    
    const ctx = useContext(ArtistContext)
   
    // Calling custom react query hook for fetching data
    const {data:queryData, isLoading, isError, error, fetchNextPage } = useTopArtists()

    // I set a variable called nextData to prevent fetch previous page results in the infinite scroll
    const nextData =queryData?.pages[queryData.pages.length-1]


    // Checking if loading state is 
    if(isLoading){
        return <Loading />
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    

    return(
        
        <div data-testid='border' className="artists-wrapper">

                <div className="artists-section" >

                    <InfiniteScrolll useWindow={false} hasMore={true} loadMore={fetchNextPage}>

                        {nextData?.data?.artists.artist.map((artist) => 

                            <NavLink key={artist.name} 
                            onClick={() => ctx.onCurrentArtist(artist)} 
                            className={'artist-card'} 
                            to={artist?.mbid}> 

                            <Artist title='Artist' 
                            img={artist.image[1]['#text']} 
                            artist={artist.name} 
                            playcount={artist.playcount} 
                            listeners={artist.listeners}/>

                            </NavLink>
                                        
                            )
                        }
                    

                    </InfiniteScrolll>

                </div>
            
            </div>


    )

}

export default Home;