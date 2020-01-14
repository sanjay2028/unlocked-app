import React, { Component, Fragment } from 'react';
import Dropdown from './Dropdown';

const AssetsDropdown  = ({label, data, onChange})=>        
        <Fragment>
            <label className="hl-title">{label}</label>
            <Dropdown data={data} handleChange={onChange}/>
        </Fragment>
    


export default AssetsDropdown;