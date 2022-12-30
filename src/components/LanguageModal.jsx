import "./css/LanguageModal.css"

const LanguageModal = ({text, header, onClick}) => {
    const details = text.map((row) =>
        <p key={row}>{row}</p>
    );
    return(
        <div className="modal">
            <section className="crossSection">
                <div className="cross" onClick={onClick}>
                    <span></span>
                    <span></span>
                </div>
            </section>
            
            
            <section /* className="textBox" */>
                <h3>{header}</h3>
                {details}
            </section>
        </div>
    )
}

export default LanguageModal;