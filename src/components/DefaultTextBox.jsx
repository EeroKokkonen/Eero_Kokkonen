import "./css/DefaultTextBox.css";

const DefaultTextBox = ({header, description}) => {

    const details = description.map((row) =>
        <p key={row}>{row}</p>
    );

    return(
        <div className="hobbyContainer" >
            <h3>{header}</h3>
            {details}
        </div>
    )
}

export default DefaultTextBox;