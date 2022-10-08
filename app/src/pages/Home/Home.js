import { Fragment, useContext, useEffect } from "react";
import MainCard from "../../components/MainCard/MainCard";
import "./home.scss"
import { NavLink } from "react-router-dom";
import { ArtistContext } from "../../store/context";
import Loading from "../../components/Loading/Loading";
import {useInView} from "react-intersection-observer"
import { useInfiniteQuery } from "react-query";
import { isEqual, uniqWith } from "lodash";
import axios from "axios";


const Home = (props) => {

                        /* I'LL BE HONEST WITH YOU, FETCHING TOP ARTIST DATA CODES ARE NOT MINE I STOLE IT FROM @alperalin */ 

                                        /* Check out his GitHub page : https://github.com/alperalin */
                                
    const ctx = useContext(ArtistContext)
    
    //Data Fetch fn
    const fetchData = async (pageNumber) => {
        return await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageNumber}&limit=10&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
    }

    /* Infinite query */
    const {data:queryData, fetchNextPage, isLoading, } = useInfiniteQuery(
        'Top Artists',
        ({ pageParam = 1 }) => fetchData(pageParam).then((res) => res.data),
        {
          select: (data) => ({
            pages: [
              ...uniqWith(
                data.pages.map((item) => item['artists']['artist']).flat(),
                isEqual
              ),
            ],
          }),

          getNextPageParam: (lastPage, pages) => {

            let page = parseInt(lastPage.artists['@attr'].page);
            const totalPage = parseInt(lastPage.artists['@attr'].totalPages);
            if (page < totalPage) {

                return ++page;
            }

            return undefined;

          },
        }
      );
       /* Infinite query */

       
      //Inview config
      const { ref, inView } = useInView({
        trackVisibility: true,
        delay: 500,
      });

      //Fetch data with scroll
      useEffect(() => {
        if (inView) fetchNextPage();
      }, [inView]);

 
      if(isLoading){
          return(<Loading />)
      }

    return(

        <div data-testid='border' className="artists-wrapper">

                <div className="artists-section" >

                        {queryData?.pages.map((artist,i) => 

                            <Fragment  key={i}>

                           
                            <NavLink  ref={ref}key={artist.name} 
                            onClick={() => ctx.onCurrentArtist(artist)} 
                            className={'artist-card'} 
                            to={artist.name}> 

                                <MainCard isHome={true} title='Artist' 
                                img={artist.image[1]['#text']} 
                                artist={artist.name} 
                                playcount={artist.playcount} 
                                listeners={artist.listeners}/>

                            </NavLink>
                      
                        </Fragment>
                            )
                        }
        
                </div>
            
            </div>

    )

}

export default Home;