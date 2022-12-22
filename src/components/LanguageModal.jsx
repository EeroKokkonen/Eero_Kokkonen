import "./css/LanguageModal.css"

const LanguageModal = ({text, header, onClick}) => {
    const details = text.map((row) =>
        <p key={row}>{row}</p>
    );
    return(
        <div className="modal">
            <div className="cross" onClick={onClick}>
                <span></span>
                <span></span>
            </div>
            <h3>{header}</h3>
            {details}
        </div>
    )
}

export default LanguageModal;