import { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom"
import DarkMode from "../../components/DarkMode/DarkMode";
import { ThemeContext } from "../../store/context";
import ArtistPage from "../ArtistPage/ArtistPage";
import Home from "../Home/Home"
import "./main.scss"

const Main = (props) => {
    const ctx = useContext(ThemeContext)
   
    const themeSwitch = () => {
        ctx.onChangeTheme()
    }

   

    return(
        <div data-testid='background' className={"pagewrapper"}>
            <div className="themechange">
                <div className="themechange__btnwrapper">
                    <DarkMode></DarkMode>
                {/* <button style={ctx.dark?{bottom:'-1.5rem'}:{bottom:'2.5rem'}} onClick={themeSwitch}>Change Theme</button> */}

                </div>
            </div>

            <Switch>

                <Route path={'/:artist'}>
                    <ArtistPage />
                </Route>

                <Route path={'/'}>
                    <Home></Home>
                </Route>

            </Switch>

        </div>
    )

}

export default Main;