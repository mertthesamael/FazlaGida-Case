import { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom"
import DarkMode from "../../components/DarkMode/DarkMode";
import { ArtistContext } from "../../store/context";
import ArtistPage from "../ArtistPage/ArtistPage";
import Home from "../Home/Home"
import "./main.scss"

const Main = (props) => {

    const ctx = useContext(ArtistContext)
   

    return(
        <div data-testid='background' className={"pagewrapper"}>
            <div className="themechange">
                <div className="themechange__btnwrapper">

                    <DarkMode />

                </div>
            </div>

            <Switch>

                <Route path={'/:mbId'}>

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