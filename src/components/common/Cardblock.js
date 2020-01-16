import React from 'react'

const Cardblock = ({heading, excerpt, action,buttonText}) => {
    return (
        <div className="ctn-inner">
            <h3>{heading}</h3>
			<div className="excerpt"><p>{excerpt}</p></div>
			<div className="button-group">
    <button className="btn btn-primary btn-medium" onClick={action}>{buttonText}</button>
		    </div>
        </div>
    )
}

export default Cardblock;