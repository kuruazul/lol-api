import '../../../assets/css/About.css';
import { useTranslation } from 'react-i18next';
import Languages from './FetchExamples/Languages';
import Spells from './FetchExamples/Spells';
import { NavLink } from 'react-router-dom';
const About = () => {
    //  init translation function
    const [t] = useTranslation("global");

    return(
        <div className="w-100">
            <div className="container about-box px-3 py-4 rounded-3">
                <span className="about-text">{t('about.description')} </span>                
            </div>
            <div className="container my-3">
                <div>
                <p className="about-text"> {t('about.subtitle')}</p>
                </div>
                <div className="row">

                {/* Adding example of fetch data from api: languages availables, spells used on the game */}
                <Languages/>
                <Spells/>

                </div>
            </div>
            <div className="container my-5 text-center">
                <NavLink className="btn text-white fs-1 btn-search-champs" to="/champs">{t('about.champsBtn')}</NavLink>
            </div>
            
        </div>
    )
}

export default About