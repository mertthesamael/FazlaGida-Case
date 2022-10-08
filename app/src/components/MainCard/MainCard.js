import "./maincard.scss"
import Tilt from "react-parallax-tilt"

const MainCard = ({backgroundColor, color, img, title, artist, playcount, listeners, isHome }) => {

    return(
        <Tilt className="tilt" tiltMaxAngleY={5} tiltMaxAngleX={0}>

        <div data-testid='card' style={{background:backgroundColor, color:color}} className='artist'>

            {/* This div belongs to RGB animation */}
            <div className="rgb"></div>
            
            
            <div className="artist__info">

                <div className="artist__info__img">

                        <img alt='cardimg' src={img? img : 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}></img>

                </div>

                <div data-testid='cardinfo' style={isHome&&{justifyContent:'flex-start',marginTop:'1.2rem'}} className="artist__info__title">

                    <p style={isHome?{fontWeight:'normal',borderBottom:'1px solid '}:{fontWeight:'bold'}}>{title}</p>

                    <p style={isHome?{fontWeight:'bold',marginTop:'1rem'}:{fontWeight:'normal'}}>{artist}</p>

                </div>

            </div>

            <div className="artist__stats">

               {listeners&&<p>{listeners} listeners</p>}

               <p title="par">{playcount} playcount</p>

            </div>


        </div>
        </Tilt>
    )

}

export default MainCard;