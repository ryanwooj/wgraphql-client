import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://graphql.devrwoo.now.sh/"
});

export default client;
