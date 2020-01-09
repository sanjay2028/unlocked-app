import React, { Component } from 'react';
import { Search } from './index';

class ToggleSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            active : false
        }
    }

    handleToggle = () =>{
        this.setState({
            ...this.state, active:!this.state.active
        });
    }

    render(){
        const activeClasses = this.state.active ? 'search active' : 'search';
        return(
            <div className={activeClasses}>
		  		<div className="toggle-search" onClick={this.handleToggle}><span></span></div>
		  		<div className="smd-search"><Search /></div>
		  	</div>
        );
    }

}

export default ToggleSearch;