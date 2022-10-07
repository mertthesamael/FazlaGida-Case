import { useContext } from "react";
import { useParams } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Loading from "../../components/Loading/Loading";
import MainCard from "../../components/MainCard/MainCard";
import { useArtistAlbums } from "../../hooks/useArtistAlbums";
import { useArtistTracks } from "../../hooks/useArtistTracks";
import { ArtistContext } from "../../store/context";
import NotFound from "../NotFound/NotFound";
import "./artistpage.scss"


const ArtistPage = (props) => {


const { mbId } = useParams()

//Fetching Track and Album data and setting loading states (also checking url for 404)
const {isLoading:albumLoading, data:topAlbums } = useArtistAlbums(mbId)
const {isLoading:trackLoading ,data:topTracks } = useArtistTracks(mbId)
const { currentArtist } = useContext(ArtistContext)


if(albumLoading || trackLoading){

    return <Loading />

}

if(albumLoading || trackLoading && topAlbums || topTracks === undefined){
   return(<NotFound />)
}

    return(
        
       <div data-testid='border' className="artistpage-wrapper">

            <div className="artistpage-wrapper__inner">

                <ArtistCard 
                image={currentArtist.image ? currentArtist.image[1]['#text']:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"} name={topAlbums[0].artist.name} />
                
                
                <div className="artistpage-wrapper__inner__artistassets">

                    <div className="artistpage-wrapper__inner__artistassets__albums">

                        <h1>Top Albums</h1>
                        <div className="topalbums">

                        {topAlbums.map(album => 
                        <a key={album.name} className={'artist-card'}  rel="noreferrer" href={album.url} target={'_blank'}>

                            <MainCard
                            title={topAlbums[0].artist.name}
                            playcount={album.playcount}
                            artist={album.name} 
                            img={album.image[1]['#text']} />
                        
                        </a>)}
                            </div>

                    </div>

                    <div className="artistpage-wrapper__inner__artistassets__tracks">

                        <h1>Top Tracks</h1>
                        
                        <div className="toptracks">

                            {topTracks.track.map(track => 
                            <a key={track.name} className={'artist-card'}  rel="noreferrer" href={track.url} target={'_blank'}>

                            <MainCard 
                            title={track.name} 
                            listeners={track.listeners} 
                            playcount={track.playcount} 
                            artist={topAlbums[0].artist.name} 
                            img={track.image[1]['#text']} />
                            </a>
                            
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    
    )

}

export default ArtistPage;