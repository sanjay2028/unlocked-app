import React, {Fragment} from 'react';
import InputField from './fields/InputField';
import InputFile from './fields/InputFile';
import {requiredEmail, requiredCompany, requiredName, requiredPhone} from './fields/validations';
import {IconUpload} from '../common/Graphics';

export default ({buttonLabel=null,isProcessing, onSubmit, values=[], onLogoUpload, invalid=null, logoUrl}) => { 
    console.log("Checkout logo", logoUrl);
    const heading = localStorage.getItem('auth_token')? `${values.first_name}'s Profile` : "Create Your Profile";
    return (
        <Fragment>            
            <h1>{heading}</h1>
            <form onSubmit={onSubmit}>
                <div className="all-fields">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="first_name" label="First Name" type="text" validate={requiredName}  />                    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="last_name" label="Last Name" type="text" validate={requiredName}  />                    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="phone" label="Phone" type="text" validate={requiredPhone}  />                    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="email" label="Email" type="text" validate={requiredEmail}  />                    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="company_name" label="Company Name" type="text" validate={requiredCompany}  />                    
                            </div>
                            <div className="field">                    
                                <InputField name="description" label="Description" type="textarea"  />                    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <InputFile onUpload={onLogoUpload} previewImageUrl={logoUrl} />
                        </div>
                    </div>


                    <div className="row">
                        <div className="button-group">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <button disabled={invalid || isProcessing } className="btn btn-primary btn-medium">{buttonLabel}</button>
                            </div>
                            {localStorage.getItem('auth_token') &&
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <button className="btn btn-outline-primary btn-medium">Go to Main Page</button>
                            </div>
                            }
                        </div>
                    </div>		


                </div>
            </form>
        </Fragment>        
    );
}
