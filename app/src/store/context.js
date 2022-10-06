import React, { useState } from "react";


const ThemeContext = React.createContext({
    dark:false
})

export const ThemeContextWrapper = (props) => {

    const [currentArtist, setCurrentArtist] = useState("")
  
  
    const currentArtistHandler = (name) => {
        return setCurrentArtist(name)
     
    }
  
    return(
        <ThemeContext.Provider value={{
            onCurrentArtist: currentArtistHandler,
            currentArtist:currentArtist,
        }}>

            {props.children}
        </ThemeContext.Provider>
    )

}

export {ThemeContext}