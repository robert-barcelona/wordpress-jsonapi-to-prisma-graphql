const resolvers = require('./resolvers')

const {GraphQLServer} = require('graphql-yoga')

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

server.start(() => console.log('server started and running on http://localhost:4000'))
