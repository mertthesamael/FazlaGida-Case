import "./maincard.scss"


const MainCard = ({backgroundColor, color, img, title, artist, playcount, listeners, isHome }) => {

    return(
        
        <div data-testid='card' style={{background:backgroundColor, color:color}} className='artist'>

            {/* This div belongs to RGB animation */}
            <div className="rgb"></div>
            
            
            <div className="artist__info">

                <div className="artist__info__img">

                        <img alt='cardimg' src={img? img : 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}></img>

                </div>

                <div style={isHome&&{justifyContent:'space-evenly'}} className="artist__info__title">

                    <p style={isHome?{fontWeight:'normal',borderBottom:'1px solid '}:{fontWeight:'bold'}}>{title}</p>

                    <p style={isHome?{fontWeight:'bold'}:{fontWeight:'normal'}}>{artist}</p>

                </div>

            </div>

            <div className="artist__stats">

               {listeners&&<p>{listeners} listeners</p>}

               <p title="par">{playcount} playcount</p>

            </div>


        </div>
    )

}

export default MainCard;