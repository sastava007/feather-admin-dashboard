import { gql } from "@apollo/client";

export const GET_ALL_POLICIES = gql`
  query Query {
    getAllPolicies {
      _id
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      insurance_type
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;
