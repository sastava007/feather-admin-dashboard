import { ApolloServer } from "apollo-server";
import { connect } from "./config/db";
import { schema } from "./schema/index";

// Connect to the database
connect();

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
