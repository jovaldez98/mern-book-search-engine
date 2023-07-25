const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLScalarType } = require('graphql');

const resolvers = {
    Query: {
        me: async (_, args, context) => {
            
        }
    }
}