const  {CategoryServices} = require('../../services')

const createCategory = async  (_,{input},{ userAuth }) =>{
    //create Category
    input.user= userAuth._id
   const category = await CategoryServices.createOneCategory(input)

   return category
}

const  updateCategory = async  (_,{id,input},{ userAuth }) =>{
    //update  category
    const category = await CategoryServices.updateById(id,input,userAuth);
    if(!category) throw new Error('There is not a note with that Id or not athorizated')
    return category
}

const  deleteCategory = async (_,{id},{ userAuth }) =>{
    const category = await CategoryServices.deleteOneCategory(id,userAuth);
    if(!category) throw new Error('There is not a note with that Id or not athorizated')
    return '200'
}

const  attachNoteToCategory= async (_,{categoryId,nodeId},{ userAuth }) =>{
  //update  category
  const category = await CategoryServices.attachNoteToCategory(categoryId,nodeId,userAuth);
  if(!category) throw new Error('There is not a note with that Id or not athorizated')
  return '200'
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    attachNoteToCategory
}