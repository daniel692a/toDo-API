const { gql } = require('apollo-server');

const typeDefs = gql`
    type Tasks {
        id: String!
        title: String!
        completed: Boolean!
    }

    type Query{
    }
`;

module.exports = typeDefs;