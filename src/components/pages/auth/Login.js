import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="page-login page-signup">            
            <div className="form-normal form-login">
                <h1>Login</h1>
                <form>
                    <div className="all-fields">
                        <div className="field">
                            <label className="title">Email</label>
                            <div className="field-input">
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="field hl-margin">
                            <label className="title">Password</label>
                            <div className="field-input">
                                <input type="password" className="form-control" />
                                <span className="btn-toggle hide"></span>
                            </div>
                            <div className="text">
                                <p><Link to="/auth/forgot-password">Forgot password?</Link></p>
                            </div>
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
                                <button className="btn btn-primary btn-medium">Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="text text-bottom">
                        <p>Don’t have an account? <Link to="/auth/register">Registration</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default Login;