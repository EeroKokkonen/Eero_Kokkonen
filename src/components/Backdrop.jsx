import "./css/Backdrop.css"
import { useRef, useEffect } from "react";

const Backdrop = (props) => {

    const backdrop = useRef();
    useEffect(() => {
      if (!props.dim){
        backdrop.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }, []);
    
    return <div className="backdrop" onClick={props.onClick} ref={backdrop}/>;
  };
  
  export default Backdrop;