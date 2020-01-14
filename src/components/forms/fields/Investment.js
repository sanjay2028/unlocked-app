import React, { Fragment, Component } from 'react';
import {IconType1, IconType2, IconType3} from '../../common/Graphics';

const InvestmentLargeOption = ({image, heading, value}) =>{
    return(
        <div className="item-option">
			<div className="inner">
				<div className="icon"><img src={image} alt="" /></div>
			    <div className="text-option">
                    <span className="hl">{heading}</span>
                    <span>{value}</span>
			    </div>
		    </div>
        </div>    
    )
};


class InvestmentLarge extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: []
        }
    }

    handleClick = (e, value) => {        
        this.props.handleChange(value);
    }

    render(){        
        const {label, data} = this.props;
        let output = data.map(
            ({current, value, ...rest}, index) => 
            <li 
                onClick={
                        (e) => this.handleClick(e, value)
                } 
                className={current? "active" : "" } 
                key={`lrg_${index}`}>
                <InvestmentLargeOption {...rest} />
            </li>)

        return (
            <Fragment>
                <label className="hl-title">{label}</label>
                <div className="option type-option-lg"><ul className="clearfix">{output}</ul></div>
            </Fragment>
        )
    
    }
}


const InvestmentSmallOption = ({value}) =>{
    return(<Fragment>{value}</Fragment>)
};

class InvestmentSmall extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: []
        } 
    }

    handleClick = (e, value) => {            
        this.props.handleChange(value);
    }

    render(){
        const {label, data} = this.props;
        let output = data.map(
                        ({current, value, ...rest}, index) => 
                            <li onClick={(e) => this.handleClick(e, value) } className={current? "active" : "abraca" } key={`smlx_${index}`}>
                                <InvestmentSmallOption value={value} {...rest} />
                            </li>
                        );
        return (
            <Fragment>
                <label className="hl-title">{label}</label>
                <div className="option type-option-normal"><ul className="clearfix">{output}</ul></div>
            </Fragment>
        );
    }
}

export {InvestmentSmall, InvestmentLarge}