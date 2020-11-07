const { gql } = require('apollo-server');

const typeDefs = gql`
    type Task {
        id: Int!
        title: String!
        completed: Boolean!
    }

    type Query{
        taskstodo(id: Int!): [Tasks!]!
    }

    type Mutation{
        createTask(
            id: Int!
            title: String!
            completed: Boolean!
        ): Task!
        editTask(
            title: String!
            completed: Boolean!
        ): taskstodo!
        deleteTask(id: Int!): Boolean!
    }
`;

module.exports = typeDefs;