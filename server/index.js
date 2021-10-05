const { ApolloServer } = require('apollo-server');

const USERS = [{
  id: 'user-1',
  name: 'john'
}, {
  id: 'user-2',
  name: 'doe'
}]

const typeDefs = `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): String
    deleteUser(id: ID!): String
  }
  
  type User {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    users: () => USERS,
    user: (parent, args, context, info) => USERS.filter(user => user.id === args.id)[0]
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const id = `user-${(new Date()).getTime()}`
      USERS.push({ id, name: args.name })
      return "User added!"
    },
    deleteUser: (parent, args, context, info) => {
      const index = USERS.findIndex(user => user.id === args.id)
      if (index >= 0) {
        USERS.splice(index, 1)
        return "User deleted!"
      }
      return "User not found!"
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
