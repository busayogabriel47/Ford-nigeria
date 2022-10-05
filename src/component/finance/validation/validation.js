export const firstnameValidator = firstname => {
    if(!firstname){
        return "Firstname is required";
    }else if(firstname.length <= 2) {
        return "Firstname cannot be two letters";
    }

    return ""
}

export const lastnameValidator = lastname => {
    if(!lastname){
        return "lastname is required";
    }else if(lastname.length <= 2) {
        return "lastname cannot be two letters";
    }

    return ""
}



export const emailValidator = email => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "";
  };

export const mobilenoValidator = mobilenono => {
    if(!mobilenono){
        return "mobilenono no is required";
    }else if(!new RegExp(/^[0-9]\d{10}$/
    ).test(mobilenono)) {
        return "Please enter a valid phone number";
    }

    return ""
}

export const variantValidator = variant => {
    if(!variant){
        return "Please select your variant";
    }

    return ""
}

export const employmentValidator = employment => {
    if(!employment){
        return "Please select your employment status";
    }

    return ""
}

export const organizationValidator = organization => {
    if(!organization){
        return "Organization is required";
    }else if(organization.length <= 2) {
        return "Organization cannot be two letters";
    }

    return ""
}

