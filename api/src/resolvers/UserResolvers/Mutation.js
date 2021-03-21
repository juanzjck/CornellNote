const  {UserServices} = require('../../services')
const {authenticate,authenticateRegister} = require('../../utils/authenticate');
const createUser = async (_,{input}) =>{
    //create Note
   const user = await UserServices.createOneUser(input)

   return user
}

const  updateUser = async (_,{id,input},{ userAuth }) =>{
    //update  Note 
    const userToUpdate=await UserServices.getOneUserById(id)
    if(userToUpdate._id===userAuth._id)throw new Error('This is not your profile')
    const user = await UserServices.updateById(id,input);
    return user
}

const  deleteUser = async (_,{id},{ userAuth }) =>{
    const userToDelete=await UserServices.getOneUserById(id)
    if(userToDelete._id===userAuth._id)throw new Error('This is not your profile')
    const note = await NoteServices.deleteOneNote(id);
    if(!note) throw new Error('There is not a note with that Id')
    return '200'
}

const  login = async (_,{email,password}) =>{
    const params={email,password}
    const token = await authenticate( params, { expiresIn: '2d' })
    return {token:token,message:'ok'}
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    login
}