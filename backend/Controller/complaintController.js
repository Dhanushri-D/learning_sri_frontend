const Complaint = require("../Model/Complaint");
exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json({
      status: "success",
      time: req.requestTimeOfHit,
      data: complaint,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json({
      status: "success",
      count: complaints.length,
      data: complaints,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ id: req.params.id });

    if (!complaint) {
      return res.status(404).json({
        status: "failed",
        message: "Complaint not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: complaint,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findOneAndUpdate(
      { id: req.params.id },
      {
        assignedTo: req.body.assignedTo,
        solution: req.body.solution,
        notes: req.body.notes,
        suggestion: req.body.suggestion,
        status: "Resolved",
        contactPerson: {
          name: req.body.name,
          mobile: req.body.mobile,
        },
      },
      { new: true, runValidators: true }
    );
    if (!complaint) {
      return res.status(404).json({
        status: "failed",
        message: "Complaint not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: complaint,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
exports.deleteComplaint = async (req, res) => {
  try {
    await Complaint.findOneAndDelete({ id: req.params.id });
    res.status(200).json({
      message:"Deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};