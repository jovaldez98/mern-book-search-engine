const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login( email: String, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID): User
}
`;

module.exports = typeDefs;