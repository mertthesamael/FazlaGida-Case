import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MainCard from "../../components/MainCard/MainCard";
import useHttp from "../../hooks/useHttp";
import { ThemeContext } from "../../store/context";
import "./artistpage.scss"

/* CSS VARIABLELARI GLOBAL HER SAYFADA TANIMLAMANA GEREK YOK SİL ONLARI KNK ;) */
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
        {loading ? <Loading/>:<div className="artistpage-wrapper">

            <div className="artistpage-wrapper__inner">

                <div className="artistpage-wrapper__inner__artistcard">

                    <div className="artistpage-wrapper__inner__artistcard__img">

                            <img src={artist.image ? artist.image[2]['#text']?artist.image[2]['#text']:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png":""}></img>

                    </div>

                    <div className="artistpage-wrapper__inner__artistcard__title">
                            <h1>{ctx.currentArtist ? ctx.currentArtist:artist.name}</h1>
                    </div>

                </div>

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