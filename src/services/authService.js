import axios from 'axios';
import { BaseUrl } from './settings';

const auth = {
    me: () => {
        return  axios
        .get(`${BaseUrl}frontend/v1/user`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth_token')
            }
        })
        .then(({data, status}) => {
            if(status == 200){
                return {currentUser : data}
            }
            return new Promise.reject("Unauthorized");
        })        
        .catch(error => {
            console.log("HEreare", error);
        });
    },
    register : (params) => {        
        return axios        
                .post(`${BaseUrl}frontend/v1/register`,params)
                .then(({data}) => {                    
                    console.log(data);
            }).catch(error => {
                console.log(error);
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