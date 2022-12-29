import { useEffect } from "react";
import "./css/About.css"
const About = ({setHeader}) => {
    const profileText = "I am a 21-year-old information technology student from Tampere. I have been learning coding since start of 2022 when I decided to change my studies from automation engineering to information technology. Since then there hasn't been many days when I wouldn't code at all. My current plan is to graduate in 2024. I love coding with C++ but I'm also interested in web developing and machine learning.";
    useEffect(() => {
        setHeader("About me");
    }, []);
    return(
        <div className="aboutContainer">
            <div className="imgAndText">
                <section>
                    <img src="/images/profile_pic2.jpg"></img>
                    <h1>Eero Kokkonen</h1>
                    <h5>Student & Developer</h5>
                </section>
                <section>
                    <h3>About me</h3>
                    <hr className="aboutLine"/>
                    <p>{profileText}</p>
                    <section className="education">
                        <h4>Education</h4>
                        <hr className="aboutLine"/>
                        <h4 className="studyHeader">Tampere University of Applied Sciences</h4>
                        <p>Information Technology, Bachelor's Degree (2022-2024)</p>
                        <p>Electrical and Automation Engineering, Bachelor's Degree (2020-2022)</p>
                        <h4 className="studyHeader">Nurmon Lukio</h4>  
                        <p>Mathematical science (2017-2019)</p>
                        <p>Finnish Matriculation Examination</p>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default About;