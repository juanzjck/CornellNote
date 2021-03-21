const bcrypt = require('bcrypt');
const { UserServices } = require('../services');
const { createToken , createTokenRegister } = require('./createToken');

const authenticate = ({email, password}, time={}) => {

       return new Promise((resolve, reject)=>{
            UserServices.getOneUserByEmail(email).then(async userAuth => {
            
                if(!userAuth) reject(new Error('Auth: User not exist'));
                bcrypt.compare(password, userAuth.password, (err, isValid) => {
                    if(err) reject(new Error('Auth: Error to compare'));
                    isValid?resolve(createToken(userAuth, time)): reject(new Error('No correct password')); 
                });
                
            })
        });
    
};


const authenticateRegister = ({email, verification_code}) => {
    return new Promise((resolve, reject)=>{

            const token = createTokenRegister({email, verification_code})    

            if (!token) reject(new Error('Error to compare'));
            else resolve(token);
    });
};

module.exports = {
    authenticate,
    authenticateRegister
};
