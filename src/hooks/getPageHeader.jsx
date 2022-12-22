
const getPageHeader = () => {
    const path = window.location.pathname;
    if(path === '/'){
        return "About me"
    }

    const pathHeader = path.split('/');
    let header = pathHeader[pathHeader.length - 1];
    header = header.charAt(0).toUpperCase() + header.slice(1);
    return header;
}


export default getPageHeader;