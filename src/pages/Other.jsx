import LanguageBox from "../components/LanguageBox"
import { useEffect } from "react";
import "./css/Skills.css"

const Other = ({setHeader}) => {
    const sports = [
        "I love swimming and I used to do it competitively. Nowadays it is just a hobby to me.",
        "Occasionally I also like to go for a run or play badminton."
    ];
    const investing = ["For some time I have been learning investing on stocks and cryptocurrencies."];
    const cooking = [
        "Sometimes when I have a time I like to try new recipes."
    ];
    const videoGames = ["I like to play video games to relax and have fun with friends."];
    const tech = ["I like to study and build computers. I used to mine cryptocurrencies and hopefully I will be able to start doing it in future."]
    const chess = ["I'm still beginner at chess but I really like it. It's fun to challenge myself to climb ranking as far as I can."]

    useEffect(() => {
        setHeader("Interests");
    }, []);
    return(
        <div className="expPageContainer">
            <div className="container">
                <LanguageBox text={"Sports"} details={sports}/>
                <LanguageBox text={"Cooking"} details={cooking}/>
                <LanguageBox text={"Investing"} details={investing}/>
                
            </div>
            <div className="container">
                <LanguageBox text={"Computers"} details={tech}/>
                <LanguageBox text={"Chess"} details={chess}/>
                <LanguageBox text={"Video games"} details={videoGames}/>
            </div>
            
        </div>
    )
}

export default Other;