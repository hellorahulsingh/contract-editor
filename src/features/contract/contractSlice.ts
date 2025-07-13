import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Topic = {
  id: string;
  title: string;
  description: string;
  formFields: string[];
  values: Record<string, string>;
  isActive: boolean; // NEW
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
      description: "This Employment Agreement (the “Agreement”) is made and entered into by and between the Employer and the Employee, collectively referred to as the “Parties.” The Agreement sets forth the terms and conditions of employment effective as of the commencement date stated herein.",
      formFields: ["Intro Text"],
      values: {},
      isActive: true,
    },
    {
      id: "position",
      title: "Position & Duties",
      description: "The Employee shall serve in the position of [Job Title] and shall perform all duties and responsibilities as are customary for such position and as may be assigned from time to time by the Employer. The Employee agrees to devote their full working time and attention to the business of the Employer.",
      formFields: ["Job Title", "Responsibilities"],
      values: {},
      isActive: true,
    },
    {
      id: "compensation",
      title: "Compensation",
      description: "As compensation for the services rendered, the Employee shall receive a base salary of [Base Salary] per annum, payable in accordance with the Employer’s standard payroll schedule. The Employee may also be eligible for bonuses or incentive compensation at the sole discretion of the Employer.",
      formFields: ["Base Salary", "Bonus", "Equity"],
      values: {},
      isActive: true,
    },
    {
      id: "benefits",
      title: "Benefits",
      description: "The Employee shall be entitled to participate in all benefit plans and programs generally available to similarly situated employees of the Employer, including but not limited to health insurance, retirement plans, and paid time off, subject to the terms and conditions of such plans.",
      formFields: ["Health Insurance", "Retirement Plan", "Paid Leave"],
      values: {},
      isActive: true,
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      description: "The Employee agrees that during and after the term of employment, they shall not disclose to any third party or use for their own benefit any confidential or proprietary information belonging to the Employer, except as necessary in the ordinary course of performing duties under this Agreement.",
      formFields: ["Confidential Info Scope"],
      values: {},
      isActive: true,
    },
    {
      id: "termination",
      title: "Termination",
      description: "Either party may terminate this Agreement at any time by providing [Notice Period] days written notice. The Employer may terminate the Employee immediately for cause, including but not limited to gross misconduct, breach of this Agreement, or violation of company policies.",
      formFields: ["Notice Period", "Cause for Termination"],
      values: {},
      isActive: true,
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      description: "Any dispute arising out of or relating to this Agreement shall be resolved through binding arbitration in accordance with the rules of the [Arbitration Body]. The arbitration shall be conducted in [Jurisdiction], and judgment on the award rendered may be entered in any court having jurisdiction.",
      formFields: ["Arbitration Method", "Jurisdiction"],
      values: {},
      isActive: true,
    },
    {
      id: "ip",
      title: "Intellectual Property",
      description: "The Employee agrees that any inventions, designs, works of authorship, or trade secrets developed in the course of employment shall be the sole and exclusive property of the Employer. The Employee hereby assigns all rights to such intellectual property to the Employer.",
      formFields: ["IP Ownership Clause"],
      values: {},
      isActive: true,
    },
    {
      id: "noncompete",
      title: "Non-Compete",
      description: "During the term of employment and for a period of [Duration] following termination, the Employee shall not directly or indirectly engage in any business that competes with the Employer within [Scope] geographic region, without prior written consent.",
      formFields: ["Duration", "Scope"],
      values: {},
      isActive: true,
    },
    {
      id: "signatures",
      title: "Signatures",
      description: "IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above.\n\n__________________________\nEmployee Signature\n\n__________________________\nEmployer Signature",
      formFields: ["Employee Signature", "Employer Signature"],
      values: {},
      isActive: true,
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
    toggleTopicActive: (state, action: PayloadAction<string>) => {
      const topic = state.topics.find((t) => t.id === action.payload);
      if (topic) {
        topic.isActive = !topic.isActive;
      }
    }
  },
});

export const { setActiveTopic, updateField, toggleTopicActive } = contractSlice.actions;
export default contractSlice.reducer;
