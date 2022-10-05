import "./loading.scss"

const Loading = () => {

    return(
        <div data-testid='loading' className="loading-wrapper__logo">
            <img className="loadin-wrapper__logo" src={require("../../assets/logo.png")}></img>
        </div>
    )

}

export default Loading;