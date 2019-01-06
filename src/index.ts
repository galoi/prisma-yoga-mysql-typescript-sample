import { GraphQLServer } from 'graphql-yoga';

// GraphQL SDLに沿ってschemaを定義
// const typeDefs = `
//   type Query {
//     description: String
//   }
// `;

// GraphQL APIのリクエストに応えるための実装
const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`,
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`),
);
