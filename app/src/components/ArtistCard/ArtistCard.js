import "./artistcard.scss"


const ArtistCard = (props) => {
/*Most of inlince css's for the 'storybook' */

    return(
        <div style={{border:props.border, boxShadow:props.shadow, color:props.color}} className="artistpage-wrapper__inner__artistcard">

            <div className="artistpage-wrapper__inner__artistcard__img">

                <img alt='cardimg' src={props.image}></img>

            </div>

            <div className="artistpage-wrapper__inner__artistcard__title">
                
                <h1 data-testid='artist-name'>{props.currentArtist ? props.currentArtist:props.name}</h1>

            </div>

        </div>
    )

}

export default ArtistCard;