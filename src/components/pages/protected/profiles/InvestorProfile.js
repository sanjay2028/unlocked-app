import React, {Component} from 'react';
import { Dropdown, Radio } from 'semantic-ui-react'

const assets = [
    {key : "industry", text : "Industry", value : "Industry"},
    {key : "two", text : "Healthcare", value : "Healthcare"},
    {key : "three", text : "Culture", value : "Culture"},
    {key : "infrastructure", text : "Infrastructure", value : "Infrastructure"},
    {key : "technologies", text : "Technologies", value : "Technologies"}    
];

const Notification = () => {
    const options = [
        {key : 'onceaday', label:"Please alert me once a day of new deals", value:"Once a day"},
        {key : 'eachindividualdeal', label:"Alert me for each individual deal", value:"Each individual deal"},
        {key : 'onlystocks', label:"Alert for only stocks under 10c", value:"Only stocks"},
    ].map(option => {
        return <div className="item" key={option.key}>
        <div className="is-radio">
            <Radio label={option.label} name='notifications' value={option.value} />
        </div>
    </div>
    })    
    return(
        <div className="option radio-option">            
            {options}
        </div>
    );
}

class InvestorProfile extends Component{
    render(){
        return(
            <div className="page-create-account investor-account investor-account-01">
                <div className="form-normal form-create-account">
                    <h1>Last small settings</h1>
                    <form>
                        <div className="all-fields">
                            <div className="field-group-item field-radio-option">
                                <label className="hl-title">Notification Settings</label>
                                <Notification />                                
                            </div>
                            <div className="field-group-item">
                                <label className="hl-title">What's your typical size investment?</label>
                                <div className="option type-option-normal">
                                    <ul className="clearfix">
                                        <li>&lt;10k</li>
                                        <li className="active">10k-100k</li>
                                        <li>100k-500k</li>
                                        <li>>500k</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="field-group-item">
                                <label className="hl-title">What's your typical size investment?</label>
                                <div className="option type-option-lg">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="item-option">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="images/ico-type-01.png" alt="" />
                                                    </div>
                                                    <div className="text-option">
                                                        <span className="hl">Small</span>
                                                        <span>&lt;10ee</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="active">
                                            <div className="item-option">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="images/ico-type-02.png" alt="" />
                                                    </div>
                                                    <div className="text-option">
                                                        <span className="hl">Small</span>
                                                        <span>&lt;10ee</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item-option">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <img src="images/ico-type-03.png" alt="" />
                                                    </div>
                                                    <div className="text-option">
                                                        <span className="hl">Small</span>
                                                        <span>&lt;10ee</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="field-group-item">
                                <label className="hl-title">What is your favourite asset className?</label>
                                <div style={{"max-width":'300px'}}>
                                    <Dropdown
                                        placeholder='Favourite Assets' 
                                        fluid                                   
                                        multiple
                                        selection
                                        options={assets}
                                    />           
                                </div>
                                                         
                            </div>
                            <div className="field-group-item">
                                <label className="hl-title">What sort of other assets do you usually invest in?</label>
                                <div style={{"max-width":'300px'}}>
                                <Dropdown
                                    placeholder='Other Assets'
                                    fluid
                                    multiple                                    
                                    selection
                                    options={assets}
                                />
                                </div>   
                            </div>
                        </div>
                        <div className="row is-button-group">
                            <div className="button-group">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <button className="btn btn-primary btn-medium">Save and continue</button>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <button className="btn btn-outline-primary btn-medium">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default InvestorProfile