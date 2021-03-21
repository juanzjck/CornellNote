const  {UserServices} = require('../../services')

const getUser = async (_,__,{ userAuth }) =>{
    return 'Hola'
}

module.exports = {
    getUser
}