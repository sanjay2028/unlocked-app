import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="page-signup page-forgot-password">            
            <div class="form-normal form-forgot-password">                
                <h1>Forgot password</h1>
                <form>
                    <div className="all-fields">
                        <div className="field">
                            <label className="title">Email</label>
                            <div className="field-input">
                                <input type="email" className="form-control" />
                            </div>
                            <div className="text">
                                <p>We will send a link in your email to reset a password</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-group">
                            <div className="col-sm-12">
                                <button className="btn btn-primary btn-medium">Send reset link</button>
                            </div>
                        </div>
                    </div>
                    <div className="text text-bottom">
                        <p><Link to="/auth/login">Back to Login</Link></p>
                    </div>
                </form>
            </div>            
        </div>
    )
}

export default ForgotPassword;