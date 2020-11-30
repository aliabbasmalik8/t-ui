export default function validateAuth(values, initialErrors, inputFields) {
  const errors = { ...initialErrors };
  let error = null;
  if (inputFields.email || inputFields.email === '') {
    error = validateEmail(values);
    if (error) {
      errors.email = error;
    } else {
      delete errors.email;
    }
  }

  if (inputFields.password || inputFields.password === '') {
    error = validatetPassword(values);
    if (error) {
      errors.password = error;
    } else {
      delete errors.password;
    }
  }

  if (inputFields.confirmPassword || inputFields.confirmPassword === '') {
    error = validateConfirmPassword(values);
    if (error) {
      errors.confirmPassword = error;
    } else {
      delete errors.confirmPassword;
    }
  }

  if (inputFields.name || inputFields.name === '') {
    error = validateName(values);
    if (error) {
      errors.name = error;
    } else {
      delete errors.name;
    }
  }

  return errors;
}

function validateEmail(values) {
  let error = null;
  if (!values.email) {
    error = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatetPassword(values) {
  let error = null;
  if (!values.password) {
    error = 'Please enter your password.';
  } else if (values.password.length < 6) {
    error = 'Password must be at least 6 characters';
  }
  return error;
}

function validateConfirmPassword(values) {
  let error = null;
  if (!values.confirmPassword) {
    error = 'Please retype your password.';
  } else if (values.password !== values.confirmPassword) {
    error = 'Confirm password must be match to password';
  }
  return error;
}

function validateName(values) {
  let error = null;
  if (!values.name) {
    error = 'Please enter your full name.';
  }
  return error;
}
