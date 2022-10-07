import { NavLink, Route, Switch } from "react-router-dom"
import DarkMode from "../../components/DarkMode/DarkMode";
import ArtistPage from "../ArtistPage/ArtistPage";
import Home from "../Home/Home"
import "./main.scss"

const Main = (props) => {


   

    return(
        <div data-testid='background' className={"pagewrapper"}>

            <div className="themechange">

                <div className="themechange__btnwrapper">

                    <DarkMode />

                </div>

            </div>
            
            {/* ROUTES */}

            <Switch>
              
                <Route path={'/:artistName'}>

                    <NavLink to='/' className="goback" />

                    <ArtistPage />

                </Route>

                <Route path={'/'}>

                    <h1 id='title'>Top Artists</h1>

                    <Home />
                    
                </Route>

            </Switch>

        </div>
    )

}

export default Main;