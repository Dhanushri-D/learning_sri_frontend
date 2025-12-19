import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/adminComplaints.css";
const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/complaints");
        const result = await res.json();

        if (res.ok) {
          setComplaints(result.data);
        } else {
          alert("Failed to load complaints");
        }
      } catch (error) {
        console.error(error);
        alert("Server error");
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Delete this complaint?")) return;
    try {
      await fetch(`http://localhost:8000/api/v1/complaints/${id}`, {
        method: "DELETE",
      });
      setComplaints((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Failed to delete complaint");
    }
  };
  if (loading) return <h2>Loading complaints...</h2>;
  return (
    <div className="adminComplaints">
      <h1>All Complaints</h1>
      <div className="complaintTable">
        <div className="tableHeader">
          <span>ID</span>
          <span>Title</span>
          <span>User</span>
          <span>Category</span>
          <span>Priority</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        {complaints.map((item) => (
          <div
            key={item.id}
            className="tableRow"
            onClick={() => navigate(`/admin/complaints/${item.id}`)}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.name || "Anonymous"}</span>
            <span>{item.category}</span>
            <span className={`priority ${item.priority.toLowerCase()}`}>
              {item.priority}
            </span>
            <span
              className={`status ${item.status
                .replace(" ", "")
                .toLowerCase()}`}>
              {item.status}
            </span>
            <div className="actions">
              <button
                className="updateBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/admin/complaints/${item.id}`);
                }}
              >
                Update
              </button>
              <button
                className="deleteBtn"
                onClick={(e) => handleDelete(e, item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminComplaints;