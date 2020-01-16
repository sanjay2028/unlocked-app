import React, {Component, Fragment} from 'react';
import Cardblock from '../../common/Cardblock';

class RegisterType extends Component {
    
    onUserTypeSelection = (type) => {
        this.props.onSelect(type);
    }

    render(){    
        return(        
            <Fragment>
                <div className="top-content">
                    <h1>What kind of account you want to create?</h1>
                    <div className="excerpt">
                    <p>Our Mission is to UNLOCK the ASX and make it easier and fairer for Investors to access Capital raises.</p>
                </div>                    
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-md-4">
                            <Cardblock 
                                heading="Investor" 
                                excerpt="A little paragraph of text about who Investor is and what benefits he can take from this app" 
                                buttonText="Continue as Investor"                                
                                action={() => this.onUserTypeSelection(1)} 
                            />        
                        </div>
                        <div className="col-md-4">                            
                            <Cardblock 
                                heading="Broker" 
                                excerpt="A little paragraph of text about who Broker is and what benefits he can take from this app" 
                                buttonText="Continue as Broker"                                
                                action={() => this.onUserTypeSelection(2)} 
                            />                                                            
                        </div>
                        <div className="col-md-4">
                            <Cardblock 
                                heading="Company" 
                                excerpt="A little paragraph of text about who what Companies can take benefits from this app" 
                                buttonText="Continue as Company"                                
                                action={() => this.onUserTypeSelection(3)} 
                            />                            
                        </div>
                    </div>
                </div>
            </Fragment>
        );    
    }
}



export default RegisterType;