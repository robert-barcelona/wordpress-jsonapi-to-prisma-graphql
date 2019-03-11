const {getPosts} = require('../api/')
const resolvers = {
  Query: {
    posts: async (parent, args)=> {const results =await getPosts()
    console.log(results)
    return results},
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
