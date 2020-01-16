import axios from 'axios';
import { BaseUrl } from './settings';
const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem('auth_token')
    }
};

const auth = {
    me: () => {
        return  axios
        .get(`${BaseUrl}frontend/v1/user`,config)
        .then(({data, status}) => {
            if(status == 200){
                return {currentUser : data}
            }
            return{currentUser : {}, error: "Unauthorized"};
        })        
        .catch(error => ({
            currentUser : {}, error
        }))

    },profile: {

        broker :    (payload)=>
                        axios
                        .post(`${BaseUrl}frontend/v1/brokers/profile`,payload, config)
                        .then(({data, status}) => {
                            if(status == 200){
                                return {currentUser : data}
                            }       
                            return new Promise.reject("Unauthorized");
                        })        
                        .catch(error => error),

        investor :  (payload) =>
                        axios
                        .post(`${BaseUrl}frontend/v1/investors/profile`, payload, config)
                        .then(({data, status}) => {
                            if(status == 200){
                                return {currentUser : data}
                            }       
                            return new Promise.reject("Unauthorized");
                        })        
                        .catch(error => error)        
                     
    },preferences: {

        investor :  (payload) => 
                        axios
                        .post(`${BaseUrl}frontend/v1/investors/profile-settings`,payload, config)
                        .then((response) => {                    
                            let {data, status} = response;
                            if(status == 200){
                                return {currentUser : data, message : "PReferences Updated successfully", error:null}
                            } 
                            return {currentUser : null, message:null, error:"Failed"}                     
                        })        
                        .catch(error => ({currentUser : null, message:null, error}))
            
    },
    register : (params) => {        
        return axios        
                .post(`${BaseUrl}frontend/v1/register`,params)
                .then(({data, status}) => {            
                    if(status == 200){                        
                        return {currentUser:data.user, token:data.token}
                    }                       
                    return{currentUser : {}, error: "Unauthorized"};

            }).catch(error => {                
                return {currentUser: null, message : JSON.stringify(error.message)}
            });
    },
    login : (params) => {
        return axios
                .post(`${BaseUrl}frontend/v1/login`,params)
                .then(({data}) => {                    
                    if(data.token){            
                        let {token} = data;
                        let { user } = data;                                                
                        return {
                                token, 
                                payload : { currentUser : user } ,
                                success : true, message: 'Login successfull!'
                            }
                    } else {                        
                        return {
                            token : null,
                            payload: null,
                            success : false,
                            error : data.error? data.error : null,
                            message : "Login Failed! Invalid credentials."
                        }
                    }        

                }).catch(error => {                                       ;
                    return {
                        success : false,
                        token : null,
                        payload: null,
                        error : error.response.data.error,
                        message : null
                    }
                });
    }
}

export default auth;