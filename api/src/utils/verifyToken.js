const jwt = require('jsonwebtoken');
const {UserServices} = require('../services');

const verifyToken = async req => {
    try {
        const Authorization = req.get('Authorization');
        // console.log('jwt: '+Authorization)
            
        if (Authorization) {
            //console.log('authneticando')
            // JWT sadsdfadsds.sadsdasdad.sasdadfdsfsd
            const formatedToken = Authorization.replace('JWT ','');
            // sadsdfadsds.sadsdasdad.sasdadfdsfsd
            const payload = jwt.verify(formatedToken, process.env.SECRET_KEY_JWT);
            if(!payload) return req;
            if (!payload.verification_code) {
            //console.log('authneticando1')

                const userAuth = await UserServices.getOneUserByEmail(payload.email);
                if (!userAuth ) return req;
                return userAuth;
            }
            else {
            //console.log('authneticando2')

            const userAuth = await UserServices.getOneUserByEmail(payload.email);
//                const userAuth = await getUserNAByPhone(payload.email);

            if (!userAuth ) return req;
            //console.log('authneticando3')
            return userAuth;
            }
            
        } else {
            //console.log('nada authneticando')

            return {};
        }
    }catch (e) {
        throw new Error(e.message);
    }
};


module.exports = verifyToken;