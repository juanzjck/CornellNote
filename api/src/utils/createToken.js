const jwt = require('jsonwebtoken');

/*
header
payload
signature
*/

const createToken = (params, options) =>{
    const payload = {
       email: params.email,
       first_natem:params.first_name,
    };
    const token=jwt.sign(payload, process.env.SECRET_KEY_JWT, options)
    return token
};

const createTokenRegister = ({email, verification_code}) =>{
    const payload = {
        email,
        verification_code,
    };
    return jwt.sign(payload, process.env.SECRET_KEY_JWT,{ expiresIn:  20 * 60 });
};

module.exports = {
    createToken,
    createTokenRegister,
};