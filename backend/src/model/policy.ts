import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true },
  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
  },
  provider: { type: String, required: true },
  insurance_type: { type: String, required: true },
  status: { type: String, required: true },
  policyNumber: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, required: true },
});

export const Policy = mongoose.model("policies", PolicySchema);
