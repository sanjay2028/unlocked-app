import React, {Component, Fragment} from 'react';


    
const Alert = ({type, message, action}) => {
    if(!!message) return <Fragment>&nbsp;</Fragment>;        
    return(
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
            <button type="button" className="close" onClick={action}><span aria-hidden="true">&times;</span></button>
            {message}
        </div>            
    );
}



export default Alert;