import '../../../assets/css/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const [t] = useTranslation("global");
    return(
        <div className="container about-box px-3 py-4 rounded-3">
            <span className="about-text">{t('about.description')} </span>
        </div>
    )
}

export default About