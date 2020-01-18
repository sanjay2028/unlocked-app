import React, {Fragment} from 'react';
import { Field } from 'react-final-form';
import {IconUpload} from '../../common/Graphics';

const InputFile = ({onUpload, previewImageUrl=null, buttonLabel="Change logo"})=> {    
    
    return(
        <div className="field">            
            <label className="title">Upload Company Logo</label>
            <div className="field-input is-field-upload">
				<div className="text-upload">
					<div className="icon previewIcon">
					    <img src={!!previewImageUrl? previewImageUrl : IconUpload} alt="Upload Here" />
					</div>
				    {!previewImageUrl && <p>Click and drag a logo to this area or choose from a library</p>}
				</div>
				<div className="file-upload">
					<label htmlFor="file-upload-01" className="btn btn-outline-primary">{buttonLabel}</label>
				    <input type="file" className="input-file" id="file-upload-01" onChange={(event) => onUpload(event)} />
			    </div>
            </div>
            
        </div>        
    );
}

export default InputFile;
