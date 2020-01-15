import React, {Fragment} from 'react';
import InputField from './fields/InputField';
import {requiredEmail, requiredCompany,requiredPassword, requiredName, requiredPhone} from './fields/validations';
import {IconUpload} from '../common/Graphics';

export default ({buttonLabel=null, onSubmit, values=[], invalid=null}) => {            
    return (
        <Fragment>            
            <h1>Create Your Profile</h1>
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
                                <InputField name="password" label="Password" type="password" validate={requiredPassword}  />                    
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="field">                    
                                <InputField name="password_confirmation" label="Confirm password" type="password" validate={requiredPassword}  />                    
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
                            <div class="field">
								<label class="title">Upload Company Logo</label>
								<div class="field-input is-field-upload">
									<div class="text-upload">
										<div class="icon">
											<img src={IconUpload} alt="Upload Here" />
										</div>
										<p>Click and drag a logo to this area or choose from a library</p>
									</div>
									<div class="file-upload">
										<label for="file-upload-01" class="btn btn-outline-primary">Choose logo</label>
										<input type="file" class="input-file" id="file-upload-01" />
									</div>
								</div>

						    </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="button-group">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <button disabled={invalid} className="btn btn-primary btn-medium">{buttonLabel}</button>
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
