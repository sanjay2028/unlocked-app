import React, { Component } from 'react';
import $ from 'jquery';
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../../../node_modules/bootstrap-select/dist/js/bootstrap-select";

class Dropdown extends Component{

    constructor(props){
        super(props);
        this.state = {
            options : []
        }
    }

    componentDidMount(){
        const {data} = this.props;
        this.setState({
            ...this.state, options: data
        })
        $(document).ready(function(){
            $('.select-picker').selectpicker();
        });
    }

    handleChange = (event)=>{        
        let optedOptions = [];        
        for(let item of event.target.options){
            if(item.selected){
                optedOptions.push(item.value);
            }
        }
        this.props.handleChange(optedOptions);
    }

    render(){            
            const { data } = this.props;
            let options =   this.props.data.map(({value, label, selected}, index) =>
                        (selected)?
                        <option selected key={index+"ser"} value={value}>{label}</option> : 
                        <option key={index+"ser"} value={value}>{label}</option>);           
            return(
            <select className="select-picker" multiple data-selected-text-format="count > 3" multiple title="Select more than one" onChange={(event) => this.handleChange(event) }>
               {options}             
            </select>
        );
    }
}


export default Dropdown;