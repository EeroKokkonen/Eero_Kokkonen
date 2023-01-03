import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./css/About.css"
import GetNewText from "../hooks/GetNewText";
const About = ({setPage}) => {

    const { t } = useTranslation();
    
    useEffect(() => {
        setPage("aboutMe");
    }, []);

    return(
        <div className="aboutContainer">
            <div className="imgAndText">
                <section>
                    <img src="/images/profile_pic2.jpg"></img>
                    <h1>Eero Kokkonen</h1>
                    <h5>{t('status')}</h5>
                </section>
                <section>
                    <h3>{t('aboutMeHeader')}</h3>
                    <hr className="aboutLine"/>
                    {GetNewText(t('aboutMeText'))}
                    <section className="education">
                        <h4>{t('education')}</h4>
                        <hr className="aboutLine"/>
                        <h4 className="studyHeader">{t('educationHeader1')}</h4>
                        <p>{t('educationText11')}</p>
                        <p>{t('educationText12')}</p>
                        <h4 className="studyHeader">{t('educationHeader2')}</h4>
                        <p>{t('educationText21')}</p>
                        <p className="lastPhrase">{t('educationText22')}</p>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default About;