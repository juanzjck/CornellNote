const Category = require('../models/Category');
const Note = require('../models/Note');

const getAllCategory = () => Category.find(); 


const getAllCategoryByUserId = (id) => Category.find({user:id}).populate({
    path: 'notes',
    model: 'Note',
}); ; 

const getOneCategoryById = (id,userAuth) => Category.findById(id).then((category)=>{
    if(!(`${category.user}`==`${userAuth._id}`))return null
    return Category.findById({ _id: id,user:userAuth._id});
}) 

const createOneCategory = (data) => Category.create(data);

const updateById = (id, data,userAuth) => Category.findById(id).then((category)=>{
    if(!(`${category.user}`==`${userAuth._id}`))return null
    return Category.findByIdAndUpdate({ 
        _id: id,user:userAuth._id}, { ...data }, {new: true});
}) 

const attachNoteToCategory = (categoryId,nodeId,userAuth) => Category.findById(categoryId).then((category)=>{
    console.log(`---beginning ${category.user} ${userAuth._id}`)
    if(!(`${category.user}`==`${userAuth._id}`))return null
 
    return Note.findById(nodeId).then(note=>{
        if(!(`${ note.user}`==`${userAuth._id}`))return null
        return category
    })
 
}).then(cat=>{
    console.log(`----next ${cat}`)
    if(cat==null)return null
    cat.notes.push(nodeId)
    return Category.findByIdAndUpdate({ 
        _id: categoryId,user:userAuth._id}, { ...cat }, {new: true});
})

const deleteOneCategory = (id,userAuth) => Category.findById(id).then((category)=>{
    if(!(`${category.user}`==`${userAuth._id}`))return null
    return Category.deleteOne({_id: id,user:userAuth._id});
}) 

const countCategory = async () => {
    const numCategory = await Category.countDocuments({});
    return numCategory;
};






module.exports = {
    getAllCategory,
    createOneCategory,
    updateById,
    deleteOneCategory,
    getOneCategoryById,
    countCategory,
    getAllCategoryByUserId,
    attachNoteToCategory
};