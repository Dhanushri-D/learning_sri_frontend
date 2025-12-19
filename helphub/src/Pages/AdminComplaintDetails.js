import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../Styles/adminComplaintDetails.css";
const AdminComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [solution, setSolution] = useState("");
  const [notes, setNotes] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMobile, setContactMobile] = useState("");
  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const res = await fetch(
          `https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints/${id}`
        );
        const result = await res.json();
        if (res.ok) {
          setComplaint(result.data);
          setSolution(result.data.solution || "");
          setNotes(result.data.notes || "");
          setSuggestion(result.data.suggestion || "");
          setContactName(result.data.contactPerson?.name || "");
          setContactMobile(result.data.contactPerson?.mobile || "");
        }
      } catch (error) {
        alert("Failed to load complaint");
      } finally {
        setLoading(false);
      }
    };
    fetchComplaint();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      assignedTo: "IT Support",
      solution,
      notes,
      suggestion,
      name: contactName,
      mobile: contactMobile,
    };
    try {
      const res = await fetch(
        `https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      if (res.ok) {
        setComplaint(result.data);
        alert("Complaint resolved and saved successfully!");
      } else {
        alert(result.message || "Update failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };
  if (loading) return <h2>Loading complaint...</h2>;
  if (!complaint) return <h2>Complaint not found</h2>;
  return (
    <div className="adminComplaintDetails">
      <h1>Complaint Details</h1>
      <div className="detailsCard">
        <div className="detailsContent">
          <h2>{complaint.title}</h2>
          <p><b>ID:</b> {complaint.id}</p>
          <p><b>Category:</b> {complaint.category}</p>
          <p><b>Priority:</b> {complaint.priority}</p>
          <p><b>Status:</b> {complaint.status}</p>
          <p><b>Description:</b> {complaint.description}</p>
          <h3>User Info</h3>
          <p>{complaint.name}</p>
          <p>{complaint.department}</p>
          <p>{complaint.year}</p>
        </div>
      </div>
      {complaint.solution ? (
        <div className="solutionBox">
          <h3>Solution</h3>
          <p>{complaint.solution}</p>
          <h4>Notes</h4>
          <p>{complaint.notes}</p>
          <h4>Suggestion</h4>
          <p>{complaint.suggestion}</p>
          <h4>Contact Person</h4>
          <p>{complaint.contactPerson?.name}</p>
          <p>{complaint.contactPerson?.mobile}</p>
        </div>
      ) : (
        <form className="solutionForm" onSubmit={handleSubmit}>
          <h3>Add Solution</h3>
          <textarea
            placeholder="Enter solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
          <textarea
            placeholder="Internal notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <textarea
            placeholder="Suggestion for user"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact person name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact person mobile"
            value={contactMobile}
            onChange={(e) => setContactMobile(e.target.value)}
          />
          <button type="submit">Mark as Resolved</button>
        </form>
      )}
    </div>
  );
};
export default AdminComplaintDetails;