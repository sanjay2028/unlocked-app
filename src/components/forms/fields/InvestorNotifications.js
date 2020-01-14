import React, { Component, Fragment } from 'react';
import {Radio} from 'semantic-ui-react';


class InvestorNotifications extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: [
                        {key : 'onceaday', label:"Please alert me once a day of new deals", value:"Once a day", current:true},
                        {key : 'eachindividualdeal', label:"Alert me for each individual deal", value:"Each individual deal",current:false},
                        {key : 'onlystocks', label:"Alert for only stocks under 10c", value:"Only stocks",current:false},
                    ]
        }
    }

    componentDidMount(){
        const {data} = this.props;
        
        this.setState({
            options : data
        })
    }

    handleClick = (event, { value }) => {
         
    }

    render(){
        const {label,data} = this.props;
        const options = data.map(({key, label, value, current},index) => {
            return (
                <div className="item" key={key+index+"zd"}>
                    <div className="is-radio">
                        <Radio 
                            name="notifications" 
                            checked={current == true} 
                            label={label} 
                            value={value} 
                            onChange={(event) => this.props.handleChange(event,value)}                             
                        />
                    </div>                    
                </div>
            )
        })

        return(
            <Fragment>
                <label className="hl-title">{label}</label>
                <div className="option radio-option">{options}</div>
            </Fragment>
        );

    }
}


export default InvestorNotifications;   

