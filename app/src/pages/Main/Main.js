import { Route, Switch } from "react-router-dom"
import ArtistPage from "../ArtistPage/ArtistPage";
import Home from "../Home/Home"


const Main = (props) => {

    return(
        <div className="pagewrapper">

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