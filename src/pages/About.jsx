import "./css/About.css"
const About = () => {
    const profileText = "I am a 21-year-old information technology student from Tampere. I have been learning coding since start of 2022 when I decided to change my studies from automation engineering to information technology. Since then there hasn't been many days when I wouldn't code at all. I have high motivation on learning new things about coding and it feels like I have learned more by myself than in school.";
    return(
        <div className="aboutContainer">
            <div className="imgAndText">
                <section>
                    <img src="src\assets\pictures\profile_pic2.jpg"></img>
                    <h1>Eero Kokkonen</h1>
                    <h5>Student & Developer</h5>
                </section>
                <section>
                    <h3>About me</h3>
                    <hr style={{marginLeft:"10px"}}/>
                    <p>{profileText}</p>
                    <section className="education">
                        <h4>Education</h4>
                        <hr/>
                        <h4>Tampere University of Applied Sciences</h4>
                        <p>Information Technology, Bachelor's Degree (2022-2024)</p>
                        <p>Electrical and Automation Engineering, Bachelor's Degree (2020-2022)</p>
                        <h4>Nurmon Lukio</h4>  
                        <p>Mathematical science (2017-2019)</p>
                        <p>Finnish Matriculation Examination</p>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default About;