const UserResolvers = require('./UserResolvers')
const CategoryResolvers = require('./CategoryResolvers')
const NoteResolvers = require('./NoteResolvers')

module.exports = {
    Query:{
        ...UserResolvers.Query,
        ...CategoryResolvers.Query,
        ...NoteResolvers.Query
    },
    Mutation:{
        ...UserResolvers.Mutation,
        ...CategoryResolvers.Mutation,
        ...NoteResolvers.Mutation
    }
}
