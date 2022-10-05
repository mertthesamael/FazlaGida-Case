import { useContext, useEffect, useState } from "react";
import Artist from "../../components/MainCard/MainCard";
import useHttp from "../../hooks/useHttp";
import "./home.scss"
import InfiniteScrolll from "react-infinite-scroll-component"
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";



const Home = (props) => {
const {data, loading, fetchData, artists} = useHttp()
const [page, setPage] = useState(1)
const [offset, setOffset] = useState(550)
const ctx = useContext(ThemeContext)


useEffect(()=> {
    fetchData(page)
},[page])
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
    return(
<>
            {loading? <Loading></Loading>:
            <div data-testid='border' className="artists-wrapper">

                <div className="artists-section" >
                   

                    {data.artist?.map(artist =><NavLink onClick={ () =>  ctx.onCurrentArtist(artist.name)} className={'artist-card'} to={artist.name.toLowerCase().replaceAll(" ", "").replaceAll(",","")}> <Artist title='Artist' img={artist.image[1]['#text']} artist={artist.name} playcount={artist.playcount} listeners={artist.listeners}/></NavLink>)}

                </div>
            
            </div>}

</>
    )

}

export default Home;