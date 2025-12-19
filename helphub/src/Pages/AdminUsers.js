import { useEffect, useState } from "react";
import "./../Styles/adminUsers.css";
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints"
        );
        const result = await res.json();
        if (!res.ok) {
          alert("Failed to load users");
          return;
        }
        const complaints = result.data;
        const usersMap = {};
        complaints.forEach((item) => {
          const key = `${item.name}-${item.department}-${item.year}`;
          if (!usersMap[key]) {
            usersMap[key] = {
              name: item.name || "Anonymous",
              department: item.department || "-",
              year: item.year || "-",
              complaintCount: 1,
            };
          } else {
            usersMap[key].complaintCount += 1;
          }
        });
        setUsers(Object.values(usersMap));
      } catch (err) {
        console.error(err);
        alert("Server error");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <h2>Loading users...</h2>;
  return (
    <div className="adminUsers">
      <h1>Registered Users</h1>
      <table className="usersTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Total Complaints</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>{user.year}</td>
              <td>{user.complaintCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminUsers;