import React, { useState } from "react";


const ArtistContext = React.createContext({
    emptyValue:''
})

export const ArtistContextWrapper = (props) => {


    const [currentArtist, setCurrentArtist] = useState("")
  
    const currentArtistHandler = (name) => {

        return setCurrentArtist(name)
     
    }
  
    return(
        <ArtistContext.Provider value={{
            onCurrentArtist: currentArtistHandler,
            currentArtist:currentArtist,
            }}>

            {props.children}

        </ArtistContext.Provider>
    )

}

export {ArtistContext}