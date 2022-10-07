import "./loading.scss"

const Loading = (props) => {

    return(
        <div data-testid='loading' className="loading-wrapper__logo">

            <img alt='logo' style={{filter: props.dropShadow}} className="loadin-wrapper__logo" src={require("../../assets/logo.png")}></img>

        </div>
    )

}

export default Loading;