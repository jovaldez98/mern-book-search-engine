import { gql } from "apollo-server-express";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password){
        token
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookData) {
        _id
        }
    }
}
`; 

// export const DELETE_BOOK = gql`
