function validateEmail(email = '') {
  let atpos = email.indexOf('@');
  let dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
  }
  return true;
};

export default validateEmail;
