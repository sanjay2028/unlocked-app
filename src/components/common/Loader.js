import React from 'react';
import {Spinner} from './Graphics';

const Loader = () => 
        <div className="loader">
                <div className="loader_content">
                    <img src={Spinner} alt="Loading ...." />
                </div>
        </div>

export default Loader;