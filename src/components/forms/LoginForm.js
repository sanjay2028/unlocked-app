import React from 'react';
import InputField from './fields/InputField';
import {Link} from 'react-router-dom';
import {requiredEmail, requiredPassword} from './fields/validations';

export default ({buttonLabel, onSubmit, invalid}) => {    
    return (
        <form onSubmit={onSubmit}>
            <div className="all-fields">
                <div className="field">                    
                    <InputField name="email" label="Email" type="email" validate={requiredEmail}  />                    
                </div>
                <div className="field hl-margin">
                    <InputField name="password" label="Password" type="password" validate={requiredPassword} />                                    
                    <div className="text"><p><Link to="/auth/forgot-password">Forgot password?</Link></p></div>                    
                </div>
                <div className="field hl-margin">
                    <div className="is-checkbox">
                        <div className="ui checkbox">
                            <input type="checkbox" name="example" />
                            <label className="title title-checkbox">Remember me</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="button-group">
                    <div className="col-sm-12">
                        <button disabled={!!invalid? 'disabled' : false} className="btn btn-primary btn-medium">Login</button>
                    </div>
                </div>
            </div>
            <div className="text text-bottom">
                <p>Don’t have an account? <Link to="/auth/register">Registration</Link></p>
            </div>
        </form>
    )
}