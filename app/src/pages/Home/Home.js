import { useContext } from "react";
import Artist from "../../components/MainCard/MainCard";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroll-component"
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";
import { useTopArtists } from "../../hooks/useTopArtists";



const Home = (props) => {

const ctx = useContext(ThemeContext)

const {data:queryData, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching } = useTopArtists()


   

console.log(queryData)


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
                   

                    {queryData.map(artist =><NavLink key={artist.name} onClick={() => ctx.onCurrentArtist(artist)} className={'artist-card'} to={artist.mbid}> <Artist title='Artist' img={artist.image[1]['#text']} artist={artist.name} playcount={artist.playcount} listeners={artist.listeners}/></NavLink>)}

                </div>
            
            </div>


    )

}

export default Home;