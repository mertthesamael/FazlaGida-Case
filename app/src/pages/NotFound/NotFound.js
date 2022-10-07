import { NavLink } from "react-router-dom";
import "./notfound.scss"


const NotFound = () => {

    return(
        <div className="notfound">

            <h1>However, you are lost in the app. So you may want to go to <NavLink to='/'>main page</NavLink></h1>

            <img alt='logo' src={require("../../assets/logo.png")}></img>

            <h1>4 0 4</h1>
        </div>
    )

}

export default NotFound;