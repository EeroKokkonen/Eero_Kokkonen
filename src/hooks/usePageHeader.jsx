import { useState } from "react";

const usePageHeader = () => {
    const path = window.location.pathname;
    const [header, setHeader] = useState("");
    if(path === '/'){
        setHeader("About me");
        return [header, setHeader];
    }
    const pathHeader = path.split('/');
    
    let _header = pathHeader[pathHeader.length - 1];
    _header = header.charAt(0).toUpperCase() + header.slice(1);
    setHeader(_header);
    
    return {header, setHeader};
}


export default usePageHeader;