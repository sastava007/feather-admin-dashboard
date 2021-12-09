import { join } from "path";
import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers/index";

export const schema = makeExecutableSchema({
  typeDefs: [
    readFileSync(__dirname.concat("/types/Customer.graphql"), "utf8"),
    readFileSync(__dirname.concat("/types/InsuranceType.graphql"), "utf8"),
    readFileSync(__dirname.concat("/types/Policy.graphql"), "utf8"),
    readFileSync(__dirname.concat("/types/PolicyStatus.graphql"), "utf8"),
    readFileSync(__dirname.concat("/queries/Query.graphql"), "utf8"),
  ],
  resolvers,
});
