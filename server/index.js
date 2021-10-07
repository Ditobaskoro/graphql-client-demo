const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const cors = require("cors")
const firebaseClient = require("./firebase")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true
};

let apolloServer = null

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return {
         headers: req.headers,
         firebaseClient
      }
    }
  })

  app.use(cors(corsOptions))

  await apolloServer.start()
  apolloServer.applyMiddleware({ 
    app, 
    cors: false 
  })
}

startServer()

app.listen({ port: 4000 }, () => {
  console.log("Server has started 🚀 http://localhost:4000/graphql")
})
