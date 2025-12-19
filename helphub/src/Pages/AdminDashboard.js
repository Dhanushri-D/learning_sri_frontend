import { useNavigate } from "react-router-dom";
import "./../Styles/adminDashboard.css";
const AdminDashboard = () => {
const navigate = useNavigate();
  return (
    <div className="adminDashboard">
      <div className="adminInfo">
        <h1>Admin Dashboard</h1>
        <p><strong>Name:</strong> Campus Admin</p>
        <p><strong>Email:</strong> admin@helphub.com</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
      <div className="adminCards">
        <div
          className="adminCard"
          onClick={() => navigate("/admin/complaints")}
        >
          <h2>Complaints</h2>
          <p>View and manage all complaints</p>
        </div>

        <div
          className="adminCard"
          onClick={() => navigate("/admin/users")}
        >
          <h2>Users</h2>
          <p>View registered users</p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;