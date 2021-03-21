const  {NoteServices} = require('../../services')

const createNote = async (_,{input},{ userAuth }) =>{
    //create Note
   input.user=userAuth._id;
   const note = await NoteServices.createOneNote(input)

   return note

}

const  updateNote = async  (_,{id,input},{ userAuth }) =>{
    //update  Note 
    const note = await NoteServices.updateById(id,input,userAuth);
    if(!note ) throw new Error('There is not a note with that Id or not authorizate')
    return note
}

const  deleteNote = async  (_,{id},{ userAuth }) =>{
    const note = await NoteServices.deleteOneNote(id,userAuth);
    if(!note ) throw new Error('There is not a note with that Id or not authorizate')
    return '200'
}

module.exports = {
    createNote,
    updateNote,
    deleteNote
}