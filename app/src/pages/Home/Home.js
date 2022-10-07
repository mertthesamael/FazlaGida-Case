import { Fragment, useContext } from "react";
import MainCard from "../../components/MainCard/MainCard";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroller"
import { NavLink } from "react-router-dom";
import { ArtistContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";
import { useTopArtists } from "../../hooks/useTopArtists";



const Home = (props) => {
    
    const ctx = useContext(ArtistContext)

    //Fetching data from custom React Query hook (Top Artists) and checking loading state

    const {data:queryData, isLoading, isError, error, fetchNextPage, } = useTopArtists()

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

                        {queryData?.pages.map((page,i) => 

                            <Fragment key={i}>

                            {page.data.artists.artist.map(artist => 
                            <NavLink key={artist.name} 
                            onClick={() => ctx.onCurrentArtist(artist)} 
                            className={'artist-card'} 
                            to={artist.mbid}> 

                                <MainCard isHome={true} title='Artist' 
                                img={artist.image[1]['#text']} 
                                artist={artist.name} 
                                playcount={artist.playcount} 
                                listeners={artist.listeners}/>

                            </NavLink>)}
                       
                      
                        </Fragment>
                            )
                        }
                    

                    </InfiniteScrolll>

                </div>
            
            </div>

    )

}

export default Home;