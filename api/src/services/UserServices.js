const User = require('../models/User');
const Passwords = require('../models/Password');

const getAllUsers = () => User.find(); 

const getOneUserById = (id) => User.findById({ _id: id, is_active: true});

const getOneUserByEmail = (email) => User.findOne({ email: email, is_active: true});

const createOneUser = (data) => User.create(data);

const updateById = (id, data) => User.findByIdAndUpdate({ 
    _id: id, is_active: true
}, { ...data }, {new: true});


const deleteOneUser = (id) => User.deleteOne({_id: id});

const countUsers = async () => {
    const numUsers = await User.countDocuments({});
    return numUsers;
};





const getPasswords = user => Passwords.find({ user })
    .populate([{ path: 'user', model: 'usersYapa' }])

const createPassword = data => Passwords.create(data)

module.exports = {
    getAllUsers,
    createOneUser,
    updateById,
    deleteOneUser,
    getOneUserById,
    countUsers,
    getPasswords,
    createPassword,
    getOneUserByEmail
};