import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ComplaintDetails = () => {
  const navigate = useNavigate();
  const { complaintId } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/complaints/${complaintId}`
        );
        const result = await res.json();

        if (res.ok) {
          setComplaint(result.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchComplaint();
  }, [complaintId]);
  if (loading) return <h2>Loading...</h2>;
  if (!complaint) return <h2>Complaint Not Found</h2>;
  return (
    <div className="detailsPage">
      <h1>{complaint.title}</h1>
      <div className="detailsBox">
        <p><strong>Category:</strong> {complaint.category}</p>
        <p><strong>Priority:</strong> {complaint.priority}</p>
        <p><strong>Status:</strong> {complaint.status}</p>
        <p><strong>Description:</strong> {complaint.description}</p>
      </div>
      <button
        className="solutionBtn"
        onClick={() => navigate(`/solution/${complaint.id}`)}
      >
        View Solution
      </button>
    </div>
  );
};
export default ComplaintDetails;