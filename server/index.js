const { ApolloServer } = require("apollo-server")
const firebaseClient = require("./firebase")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient
    }
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on  🚀  ${url}`)
  );
