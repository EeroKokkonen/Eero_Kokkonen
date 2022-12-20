import LanguageBox from "../components/LanguageBox"
import "./css/Skills.css"

const Other = () => {
    const header = "Besides coding I like to do: ";
    const sports = [
        "Swimming",
        "I love swimming and I used to do it competitively nowadays it is just a hobby to me.",
        "Other",
        "Occasionally I like to go for a run or play badminton."
    ];
    const investing = ["For some time I have been learning investing on stocks and cryptocurrencies."];
    const cooking = [
        "Sometimes when I have a time I like to try new recipes."
    ];
    const videoGames = ["I like to play video games to relax and have fun with friends."];
    const tech = ["I like to study and build computers. I used to mine cryptocurrencies and hopefully I will be able to start doing it in future."]
    return(
        <div>
            <h1>{header}</h1>
            <div className="container">
                <LanguageBox text={"Sports"} details={sports}/>
                <LanguageBox text={"Cooking"} details={cooking}/>
                <LanguageBox text={"Investing"} details={investing}/>
                
            </div>
            <div className="container">
                <LanguageBox text={"Computers"} details={tech}/>
                
            </div>
            <div className="container">
                <LanguageBox text={"Video games"} details={videoGames}/>
            </div>
        </div>
    )
}

export default Other;