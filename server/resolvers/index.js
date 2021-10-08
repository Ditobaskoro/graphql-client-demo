require("dotenv").config()
const firebase = require("../firebase")
const userData = require("../functions/user.js")
const { UserInputError } = require("apollo-server")

const usersRef = firebase.database().ref('/users')

const resolvers = {
  Query: {
    users: async () => {
      const snapshot = await usersRef.once('value')
      const users = snapshot.val()
      const keys = Object.keys(users)
      const mapKeys = keys.map((key) => {
        const user = users[key]
        return userData(user, key)
      })
      return mapKeys
    },
    user: async (_, args) => {
      const snapshot = await usersRef.child(args.id).once('value')
      const user = snapshot.val()
      if (user) {
        return userData(user, args.id)
      }
      return null
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      await usersRef.push({ 
        name: args.name,
        createdAt: new Date().getTime()
       })
      return 'User Added!'
    },
    updateUser: async (_, args) => {
      const snapshot = await usersRef.child(args.id).once('value')
      const user = snapshot.val()
      if (user) {
        await usersRef.child(args.id).update({ name: args.name })
        return 'User Updated!'
      }
      throw new UserInputError('Invalid ID')
    },
    deleteUser: async (_, args) => {
      const snapshot = await usersRef.child(args.id).once('value')
      const user = snapshot.val()
      if (user) {
        await usersRef.child(args.id).remove()
        return 'User deleted!'
      }
      throw new UserInputError('Invalid ID')
    }
  }
}

module.exports = resolvers
