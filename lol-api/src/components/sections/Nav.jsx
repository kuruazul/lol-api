import '../../assets/css/Nav.css'

import i18next from 'i18next'
import { useState } from 'react'

const Nav = () => {
    const [lang,setLang] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang"): "es")
    const changeLang=(e)=>{
        
            if(i18next.language === "es"){
                setLang(i18next.language)
                i18next.changeLanguage("en")
            }
            else{
                setLang(i18next.language)
                i18next.changeLanguage("es")
            }
            let lng = i18next.language
            localStorage.setItem("lang",lng)
    }
    return(
    <div className="text-center position-absolute w-100 title-box">
        <div className="position-absolute justify-content-end w-100 row">
            <div className="btn-lang-box position-fixed  w-auto">
                <button className="btn-lang w-auto border border-1 border-warning text-uppercase position-fixed" onClick={changeLang}>{lang}</button>
            </div>
        </div>
        <div className="text-title-box">
        <span className="text-uppercase title-text">league of legends api</span>
        </div>
    </div>
    )
}

export default Nav