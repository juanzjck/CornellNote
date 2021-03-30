const Note = require('../models/Note');

const getAllNotes = () => Note.find(); 

const getAllNotesByUserId = (id) => Note.find({user:id}); 

const getOneNoteById = async (id,userAuth) =>await Note.findById(id).then((note)=>{
    if(!(`${note.user}`==`${userAuth._id}`))return null
    return note
}) 


const createOneNote = (data) => Note.create(data);

const updateById = (id, data,userAuth ) =>Note.findById(id).then((note)=>{
  
    if(!(`${note.user}`==`${userAuth._id}`))return null
    return Note.findByIdAndUpdate({ 
        _id: id,user:userAuth._id}, { ...data }, {new: true});
}) 


const deleteOneNote = (id,userAuth) => Note.findById(id).then((note)=>{
    if(!(`${note.user}`==`${userAuth._id}`))return null
    return Note.deleteOne({_id: id,user:userAuth._id});
}) 



const countNotes = async () => {
    const numNotes = await Note.countDocuments({});
    return numNotes;
};






module.exports = {
    getAllNotes,
    createOneNote,
    updateById,
    deleteOneNote,
    getOneNoteById,
    countNotes,
    getAllNotesByUserId
};