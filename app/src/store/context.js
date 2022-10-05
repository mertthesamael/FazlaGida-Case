import React, { useEffect, useState } from "react";


const ThemeContext = React.createContext({
    dark:false
})

export const ThemeContextWrapper = (props) => {

    const userData = Boolean(localStorage.getItem('theme'))
    const [dark, setDark] = useState(userData)
    const [currentArtist, setCurrentArtist] = useState("")
    const darkHandler = () => {
        setDark(!dark)
        localStorage.setItem('theme', dark)
        console.group(userData)


    }
    const checkTheme = () => {
       if(localStorage===false){
        localStorage.setItem('theme', false)
       }else{

       }
    }
    const currentArtistHandler = (name) => {
        return setCurrentArtist(name)
     
    }
   useEffect(() => {
    checkTheme()
   },[])
    return(
        <ThemeContext.Provider value={{
            dark: dark,
            onChangeTheme: darkHandler,
            onCurrentArtist: currentArtistHandler,
            currentArtist:currentArtist
        }}>

            {props.children}
        </ThemeContext.Provider>
    )

}

export {ThemeContext}