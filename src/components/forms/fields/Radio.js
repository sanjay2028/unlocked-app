import React, { Component } from 'react';
import $ from 'jquery';
import '../../../assets/vendors/semantic/semantic.min';

class Radio extends Component{

    componentDidMount(){
        $(document).ready(function(){
            $('.ui.checkbox').checkbox()
        });
    }

    render(){
        return(
            <div className="item">
				<div className="is-radio">
				    <div class="ui radio checkbox checked">
					    <input type="radio" name="alert" checked="checked" />
					    <label>Please alert me once a day of new deals</label>
				    </div>
			    </div>
            </div>
        );
    }
}


export default Radio;