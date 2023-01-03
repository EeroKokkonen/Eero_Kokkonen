import "./css/LanguageModal.css"
import GetNewText from "../hooks/GetNewText";



const LanguageModal = ({text, header, onClick}) => {
    const details = text.map((row) =>
        <div key={row}>
            {row === "" ? <br/> : GetNewText(row)}
        </div>
    );
    return(
        <div className="modal">
            <div className="cross" onClick={onClick}>
                <span></span>
                <span></span>
            </div>
            <h3>{header}</h3>
            <section className="textBox">
                
                {details}
            </section>
        </div>
    )
}

export default LanguageModal;