import LanguageBox from "../components/LanguageBox"
import { useEffect } from "react";
import "./css/Skills.css"
import { useTranslation } from "react-i18next";

const Other = ({setPage}) => {
    const { t } = useTranslation();

    useEffect(() => {
        setPage("interests");
    }, []);
    return(
        <div className="expPageContainer">
            <div className="container">
                <LanguageBox text={t('sportsHeader')} details={t('sports')}/>
                <LanguageBox text={t('cookingHeader')} details={t('cooking')}/>
                <LanguageBox text={t('investingHeader')} details={t('investing')}/>
                
            </div>
            <div className="container">
                <LanguageBox text={t('computerHeader')} details={t('tech')}/>
                <LanguageBox text={t('chessHeader')} details={t('chess')}/>
                <LanguageBox text={t('videoGamesHeader')} details={t('videoGames')}/>
            </div>
            
        </div>
    )
}

export default Other;