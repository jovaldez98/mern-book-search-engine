import { gql } from "apollo-server-express";

export const QUERY_ME = gql`
me {
    _id
    bookCount
    savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
}
`;

