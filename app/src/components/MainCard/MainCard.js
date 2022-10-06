import "./maincard.scss"


const MainCard = ({backgroundColor, color, img, title, artist, playcount, listeners }) => {
    return(
        
        <div data-testid='card' style={{background:backgroundColor, color:color}} className='artist'>
            <div className="rgb">

            
            </div>
            
            <div className="artist__info">

                <div className="artist__info__img">
                        <img src={img? img : 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}></img>
                </div>

                <div className="artist__info__title">
                    <p><b>{title}</b></p>
                    <p>{artist}</p>

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