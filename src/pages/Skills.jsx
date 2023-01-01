import "./css/Skills.css"
import LanguageBox from "../components/LanguageBox"
import { useEffect } from "react";

const Skills = ({setHeader}) => {
    const cpp = [
        "First language I learnt and probably the language that I have used the most. I have used it for own and school projects. I would say that I have a good unerstading of the C++.",
        "Some libraries and enviroments I have used:",
        "- Qt",
        "- Glm",
        "- Vulkan",
        "- Sfml",
        "- Visual studio"
    ]
    const js = [
        "The second most used language for me. I have used it for own and school projects. Mostly used for making web applications but also some experience from using React native.",
        "Some libraries and enviroments I have used:",
        "- Node.js",
        "- React.js",
        "- React native",
        "- Visual code"
    ]
    const python =[ 
        "The third most used language for me. Mostly learnt by myself. I have used it for example to machine learning and data analytics.",
        "Some libraries and enviroment I have used:",
        "- Pandas",
        "- Sklearn",
        "- Tensorflow",
        "- Tkinter",
        "- Spyder",
        "- Visual code"
    ]
    const java = [
        "Mostly used with Android studio to make native Android applications.",
        "Some enviroments I have used:",
        "- Android studio"
    ]
    const csharp = [
        "Some experience on making videogames with Unity and C#",
        "Some enviroments I have used:",
        "- Unity"
    ]
    const c = [
        "Little experience on C. Used in Linux OS to make small programs.",
    ]
    const db = [
        "Databases I have worked with:",
        "- MongoDB",
        "- Firebase",
        "- Aws (currently learning)"
    ]
    const lp = [
        "I have some experience at logic programming from studies. I mostly used function blocks.",
        "- Siemens Logo",
        "- Siemens TIA Portal"
    ]
    const other = [
        "Version controllers I have used:",
        "- GitHub",
        "- GitLab",
        "Other sites I have used:",
        "- Replit (used for hosting backend)"
    ]

    useEffect(() => {
        setHeader("Skills");
    }, []);
    return (
        <div className="expPageContainer">
            <div className="container">
                <LanguageBox text={"C++"} details={cpp}/>
                <LanguageBox text={"JavaScript"} details={js}/>
                <LanguageBox text={"Python"} details={python}/>
            </div>
            <div className="container">
                <LanguageBox text={"Java"} details={java}/>
                <LanguageBox text={"C#"} details={csharp}/>
                <LanguageBox text={"C"} details={c}/>
            </div>
            <hr className="line"/>
            <div className="container">
                <LanguageBox text={"Databases"} details={db}/>
                <LanguageBox text={"Logic"} details={lp}/>
            </div>
            <div className="container">
                <LanguageBox text={"Other"} details={other}/>
            </div>
        </div>
    )
    
}

export default Skills;