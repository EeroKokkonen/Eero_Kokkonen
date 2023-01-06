const GetNewText = (text) => {
    const string = "Kissa /kiipesi/ puuhun."
    let array = text.split("/");
    
    if(array.length === text.length)
        return text;
    
    let newText = [];
    for(let i = 0; i < array.length; i++){
        if (i % 2 === 0){
            newText[i] = array[i];
        }
        else
            newText[i] = <span key={array[i]} className="focusText">{array[i]}</span>
    }
    return <p key={array}>{newText}</p>;
}

export default GetNewText;