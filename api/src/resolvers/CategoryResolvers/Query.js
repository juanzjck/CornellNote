const  {CategoryServices} = require('../../services')

const getCategoryInfo = async  (_,__,{ userAuth }) =>{
    const category = await CategoryServices.getOneNoteById(id)
    if(!category) throw new Error('There are not note whit that id')
    return category
}

const getCategories = async  (_,__,{ userAuth }) =>{
    const categories = await CategoryServices.getAllCategoryByUserId(userAuth._id)
    if(!categories) throw new Error('There are not notes for the user id')
    return categories
}

module.exports = {
    getCategoryInfo,
    getCategories
}