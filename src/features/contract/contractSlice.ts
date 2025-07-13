import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Topic = {
  id: string;
  title: string;
  description: string;
  formFields: string[];
  values: Record<string, string>;
};

interface ContractState {
  topics: Topic[];
  activeTopicId: string | null;
}

const initialState: ContractState = {
  topics: [
    {
      id: "introduction",
      title: "Introduction",
      description: "Overview and purpose of the contract.",
      formFields: ["Intro Text"],
      values: {},
    },
    {
      id: "position",
      title: "Position & Duties",
      description: "Describes job title and responsibilities.",
      formFields: ["Job Title", "Responsibilities"],
      values: {},
    },
    {
      id: "compensation",
      title: "Compensation",
      description: "Salary and bonus structure.",
      formFields: ["Base Salary", "Bonus", "Equity"],
      values: {},
    },
    {
      id: "benefits",
      title: "Benefits",
      description: "Details of employee benefits.",
      formFields: ["Health Insurance", "Retirement Plan", "Paid Leave"],
      values: {},
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      description: "Non-disclosure and data protection.",
      formFields: ["Confidential Info Scope"],
      values: {},
    },
    {
      id: "termination",
      title: "Termination",
      description: "Conditions for ending the agreement.",
      formFields: ["Notice Period", "Cause for Termination"],
      values: {},
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      description: "Handling of conflicts or legal issues.",
      formFields: ["Arbitration Method", "Jurisdiction"],
      values: {},
    },
    {
      id: "ip",
      title: "Intellectual Property",
      description: "Ownership of work created.",
      formFields: ["IP Ownership Clause"],
      values: {},
    },
    {
      id: "noncompete",
      title: "Non-Compete",
      description: "Restrictions on working with competitors.",
      formFields: ["Duration", "Scope"],
      values: {},
    },
    {
      id: "signatures",
      title: "Signatures",
      description: "Signature section for the parties.",
      formFields: ["Employee Signature", "Employer Signature"],
      values: {},
    },
  ],
  activeTopicId: null,
};

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setActiveTopic: (state, action: PayloadAction<string>) => {
      state.activeTopicId = action.payload;
    },
    updateField: (
      state,
      action: PayloadAction<{ topicId: string; field: string; value: string }>
    ) => {
      const topic = state.topics.find((t) => t.id === action.payload.topicId);
      if (topic) {
        topic.values[action.payload.field] = action.payload.value;
      }
    },
  },
});

export const { setActiveTopic, updateField } = contractSlice.actions;
export default contractSlice.reducer;
