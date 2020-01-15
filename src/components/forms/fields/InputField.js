import React from 'react';
import { Field } from 'react-final-form';

const InputField = ({label=undefined, placeholder="", type, name, validate, ...rest}) =>  {    
    
    return(
        <div className="field">
            {label && <label className="title">{label}</label>}
            <div className="field-input">
                <Field 
                    name={name}
                    validate={validate? validate : ""}
                    render={
                        ({ input, meta }) => {
                            const hasError = (meta.error && meta.touched)? 'hasError' : '';
                            const errorMessage = (meta.error && meta.touched)? meta.error : false;                                                        
                           return(
                            <div className="input-group">                                
                                {   (type=='textarea')?
                                    <textarea {...input} {...rest} placeholder={placeholder} className={`form-control form-control-textarea ${hasError}`}></textarea> :
                                    <input {...input} {...rest} type={type}  className={`form-control ${hasError}`} />
                                }
                                { errorMessage && <div className="invalid-feedback invalid-entry">{errorMessage}</div>}
                            </div>    
                           );                  
                        }
                    }
                />
            </div>
        </div>        
    );
}

export default InputField;