const axios = require('axios')

const baseURL = 'http://localhost/wordpress/wp-json/wp/v2'

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
