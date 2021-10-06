const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const firebase = require("firebase")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
require("dotenv").config()

const app = express()

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
})

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
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}

startServer()

app.listen({ port: 4000 }, () => {
  console.log("Server has started 🚀 http://localhost:4000/graphql")
  console.log(`gql path is ${apolloServer.graphqlPath}`)
})
