import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Loading from "../../components/Loading/Loading";
import MainCard from "../../components/MainCard/MainCard";
import useHttp from "../../hooks/useHttp";
import { ThemeContext } from "../../store/context";
import "./artistpage.scss"


const ArtistPage = (props) => {

const location = useLocation().pathname.slice(1)
const ctx = useContext(ThemeContext)
const { fetchArtist, loading, artist, topAlbums, topTracks } = useHttp()
console.log(ctx.currentArtist)
useEffect(()=> {
fetchArtist(location)
},[])

    return(
        <>
        {loading ? <Loading/>:<div data-testid='border' className="artistpage-wrapper">

            <div className="artistpage-wrapper__inner">

                <ArtistCard image={artist.image} currentArtist={ctx.currentArtist} name={artist.name} />
                

                <div className="artistpage-wrapper__inner__artistassets">

                    <div className="artistpage-wrapper__inner__artistassets__albums">

                        <h1 style={{borderBottom: '4px solid black', width:'95%'}}>Top Albums</h1>

                        {topAlbums.map(album => <MainCard title={artist.name} playcount={album.playcount} artist={album.name} img={album.image[1]['#text']}></MainCard>)}

                    </div>

                    <div className="artistpage-wrapper__inner__artistassets__tracks">

                        <h1 style={{borderBottom: '4px solid black',width:'95%'}}>Top Tracks</h1>

                        {topTracks.map(album => <MainCard title={album.name} listeners={album.listeners} playcount={album.playcount} artist={artist.name}img={album.image[1]['#text']}></MainCard>)}


                    </div>

                </div>

            </div>

        </div>}
        </>
    )

}

export default ArtistPage;