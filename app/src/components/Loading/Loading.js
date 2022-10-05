import "./loading.scss"

const Loading = () => {

    return(
        <div className="loading-wrapper__logo">
            <img className="loadin-wrapper__logo" src={require("../../assets/logo.png")}></img>
        </div>
    )

}

export default Loading;