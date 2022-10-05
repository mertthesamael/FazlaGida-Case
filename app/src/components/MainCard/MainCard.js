import "./maincard.scss"


const MainCard = (props) => {

    return(
        
        <div data-testid='card' className='artist'>
            <div className="rgb">

            
            </div>
            
            <div className="artist__info">

                <div className="artist__info__img">
                        <img src={props.img? props.img : 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}></img>
                </div>

                <div className="artist__info__title">
                    <p><b>{props.title}</b></p>
                    <p>{props.artist}</p>

                </div>

            </div>

            <div className="artist__stats">

               {props.listeners&&<p>{props.listeners} listeners</p>}
               <p title="par">{props.playcount} playcount</p>

            </div>


        </div>
    )

}

export default MainCard;