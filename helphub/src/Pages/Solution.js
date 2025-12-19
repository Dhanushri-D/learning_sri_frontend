import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Solution = () => {
  const { complaintId } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const res = await fetch(
          `https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints/${complaintId}`
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
    fetchSolution();
  }, [complaintId]);
  if (loading) return <h2>Loading...</h2>;
  if (!complaint) return <h2>Solution Not Found</h2>;
  if (!complaint.solution || complaint.solution.trim() === "") {
    return (
      <div className="solutionPage">
        <div className="solutionBox">
          <p><strong>Status:</strong> {complaint.status}</p>
          <p>Complaint is under review. Please check back later.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="solutionPage">
      <h1>{complaint.title}</h1>
      <div className="solutionBox">
        <p><strong>Solution:</strong> {complaint.solution}</p>
        <p><strong>Note:</strong> {complaint.notes}</p>
        <p><strong>Suggestion:</strong> {complaint.suggestion}</p>
        {complaint.contactPerson && (
          <>
            <p><strong>Person to Contact:</strong> {complaint.contactPerson.name}</p>
            <p><strong>Mobile:</strong> {complaint.contactPerson.mobile}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default Solution;