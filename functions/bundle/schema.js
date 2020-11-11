const { gql } = require('apollo-server');

const typeDefs = gql`
    type Task {
        id: Int!
        title: String!
        completed: Boolean!
    }

    type Query{
        tasks: [Task]!
        task(id: Int!): Task
    }

    type Mutation{
        createTask(
            title: String!
            completed: Boolean!
        ): Task!
    }
`;

module.exports = typeDefs;