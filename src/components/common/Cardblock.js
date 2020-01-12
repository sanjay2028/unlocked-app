import React from 'react'

const Cardblock = ({heading, excerpt, action}) => {
    return (
        <div className="ctn-inner">
            <h3>{heading}</h3>
			<div className="excerpt"><p>{excerpt}</p></div>
			<div className="button-group">
			    <button className="btn btn-primary btn-medium" onClick={action}>Continue as Broker</button>
		    </div>
        </div>
    )
}

export default Cardblock;