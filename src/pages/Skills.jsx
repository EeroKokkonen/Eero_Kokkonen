import "./css/Skills.css"
import LanguageBox from "../components/LanguageBox"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Skills = ({setPage}) => {
    const { t } = useTranslation();

    useEffect(() => {
        setPage("skills");
    }, []);
    return (
        <div className="expPageContainer">
            <div className="container">
                <LanguageBox text={"C++"} details={t('c++Text')}/>
                <LanguageBox text={"JavaScript"} details={t('jsText')}/>
                <LanguageBox text={"Python"} details={t('pythonText')}/>
            </div>
            <div className="container">
                <LanguageBox text={"Java"} details={t('javaText')}/>
                <LanguageBox text={"C#"} details={t('c#Text')}/>
                <LanguageBox text={"C"} details={t('cText')}/>
            </div>
            <hr className="line"/>
            <div className="container">
                <LanguageBox text={t('dbHeader')} details={t('dbText')}/>
                <LanguageBox text={t('lpHeader')} details={t('lpText')}/>
            </div>
            <div className="container">
                <LanguageBox text={t('otherHeader')} details={t('otherText')}/>
            </div>
        </div>
    )
    
}

export default Skills;