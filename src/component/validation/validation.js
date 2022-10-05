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


export const mileageValidator = mileage => {
    if(!mileage){
        return "mileage is required";
    }else if(!new RegExp(/^[0-9]*$/).test(mileage)) {
        return "Plese put a valid car mileage. Ex: 130,000 miles";
    }

    return ""
}

export const modelValidator = model => {

    if(!model){
        return "model is required";
    } else if (!new RegExp(/^(20[5-9]\d|20[0-4]\d|2050)$/).test(model)){
        return "Model must be 2015 upward!"
    }

    return ""
}


export const vehicleValidator = vehicle => {

    if(!vehicle){
        return "vehicle is required";
    }

    return ""
}