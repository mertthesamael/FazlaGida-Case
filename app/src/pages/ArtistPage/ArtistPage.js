import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainCard from "../../components/MainCard/MainCard";
import useHttp from "../../hooks/useHttp";
import "./artistpage.scss"


const ArtistPage = (props) => {
const location = useLocation().pathname.slice(1)
const { fetchArtist, loading, artist, topAlbums, topTracks } = useHttp()
console.log(artist.name)

useEffect(()=> {
fetchArtist(location)
},[])
    return(
        <>
        {loading ? <h1>Loading...</h1>:<div className="artistpage-wrapper">

            <div className="artistpage-wrapper__inner">

                <div className="artistpage-wrapper__inner__artistcard">

                    <div className="artistpage-wrapper__inner__artistcard__img">
                            <img src={artist.image ? artist.image[2]['#text']?artist.image[2]['#text']:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png":""}></img>
                    </div>

                    <div className="artistpage-wrapper__inner__artistcard__title">
                            <h1>{artist.name}</h1>
                    </div>

                </div>

                <div className="artistpage-wrapper__inner__artistassets">

                    <div className="artistpage-wrapper__inner__artistassets__albums">
                        <h1 style={{borderBottom: '4px solid black'}}>Top Albums</h1>
                        {topAlbums.map(album => <MainCard artist={album.name} img={album.image[1]['#text']}></MainCard>)}
                    </div>

                    <div className="artistpage-wrapper__inner__artistassets__tracks">
                        <h1 style={{borderBottom: '4px solid black'}}>Top Tracks</h1>
                        {topTracks.map(album => <MainCard artist={album.name}img={album.image[1]['#text']}></MainCard>)}

                    </div>

                </div>

            </div>

        </div>}
        </>
    )

}

export default ArtistPage;