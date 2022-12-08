import "./css/LanguageModal.css"

const LanguageModal = ({text, header}) => {
    const details = text.map((row) =>
        <p key={row}>{row}</p>
    );
    return(
        <div className="modal">
            <h3>{header}</h3>
            {details}
        </div>
    )
}

export default LanguageModal;