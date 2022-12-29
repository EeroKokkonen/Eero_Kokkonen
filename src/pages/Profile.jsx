import Socials from "../components/Socials"
import "./css/Profile.css"
import { useEffect } from "react";

const Profile = ({setHeader}) => {

    useEffect(() => {
        setHeader("Contacts");
    }, []);

    return (
        <div className="profileContainer">
            <h1>Eero Kokkonen</h1>
            <p>Student & Developer</p>

            <div className="imageAndTextContainer">
                <img src="/images/phone_icon.png"></img>
                <p>+358442615889</p>
            </div>

            <div className="imageAndTextContainer">
                <img src="/images/email_icon.png"></img>
                <p>eero.kokkonen@hotmail.com</p>
            </div>
            <Socials/>
        </div>
    )
}

export default Profile;