import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import AssetsDropdown from '../../../forms/fields/AssetsDropdown';
import InvestorNotifications from '../../../forms/fields/InvestorNotifications';
import {InvestmentSmall, InvestmentLarge} from '../../../forms/fields/Investment';
import {IconType1, IconType2, IconType3} from '../../../common/Graphics';
import { connect } from 'react-redux';
import { updatePreferences, clearAlert } from '../../../../actions/profileActions';
import Alert from '../../../common/Alert';

class InvestorPreferences extends Component{

    constructor(props){
        super(props);
        this.state = {
            notifications : [
                {key : 'onceaday', label:"Please alert me once a day of new deals", value:"Once a day", current:true},
                {key : 'eachindividualdeal', label:"Alert me for each individual deal", value:"Each individual deal",current:false},
                {key : 'onlystocks', label:"Alert for only stocks under 10c", value:"Only stocks",current:false},
            ], investment_size : [
                {value : "10K", label: "<10K", current: true},
                {value : "10K-100k", label: "10K - 100k", current:false},
                {value : "100K-500K", label: "100K - 500K", current:false},
                {value : "500K+", label: ">500K", current:false}    
            ], company_size : [
                {value : "Small", label: "<10K", heading:"Small", image:IconType1, current:true },
                {value : "Medium", label: "<20K", heading:"Medium", image:IconType3, current:false },
                {value : "Large", label: "<30K", heading:"Large", image:IconType3, current:false }    
            ], assets_0: [
                {value:"Industry", label: "Industry", selected : false},
                {value:"Healthcare", label: "Healthcare",selected : false},
                {value:"Infrastruture", label: "Infrastruture",selected : false},
                {value:"Culture", label: "Culture",selected : false},
                {value:"Technologies", label: "Technologies",selected : false}            
            ], assets_1: [
                {value:"Industry", label: "Industry", selected : false},
                {value:"Healthcare", label: "Healthcare", selected : false},
                {value:"Infrastruture", label: "Infrastruture", selected : false},
                {value:"Culture", label: "Culture", selected : false},
                {value:"Technologies", label: "Technologies", selected : false}            
            ]
        }
    }

    componentDidMount(){
        let {notifications, investment_size, company_type, assets_0, assets_1} = this.props.currentUser;
        let newState = {}
        newState.notifications = this.state.notifications.map(item => {
            if(item.value == notifications) 
                item.current = true; 
            else 
                item.current = false;
            return item;
        })

        newState.investment_size = this.state.investment_size.map(item => {
            if(item.value == investment_size) 
                item.current = true; 
            else 
                item.current = false;
            
                return item;
        })

        newState.company_size = this.state.company_size.map(item => {
            if(item.value == company_type) 
                item.current = true; 
            else 
                item.current = false;

            return item;
        })

        console.log(assets_0);

        if(assets_0 !== undefined){
            let assetsOne = assets_0.split(",");
            if(assetsOne.length > 0){
                newState.assets_0 = this.state.assets_0.map(item => {
                    if(assetsOne.indexOf(item.value) !== -1) 
                        item.selected = true; 
                    else 
                        item.current = false;
                    
                    return item;
                })
            }
        }
        
        if(assets_1 !== undefined){
            let assetsTwo = assets_1.split(",");
            if(assetsTwo.length > 0){
                newState.assets_1 = this.state.assets_1.map(item => {
                    if(assetsTwo.indexOf(item.value) !== -1) 
                        item.selected = true; 
                    else 
                        item.current = false;
                    
                    return item;
                })
            }
        } 

        this.setState({
            ...newState
        })
    }

    handleNotification = (event, value) => {        
        let newNotifications = this.state.notifications.map((item)=>{
            if(item.value == value )
                item.current =  true
            else
                item.current = false
            
            return item;
        })

        this.setState({
            notifications : newNotifications
        })        
    }

    handleInvestmentSize = (value) => {        
        let newInvestmentSize = this.state.investment_size.map((item)=>{
            if(item.value == value ){                
                item.current =  true
            } else {                
                item.current = false
            }
            return item;
        });

        this.setState({
            investment_size : newInvestmentSize
        })   
    }

    handleCompanySize = (value) => {
        let newCompanySize = this.state.company_size.map((item)=>{
            if(item.value == value )
                item.current =  true
            else
                item.current = false
            
            return item;
        });

        this.setState({
            company_size : newCompanySize
        });   
    }

    filterDropdown = (chosenOptions,options) => {
        return options.map(item => {
            item.selected = (chosenOptions.indexOf(item.value) == -1)? false : true                
            return item;
        })
    }

    handleAssetsOne = (options) => {        
        let newAssets = this.filterDropdown(options, this.state.assets_0);        
        this.setState({assets_0 : newAssets})   
    }

    handleAssetsTwo = (options) => {
        let newAssets = this.filterDropdown(options,this.state.assets_1);
        this.setState({assets_1 : newAssets})   
    }

    getSettings(setting){
        let option = null;
        let optArray = [];
        switch(setting){
            case 'notifications':
                option = this.state.notifications.filter(item => item.current == true);                
                return option && option[0]? option[0].value: null;            
            case 'investment_size':                
                option = this.state.investment_size.filter(item => item.current == true);
                console.log("size", option);
                return option && option[0]? option[0].value: null;            
            case 'company_size':
                option = this.state.company_size.filter(item => item.current == true);
                return option && option[0]? option[0].value: null;            
            case 'assets_0':                
                option = this.state.assets_0.filter(item => item.selected == true);                                
                for(let item of option){
                    optArray.push(item.value);
                }
                return optArray.join(",");
            case 'assets_1':
                option = this.state.assets_1.filter(item => item.selected == true);                                
                for(let item of option){
                    optArray.push(item.value);
                }
                return optArray.join(",");
            default : 
                return;

        }

    }

    handleSettings = (e) => {
        e.preventDefault();
        let payload = {}        
        payload = {
            notifications   : this.getSettings('notifications'),
            investment_size : this.getSettings('investment_size'),
            company_type    : this.getSettings('company_size'),
            assets : [this.getSettings('assets_0'), this.getSettings('assets_1')],
            markets : ["market 1", "market2"]
        }

        this.props.updatePreferences(payload);

    }
    
    handleAlert = ()=> {
        this.props.clearAlert();
    }

    render(){

        const {notifications,investment_size, company_size, assets_0,assets_1} = this.state;
        const { preferences } = this.props;
        if(preferences.success===true) return <Redirect to="/user/dashboard" /> 
        return(            
            <div className="page-create-account investor-account investor-account-01 ">
                <div className="form-normal form-create-account">
                    <h1>Last small settings</h1>
                    { preferences.message && <Alert type={preferences.success ? 'success' : 'warning'} message={preferences.message} action={this.handleAlert} />}                    
                    <form onSubmit={this.handleSettings}>                        
                        <div className="all-fields">
                            <div className="field-group-item field-radio-option">                                
                                <InvestorNotifications label="Notification Settingsss" data={notifications} handleChange={this.handleNotification} />                                
                            </div>
                            <div className="field-group-item">                                
                                <InvestmentSmall label="What's your typical size investment?" data={investment_size} handleChange={this.handleInvestmentSize} />
                            </div>
                            <div className="field-group-item">
                                <InvestmentLarge label="In What size Company do you typically invest?" data={company_size} handleChange={this.handleCompanySize } />
                            </div>
                            <div className="field-group-item">                                
                                <AssetsDropdown label="What sectors of the market do you like?" data={assets_0} onChange={this.handleAssetsOne} />
                            </div>
                            <div className="field-group-item">                                
                                <AssetsDropdown label="What sort of other assets do you usually invest in?" data={assets_1} onChange={this.handleAssetsTwo} />
                            </div>
                        </div>
                        <div className="row is-button-group">
                            <div className="button-group">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <button disabled={preferences.isProcessing} className="btn btn-primary btn-medium">Save and continue</button>
                                </div>                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({auth}) => ({
    currentUser : auth.currentUser,
    preferences : auth.preferences
});

const mapDispatchToProps = (dispatch) => ({
    updatePreferences : (payload) => updatePreferences(dispatch, payload),
    clearAlert: () => dispatch(clearAlert)
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPreferences);
