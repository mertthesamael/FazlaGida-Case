import { useEffect, useState } from "react";
import Artist from "../../components/MainCard/MainCard";
import useHttp from "../../hooks/useHttp";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroll-component"
import { NavLink } from "react-router-dom";



const Home = (props) => {
const {data, loading, fetchData, artists, fetchMore} = useHttp()
const [page, setPage] = useState(1)
const [offset, setOffset] = useState(550)
useEffect(()=> {
    fetchData(page)
},[page])
       

    return(
<>
            {loading? <h1>Loading..</h1>:
            <div className="artists-wrapper">

                <div className="artists-section">
                    <InfiniteScrolll 
                    dataLength={artists.length} 
                    next={fetchMore} 
                    hasMore={true}
                    >

                    {data.artist?.map(artist =><NavLink className={'artist-card'} to={artist.name.toLowerCase().replaceAll(" ", "").replaceAll(",","")}> <Artist img={artist.image[1]['#text']} artist={artist.name} playcount={artist.playcount} listeners={artist.listeners}/></NavLink>)}
                    </InfiniteScrolll>

                </div>
            
            </div>}

</>
    )

}

export default Home;