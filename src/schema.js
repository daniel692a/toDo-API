const { gql } = require('apollo-server');

const typeDefs = gql`
    type Task {
        id: Int!
        title: String!
        completed: Boolean!
    }

    type Query{
        tasks(id: Int!): Task
    }

    input TaskInput {
        id: Int!
        title: String!
        completed: Boolean!
    }

    type Mutation{
        createTask(
            data: TaskInput!
        ): Task!
        editTask(
            title: String!
            completed: Boolean!
        ): Task!
        deleteTask(id: Int!): Boolean!
    }
`;

module.exports = typeDefs;