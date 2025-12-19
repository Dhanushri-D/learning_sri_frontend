const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      enum: ["CSE", "ECE", "EEE", "IT", "MECH"],
    },
    year: {
      type: String,
      required: true,
      enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    },

    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    status: {
      type: String,
      default: "In Progress",
    },
    description: {
      type: String,
      required: true,
    },
        assignedTo: {
      type: String,
      default: "",
    },
    solution: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
    suggestion: {
      type: String,
      default: "",
    },
    contactPerson: {
      name: { type: String, default: "" },
      mobile: { type: String, default: "" },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Complaint", complaintSchema);