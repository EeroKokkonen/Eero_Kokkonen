import "./css/LanguageBox.css"
import LanguageModal from "./LanguageModal"
import { useState } from "react";
import Backdrop from "./Backdrop";
const LanguageBox = ({text, details}) => {

    const [showModal, setShowModal] = useState(false);
    const showDetails = () =>{
        setShowModal(true)
    }
    const closeDetails = () => {
        setShowModal(false);
    }
    return(
        <>
            <div className="experienceContainer" onClick={showDetails}>
                <h3>{text}</h3>
                
            </div>
            {showModal && <LanguageModal  header={text} text={details}/>}
            {showModal && <Backdrop onClick={closeDetails}/>}
        </>
    )
}

export default LanguageBox;