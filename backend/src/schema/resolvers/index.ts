import { DateTimeResolver } from "graphql-scalars";
import mongoose from "mongoose";
import { Policy } from "../../model/policy";

export const resolvers = {
  Query: {
    getAllPolicies: async () => {
      return await Policy.find({});
    },
  },
  Mutation: {
    updatePolicy: async (
      _: any,
      { id, policy }: { id: string; policy: any }
    ) => {
      const updatedPolicy = await Policy.findByIdAndUpdate(id, policy, {
        new: true,
      });
      return updatedPolicy;
    },
  },
  Date: DateTimeResolver,
};
