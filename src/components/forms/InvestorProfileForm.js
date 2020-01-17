import React from 'react';
import InputField from './fields/InputField';
import {requiredName, requiredEmail, requiredPhone, requiredAddress} from './fields/validations';

export default({buttonLabel, onSubmit, invalid}) => {    
    return (
        <form onSubmit={onSubmit}>
            <div className="all-fields">
                <div className="row">
                    <div className="col-sm-6">
                        <InputField name="first_name" label="First Name" type="text" validate={requiredName}
                        />
                    </div>                    
                    <div className="col-sm-6">
                        <InputField name="last_name" label="Last Name" type="text" validate={requiredName} />
                    </div>                    
                </div>                
                <div className="row">
                    <div className="col-sm-6">
                        <InputField name="phone" label="Phone" type="text" validate={requiredPhone} />
                    </div>                    
                    <div className="col-sm-6">
                        <InputField name="email" label="Email" type="email" validate={requiredEmail}  />
                    </div>                    
                </div>               
                <div className="row">
                    <div className="col-sm-12">
                        <InputField name="address" label="Address" type="text" />
                    </div>                                        
                </div>  
            </div>    
            <div className="row">
                <div className="button-group">
                    <div className="col-sm-6">
                        <button disabled={!!invalid? 'disabled' : false} className="btn btn-primary btn-medium">{buttonLabel}</button>
                    </div>
                </div>
            </div>		        
        </form>
        
    )
}