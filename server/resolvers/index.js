const fetch = require("node-fetch")
const userData = require("../functions/user.js")
const baseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(`${baseURL}/users.json`)
      const dataJson = await data.json()
      const keys = Object.keys(dataJson)
      const mapKeys = keys.map((item) => {
        const data = dataJson[item]
        return userData(data)
      })
      return mapKeys
    }
  }
}

module.exports = resolvers
