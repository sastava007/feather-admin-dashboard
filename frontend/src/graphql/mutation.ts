import { gql } from "@apollo/client";

export const UPDATE_POLICY = gql`
  mutation Mutation($updatePolicyId: String!, $policy: PolicyInput) {
    updatePolicy(id: $updatePolicyId, policy: $policy) {
      _id
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      insurance_type
      policyNumber
      status
      startDate
      endDate
      createdAt
    }
  }
`;
