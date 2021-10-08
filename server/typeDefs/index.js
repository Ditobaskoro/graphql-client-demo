const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): String
    updateUser(id: ID!, name: String!): String
    deleteUser(id: ID!): String
  }

  type User {
    id: ID!
    createdAt: String!
    name: String!
  }
`;

module.exports = typeDefs
