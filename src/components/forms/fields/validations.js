const required = value => (value.trim() ? undefined : 'Required')

const requiredName = value => {    
    if(value){
        let entry = value.trim();
        if(entry){
            let pattern = /^[a-zA-Z ]{1,30}$/;
            return pattern.test(entry)? undefined : "Invalid entry";
        } 
    }    
    return "Required";            
}

const requiredCompany = value => {    
    if(value){
        let entry = value.trim();
        if(entry){
            let pattern = /^[a-zA-Z\s\d\.]{3,200}$/;
            return pattern.test(entry)? undefined : "Invalid company name";
        } 
    }    
    return "Company name is required";            
}

const requiredEmail = value => {    
    if(value){
        let entry = value.trim();
        if(entry){
            let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            return pattern.test(entry)? undefined : "Invalid email";
        } 
    }    
    return "Email is required";        
}

const requiredPhone = value => {    
    if(value){
        let entry = value.trim();
        if(entry){
            let pattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
            return pattern.test(entry)? undefined : "Invalid phone number";
        }
    }    
    return "Phone number is required";        
}

const requiredAddress = value => {    
    if(value){
        let entry = value.trim();
        if(entry){
            let pattern = /^[#.0-9a-zA-Z\s,-]+$/
            return pattern.test(entry)? undefined : "Invalid Address number";
        }
    }    
    return "Address is required field";        
}


const requiredPassword = value => {    
    if(value){        
        let entry = value.trim();
        return (entry.length >= 8)? undefined : "Min 8 characters required";        
    }    
    return "Invalid or no password";        
}

const validateForm = values => {
    const errors = {}    
    
    if (!values.password) {
        errors.password = 'Invalid or no password';
    } else{
        let password = values.password.trim();
        if (password.length < 8) {            
            errors.password = 'Invalid or no password';
        }
    } 
    
    if (!values.password_confirmation) {
      errors.password_confirmation = 'Please confirm password'
    } else {
        let confirmPassword = values.password_confirmation.trim();
        let password = values.password.trim();
        if (confirmPassword !== password) {            
          errors.password_confirmation = 'Passwords don\'t match'
        }        
    }
    
    return errors;
  }


  export {required, requiredCompany, requiredName, requiredEmail, requiredPhone, requiredPassword, validateForm, requiredAddress}