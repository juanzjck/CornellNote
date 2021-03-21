const  {NoteServices} = require('../../services')

const getNoteInfo = async (_,{id},{ userAuth }) =>{
    const note = await NoteServices.getOneNoteById(id)
    if(!note) throw new Error('There are not note whit that id')
    if(note.user===userAuth._id)throw new Error('This is not your note')
    return note
}

const getNotes = async  (_,__,{ userAuth }) =>{
    const notes = await NoteServices.getAllNotesByUserId(userAuth._id)
    if(!notes) throw new Error('There are not notes for the user id')

    return notes
}

module.exports = {
    getNoteInfo,
    getNotes
}