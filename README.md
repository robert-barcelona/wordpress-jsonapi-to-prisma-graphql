**WP-SERVER**

Sample application to provide a GraphQL interface to a WordPress site through the WP JSON API.  This server is built on GraphQL-Yoga and resolves the GraphQL queries through REST calls to the WP JSON API

**Getting Started**

Install Node Modules 

`yarn`

and start server

`node index.js` 

Specify Wordpress JSON API URL in `.env`

`WP_JSON_API_SERVICE=http://localhost/wordpress`

This url will form the base for the complete JSON API url, which will be of the form `http://localhost/wordpress/wp-json/wp/v2"`


The server will run on port 4000

**Built With**

- GraphQL-Yoga
- Axios

