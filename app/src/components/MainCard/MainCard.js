import "./artist.scss"


const MainCard = (props) => {

    return(
        <div className='artist'>
            
            <div className="artist__info">

                <div className="artist__info__img">
                    <div className="testimg">
                        <img src={props.img? props.img : 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}></img>
                    </div>
                </div>

                <div className="artist__info__title">
                    <p>Artist</p>
                    <p>{props.artist}</p>

                </div>

            </div>

            <div className="artist__stats">

               <p>{props.listeners} listeners</p>
               <p>{props.playcount} playcount</p>

            </div>


        </div>
    )

}

export default MainCard;