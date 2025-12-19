const express = require("express");
const complaintController = require("./../Controller/complaintController");
const complaintRoute = express.Router();
complaintRoute.route("/").get(complaintController.getAllComplaints).post(complaintController.createComplaint);
complaintRoute.route("/:id").get(complaintController.getComplaintById).put(complaintController.updateComplaint)
.delete(complaintController.deleteComplaint);
module.exports = complaintRoute;