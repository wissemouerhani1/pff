var bcrypt = require('bcryptjs');
module.exports.isPasswordAlphanumeric=(password)=>{
    const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  
    return alphanumericRegex.test(password);
  }

  module.exports.hashPassword=(password)=>{
   return  bcrypt.hash(password, 10)
  }

  module.exports.VerifPassword=(password,hash)=>{
   return  bcrypt.compare(password, hash)
   }