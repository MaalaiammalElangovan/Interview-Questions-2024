function maskEmail(email) {
    var atIndex = email.indexOf('@');
    var maskedEmail = email.substring(1, atIndex) + '**' + email.substring(atIndex);
    return maskedEmail;
  }
  
  var email = 'example@example.com';
  var maskedEmail = maskEmail(email);
  console.log(maskedEmail); // Output: ex****@example.com

  
