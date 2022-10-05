import "./DarkMode.scss"

const DarkMode = () => {

/*DARK MODE SETTINGS */

    let clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
    if (localStorage){
        theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }else{
        body.classList.add(lightTheme);
    }

/*DARK MODE SETTINGS */

/*THEME SWITCH FUNCTION */

    const switchTheme = (e) => {
        if (theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        }else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }

/*THEME SWITCH FUNCTION */


    return(
        <button className={theme === "dark"? clickedClass : ""} id='darkMode' onClick={e => switchTheme(e)}>
            Test
        </button>
    )


}

export default DarkMode;