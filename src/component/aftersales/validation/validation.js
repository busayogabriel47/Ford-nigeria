export const firstnameValidator = (firstname) => {
  if (!firstname) {
    return 'Firstname is required';
  } else if (firstname.length <= 2) {
    return 'Firstname cannot be two letters';
  }

  return '';
};

export const lastnameValidator = (lastname) => {
  if (!lastname) {
    return 'lastname is required';
  } else if (lastname.length <= 2) {
    return 'lastname cannot be two letters';
  }

  return '';
};

export const emailValidator = (email) => {
  if (!email) {
    return 'Email is required';
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return 'Incorrect email format';
  }
  return '';
};

export const mobilenoValidator = (mobilenono) => {
  if (!mobilenono) {
    return 'mobilenono no is required';
  } else if (!new RegExp(/^[0-9]\d{10}$/).test(mobilenono)) {
    return 'Please enter a valid phone number';
  }

  return '';
};

export const variantValidator = (variant) => {
  if (!variant) {
    return 'Please select your variant';
  }

  return '';
};

export const yearValidator = (year) => {
  if (!year) {
    return 'Please select your year model';
  }

  return '';
};

export const vinValidator = (vin) => {
  if (!vin) {
    return 'vin is required';
  } else if (vin.length <= 2) {
    return 'vin cannot be two letters';
  }

  return '';
};

export const partValidator = (part) => {
  if (!part) {
    return 'part is required';
  } else if (part.length <= 2) {
    return 'part cannot be two letters';
  }

  return '';
};
