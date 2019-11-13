var graphqlhubSchemas = require('../');

var Reddit = graphqlhubSchemas.Reddit;

var _graphql = require('../../node_modules/graphql');

var GraphQLSchema = _graphql.GraphQLSchema;
var graphql = _graphql.graphql;

var schema = new GraphQLSchema({
  query: Reddit.QueryObjectType
});

var query = ' { user(username: "kn0thing") { username }  }';
graphql(schema, query).then(function(result) {
  console.log(result);
});
