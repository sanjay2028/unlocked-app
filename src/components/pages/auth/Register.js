import React from 'react';

const Register = (props) => {
    let { type } = props.match.params;
    
    return (
        <div className="page-signup page-create-account">
            <div className="form-normal form-create-account">
                <h1>Create a free account</h1>
                <form>
                    <div className="all-fields">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">First Name</label>
                                    <div className="field-input">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">Last Name</label>
                                    <div className="field-input">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">Phone</label>
                                    <div className="field-input">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">Email</label>
                                    <div className="field-input">
                                        <input type="email" className="form-control" placeholder="nickname@example.com" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">Password</label>
                                    <div className="field-input">
                                        <input type="password" className="form-control" />
                                        <span className="btn-toggle hide"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="field">
                                    <label className="title">Confirm password</label>
                                    <div className="field-input">
                                        <input type="password" className="form-control" />
                                        <span className="btn-toggle hide"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-group">
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-medium">Create account</button>
                            </div>
                        </div>
                    </div>		
                </form>
            </div>
        </div>
    );
}

export default Register;