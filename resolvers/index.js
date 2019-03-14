const axios = require('axios')
require('dotenv').config()


const baseURL = process.env.WP_JSON_API_SERVICE

const resolvers = {
  Query: {
    posts: async () => {
      try {
        const results = await axios.get(`${baseURL}/posts`)
        return results.data
      } catch (e) {
        console.error(e.toString())
      }
    },
    post: async (parent, args) => {
      const {id} = args
      try {
        const results = await axios.get(`${baseURL}/posts/${id}`)
        return results.data
      } catch (e) {
        console.error(e.toString())
      }
    }
  }
}

module.exports = resolvers;
