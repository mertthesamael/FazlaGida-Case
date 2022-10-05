import "./artistcard.scss"


const ArtistCard = (props) => {

    return(
        <div className="artistpage-wrapper__inner__artistcard">

                    <div className="artistpage-wrapper__inner__artistcard__img">

                            <img src={props.image ? props.image[2]['#text']?props.image[2]['#text']:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png":""}></img>

                    </div>

                    <div className="artistpage-wrapper__inner__artistcard__title">
                            <h1 data-testid='artist-name'>{props.currentArtist ? props.currentArtist:props.name}</h1>
                    </div>

        </div>
    )

}

export default ArtistCard;