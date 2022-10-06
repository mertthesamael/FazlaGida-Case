import React, { useState } from "react";


const ArtistContext = React.createContext({
    dark:false
})

export const ArtistContextWrapper = (props) => {
    const [offset, setOffset] = useState(0)

    const [currentArtist, setCurrentArtist] = useState("")
    const offsetHandler = (value) => {
        setOffset(offset+value)
    }
  
    const currentArtistHandler = (name) => {
        return setCurrentArtist(name)
     
    }
  
    return(
        <ArtistContext.Provider value={{
            onCurrentArtist: currentArtistHandler,
            currentArtist:currentArtist,
            offset:offset,
            onSetOffset:offsetHandler
        }}>

            {props.children}
        </ArtistContext.Provider>
    )

}

export {ArtistContext}